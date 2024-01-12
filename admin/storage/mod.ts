import { Resolvable } from "deco/engine/core/resolver.ts";
import { type fjp, Notify } from "../deps.ts";

export interface Author {
  name: string;
}
export interface ChangeSetMetadata {
  authors: Author[];
  timestamp: number;
}
export interface ChangeSet {
  id: string;
  patches: fjp.Operation[];
  metadata: ChangeSetMetadata;
}

export type Decofile = Record<string, Resolvable>;

export interface State {
  decofile: Decofile;
  revision: string;
}
// deno-lint-ignore no-empty-interface
export interface PullStateOpts {}
export interface AddChangeSetOpts {
  changeSet: ChangeSet;
}

export interface ForkOpts {
  name: string;
}

// deno-lint-ignore no-empty-interface
export interface CommitOpts {}
export interface ListenOpts {
  since?: string;
}

export interface Disposable {
  dispose(): void;
}

export interface LogSinceOpts {
  since?: string;
}

export type LogOpts = LogSinceOpts;
export const isDiffSinceOpts = (opts: LogOpts): opts is LogSinceOpts => {
  return (opts as LogSinceOpts)?.since !== undefined;
};
export interface Branch {
  name: string;
  revision(): Promise<string>;
  pull(opts?: PullStateOpts): Promise<State>;
  add(opts: AddChangeSetOpts): void;
  fork(opts: ForkOpts): Promise<Branch>;
  commit(opts?: CommitOpts): Promise<State>;
  listen(opts?: ListenOpts): AsyncIterableIterator<ChangeSet>;
  log(opts?: LogOpts): Promise<ChangeSet[]>;
}

export interface SyncOpts {
  from: Branch;
  to: Branch;
}

export interface MergeOpts {
  from: Branch;
  to: Branch;
}

export interface CheckoutOpts {
  branchName: string;
}

export interface Repository {
  checkout(opts?: CheckoutOpts): Promise<Branch>;
  sync(opts: SyncOpts): Disposable;
  merge(opts: SyncOpts): Promise<State>;
}

export class BranchProvider {
}
export class Storage implements Repository {
  checkout(opts?: CheckoutOpts): Promise<Branch> {
    throw new Error("Method not implemented.");
  }
  sync({ from, to }: SyncOpts): Disposable {
    const abort = new Notify();
    (async () => {
      const csStream = from.listen();
      while (true) {
        const cs = await Promise.race([abort.notified(), csStream.next()]);
        if (typeof cs !== "object") {
          return;
        }
        if (cs.done) {
          return;
        }
        to.add({ changeSet: cs.value });
        await to.commit();
      }
    })();

    return {
      dispose: () => {
        abort.notifyAll();
      },
    };
  }
  async merge({ from, to }: SyncOpts): Promise<State> {
    const diff = await from.log({ since: await to.revision() });
    diff.forEach((cs) => to.add({ changeSet: cs }));
    return to.commit();
  }
}
