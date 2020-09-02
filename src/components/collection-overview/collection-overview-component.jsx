/*jshint esversion:9*/

import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionForPreview} from '../../redux/shop/shop-selector';
import CollectionPreview from '../preview-collection/preview-collection-component';
import './collection-overview-style.scss';

function CollectionOverview ({collections}){
    return(
      <div className='collection-overview'>
      {
        collections.map(({id,...otherCollectionProps}) =>(
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
      </div>
    );

}

const mapStateToProps = createStructuredSelector({
  collections:selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
