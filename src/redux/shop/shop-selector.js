/*jshint esversion:9*/


import {createSelector} from 'reselect';

// const COLLECTION_ID_MAP = {
//   hats:1,
//   sneakers:2,
//   jackets:3,
//   womens:4,
//   mens:5
// };


const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  shop => shop.collection
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectShopCollection],
    collections => collections[collectionUrlParam]
  );

export const selectCollectionForPreview = createSelector(
  [selectShopCollection],
  collections => Object.keys(collections).map(key => collections[key])
);
