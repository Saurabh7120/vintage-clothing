/*jshint esversion:9*/

import React,{useEffect,useState} from 'react';
import './collection-style.scss';
import CollectionItem from '../../components/collection-item/collection-item-component';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop-selector';

 function CollectionPage({collection}){
   const [Items,setItems] = useState([]);
   const [Title,setTitle] = useState(null);
   useEffect(()=>{
     if(collection){
       const {items,title} = collection;
       setItems(items);
       setTitle(title);
     }
   },[collection]);

  //const {items,title} = collection;
  console.log(collection);
  return(
    <div className='collection-page'>
      <h2 className='title'>{Title&&Title}</h2>
      <div className='items'>
        {Items.map(item => (
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
