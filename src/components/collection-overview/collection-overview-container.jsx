/*jshint esversion:9*/
import CollectionOverview from './collection-overview-component';
import WithSpinner from '../with-spinner/with-spinner-component';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {selectFetchingCollection} from '../../redux/shop/shop-selector';
import {createStructuredSelector} from 'reselect';

const mapStateToProps = createStructuredSelector({
  isLoading:selectFetchingCollection
});


 const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
