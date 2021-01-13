/*jshint esversion:9*/

import CollectionPage from './collection-component';
import WithSpinner from '../../components/with-spinner/with-spinner-component';
import {connect} from 'react-redux';
import {selectFetchingCollection} from '../../redux/shop/shop-selector';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

const mapStateToProps = createStructuredSelector({
  isLoading:selectFetchingCollection
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
