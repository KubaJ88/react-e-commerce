import ShopActionTypes from './shop.types';

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import shopReducer from './shop.reducer';

export const fetchCollectionStart = () => ({
    type:ShopActionTypes.FETCH_COLLETIONS_START
    
});


export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLETIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLETIONS_FAILURE,
    payload: errorMessage
})


export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections')
        dispatch(fetchCollectionStart());
        //promises
        collectionRef.get().then(snapshot => { 
                    // console.log(snapchot);
                    const collectionMap = convertCollectionsSnapshotToMap(snapshot);
                    console.log(collectionMap)
        
                    dispatch(fetchCollectionsSuccess(collectionMap));

                    this.setState({loading:false});
                }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
    } 
}


