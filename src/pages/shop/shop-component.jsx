/*jshint esversion: 9*/
import React from 'react';
import Data from  './shop-data';
import CollectionPreview from '../../components/preview-collection/preview-collection-component';

class ShopPage extends React.Component{
  constructor(){
    super();
    this.state={
      collections: Data
    };
  }

  render(){
    const {collections} = this.state;
    return(
      <div classsName='shop-page'>
      {
        collections.map(({id,...otherCollectionProps}) =>(
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
      </div>
    );
  }
}

export default ShopPage;
