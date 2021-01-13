/*jshint esversion: 9*/
import React from 'react';
import './collection-item-styles.scss';
import {CollectionItemContainer,ImageContainer,CollectionFooter,NameContainer,PriceContainer} from './collection-item-styles';
import CustomButton from '../custom-button/custom-button-component';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart-actions';

const CollectionItem = ({item, addItem})=>{
  const {imageUrl,name,price} = item;
  return(
  <CollectionItemContainer>
    <ImageContainer style={{backgroundImage:`url(${imageUrl})`}}/>
    <CollectionFooter>
      <NameContainer>{name}</NameContainer>
      <PriceContainer>{price}</PriceContainer>
    </CollectionFooter>
    <CustomButton inverted onClick={()=> addItem(item)}>ADD TO CART</CustomButton>
  </CollectionItemContainer>);
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);
