import {takeLatest, call, put, all} from 'redux-saga/effects';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {
fetchCollectionsSuccess, 
fetchCollectionsFailure
} from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchColletionsAsync() {
    yield console.log('I am fired');

    try {
    const collectionRef = firestore.collection('collections');
    
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put (fetchCollectionsSuccess(collectionsMap));

    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }



        //promises
        // collectionRef.get().then(snapshot => { 
        //             // console.log(snapchot);
        //             const collectionMap = convertCollectionsSnapshotToMap(snapshot);
        //             console.log(collectionMap)
        
        //             dispatch(fetchCollectionsSuccess(collectionMap));

        //             this.setState({loading:false});
        //         }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
}


export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLETIONS_START,
        fetchColletionsAsync)
}



export function* shopSagas() { 
    yield all([call(fetchCollectionsStart)])
}