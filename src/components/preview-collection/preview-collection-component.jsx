/*jshint esversion:9*/
import React from 'react';
import './preview-collection-styles.scss';
import {CollectionPreviewContainer,TitleContainer,PreviewContainer} from './preview-collection-styles';
import CollectionItem from '../collection-item/collection-item-component';

const PreviewCollection = ({title,items}) =>(
    <CollectionPreviewContainer>
      <TitleContainer as='h1'>{title}</TitleContainer>
      <PreviewContainer>
        {items.filter((item,idx)=> idx < 4).map((item) =>(
          <CollectionItem key={item.id} item={item}/>
        ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
)

export default PreviewCollection;
