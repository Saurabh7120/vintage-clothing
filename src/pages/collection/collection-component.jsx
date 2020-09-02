/*jshint esversion:9*/

import React from 'react';
import './collection-style.scss';
import CollectionItem from '../../components/collection-item/collection-item-component';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop-selector';

 function CollectionPage({collection}){
  const {items,title} = collection;
  console.log(collection);
  return(
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item}/>
        ))}
      </div>
  </div>
);
}

const mapStateToProps = (state,ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage)
