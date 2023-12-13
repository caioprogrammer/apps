// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $$$0 from "./loaders/categories/tree.ts";
import * as $$$1 from "./loaders/proxy.ts";
import * as $$$2 from "./loaders/cart.ts";
import * as $$$3 from "./loaders/navbar.ts";
import * as $$$4 from "./loaders/user.ts";
import * as $$$5 from "./loaders/legacy/productList.ts";
import * as $$$6 from "./loaders/legacy/productDetailsPage.ts";
import * as $$$7 from "./loaders/legacy/relatedProductsLoader.ts";
import * as $$$8 from "./loaders/legacy/suggestions.ts";
import * as $$$9 from "./loaders/legacy/productListingPage.ts";
import * as $$$10 from "./loaders/intelligentSearch/productList.ts";
import * as $$$11 from "./loaders/intelligentSearch/topsearches.ts";
import * as $$$12 from "./loaders/intelligentSearch/productDetailsPage.ts";
import * as $$$13 from "./loaders/intelligentSearch/suggestions.ts";
import * as $$$14 from "./loaders/intelligentSearch/productListingPage.ts";
import * as $$$15 from "./loaders/product/extensions/listingPage.ts";
import * as $$$16 from "./loaders/product/extensions/detailsPage.ts";
import * as $$$17 from "./loaders/product/extensions/list.ts";
import * as $$$18 from "./loaders/product/extensions/suggestions.ts";
import * as $$$19 from "./loaders/product/extend.ts";
import * as $$$20 from "./loaders/product/wishlist.ts";
import * as $$$21 from "./loaders/wishlist.ts";
import * as $$$22 from "./loaders/workflow/products.ts";
import * as $$$23 from "./loaders/workflow/product.ts";
import * as $$$$0 from "./handlers/sitemap.ts";
import * as $$$$$$$$$0 from "./actions/masterdata/createDocument.ts";
import * as $$$$$$$$$1 from "./actions/trigger.ts";
import * as $$$$$$$$$2 from "./actions/analytics/sendEvent.ts";
import * as $$$$$$$$$3 from "./actions/notifyme.ts";
import * as $$$$$$$$$4 from "./actions/newsletter/subscribe.ts";
import * as $$$$$$$$$5 from "./actions/wishlist/removeItem.ts";
import * as $$$$$$$$$6 from "./actions/wishlist/addItem.ts";
import * as $$$$$$$$$7 from "./actions/cart/removeItemAttachment.ts";
import * as $$$$$$$$$8 from "./actions/cart/updateItemPrice.ts";
import * as $$$$$$$$$9 from "./actions/cart/getInstallment.ts";
import * as $$$$$$$$$10 from "./actions/cart/updateUser.ts";
import * as $$$$$$$$$11 from "./actions/cart/updateCoupons.ts";
import * as $$$$$$$$$12 from "./actions/cart/updateProfile.ts";
import * as $$$$$$$$$13 from "./actions/cart/updateItemAttachment.ts";
import * as $$$$$$$$$14 from "./actions/cart/updateItems.ts";
import * as $$$$$$$$$15 from "./actions/cart/updateAttachment.ts";
import * as $$$$$$$$$16 from "./actions/cart/addItems.ts";
import * as $$$$$$$$$17 from "./actions/cart/removeItems.ts";
import * as $$$$$$$$$18 from "./actions/cart/simulation.ts";
import * as $$$$$$$$$19 from "./actions/cart/updateGifts.ts";
import * as $$$$$$$$$$0 from "./workflows/events.ts";
import * as $$$$$$$$$$1 from "./workflows/product/index.ts";

const manifest = {
  "loaders": {
    "vtex/loaders/cart.ts": $$$2,
    "vtex/loaders/categories/tree.ts": $$$0,
    "vtex/loaders/intelligentSearch/productDetailsPage.ts": $$$12,
    "vtex/loaders/intelligentSearch/productList.ts": $$$10,
    "vtex/loaders/intelligentSearch/productListingPage.ts": $$$14,
    "vtex/loaders/intelligentSearch/suggestions.ts": $$$13,
    "vtex/loaders/intelligentSearch/topsearches.ts": $$$11,
    "vtex/loaders/legacy/productDetailsPage.ts": $$$6,
    "vtex/loaders/legacy/productList.ts": $$$5,
    "vtex/loaders/legacy/productListingPage.ts": $$$9,
    "vtex/loaders/legacy/relatedProductsLoader.ts": $$$7,
    "vtex/loaders/legacy/suggestions.ts": $$$8,
    "vtex/loaders/navbar.ts": $$$3,
    "vtex/loaders/product/extend.ts": $$$19,
    "vtex/loaders/product/extensions/detailsPage.ts": $$$16,
    "vtex/loaders/product/extensions/list.ts": $$$17,
    "vtex/loaders/product/extensions/listingPage.ts": $$$15,
    "vtex/loaders/product/extensions/suggestions.ts": $$$18,
    "vtex/loaders/product/wishlist.ts": $$$20,
    "vtex/loaders/proxy.ts": $$$1,
    "vtex/loaders/user.ts": $$$4,
    "vtex/loaders/wishlist.ts": $$$21,
    "vtex/loaders/workflow/product.ts": $$$23,
    "vtex/loaders/workflow/products.ts": $$$22,
  },
  "handlers": {
    "vtex/handlers/sitemap.ts": $$$$0,
  },
  "actions": {
    "vtex/actions/analytics/sendEvent.ts": $$$$$$$$$2,
    "vtex/actions/cart/addItems.ts": $$$$$$$$$16,
    "vtex/actions/cart/getInstallment.ts": $$$$$$$$$9,
    "vtex/actions/cart/removeItemAttachment.ts": $$$$$$$$$7,
    "vtex/actions/cart/removeItems.ts": $$$$$$$$$17,
    "vtex/actions/cart/simulation.ts": $$$$$$$$$18,
    "vtex/actions/cart/updateAttachment.ts": $$$$$$$$$15,
    "vtex/actions/cart/updateCoupons.ts": $$$$$$$$$11,
    "vtex/actions/cart/updateGifts.ts": $$$$$$$$$19,
    "vtex/actions/cart/updateItemAttachment.ts": $$$$$$$$$13,
    "vtex/actions/cart/updateItemPrice.ts": $$$$$$$$$8,
    "vtex/actions/cart/updateItems.ts": $$$$$$$$$14,
    "vtex/actions/cart/updateProfile.ts": $$$$$$$$$12,
    "vtex/actions/cart/updateUser.ts": $$$$$$$$$10,
    "vtex/actions/masterdata/createDocument.ts": $$$$$$$$$0,
    "vtex/actions/newsletter/subscribe.ts": $$$$$$$$$4,
    "vtex/actions/notifyme.ts": $$$$$$$$$3,
    "vtex/actions/trigger.ts": $$$$$$$$$1,
    "vtex/actions/wishlist/addItem.ts": $$$$$$$$$6,
    "vtex/actions/wishlist/removeItem.ts": $$$$$$$$$5,
  },
  "workflows": {
    "vtex/workflows/events.ts": $$$$$$$$$$0,
    "vtex/workflows/product/index.ts": $$$$$$$$$$1,
  },
  "name": "vtex",
  "baseUrl": import.meta.url,
};

export type Manifest = typeof manifest;

export default manifest;
