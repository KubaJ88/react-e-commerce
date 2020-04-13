import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'; 
import {fetchCollectionStart } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import {selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';


import CollectionsOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionsPageContainer from '../../pages/collection/collecition.container';
import CollectionPage from '../collection/collection.component';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';


// const CollectionsOverviewWithSpinner = WithSpinner(CollectionOvierview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);



class ShopPage extends React.Component {
    

    componentDidMount() { 
     const {fetchCollectionStart} = this.props;
     fetchCollectionStart();



    //     collectionRef.onSnapshot(async snapshot => { 
    //         // console.log(snapchot);
    //         const collectionMap = convertCollectionsSnapshotToMap(snapshot);
    //         console.log(collectionMap)

    //         updateCollections(collectionMap);
    //         this.setState({loading:false});
    //     });

    }



    render()  { 
        const {match} = this.props;
        // const {loading} = this.state;

    return (
  
     
      
        <div className='shop=page'>
        <Route exact path={`${match.path}`} 
        component={CollectionsOverviewContainer}/>
    <Route path={`${match.path}/:collectionId`}
        component={CollectionsPageContainer} />
        </div>
    

)
    }
}  


// const mapStateToProps = createStructuredSelector({    
//     isCollectionsLoaded: selectIsCollectionsLoaded
// })


const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
});





export default connect(null, mapDispatchToProps)(ShopPage)