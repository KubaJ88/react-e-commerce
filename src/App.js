import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkout/checkout.component';
// import {setCurrentUser } from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selector';
import {checkUserSession} from  './redux/user/user.actions';
import SignInAndSingUpPage from './pages/sing-in-and-sing-out page/sing-in-and-sing-out page.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';



class App extends React.Component {
  

  unsubscribeFromAuth = null

  componentDidMount() {

    const {checkUserSession} = this.props;
    checkUserSession()

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot(snapShop => {
    //       setCurrentUser({
            
    //           id: snapShop.id,
    //           ...snapShop.data()
            
    //       });


         

    //     });

        
    //   } else {

    //     setCurrentUser(userAuth);
    //     // addCollectionAndDocuments('collections', collectionArray.map(({title,items}) => ({title, items}) ));     
      
    //   }  

      
      
    // })
    

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }


  render() {
  return (
    <div>
    <Header/>
    <Switch>
    <Route exact path ='/' component={HomePage}></Route>
    <Route path='/shop' component={ShopPage}/>
    <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSingUpPage/>)}/>
    <Route exact path='/checkout' component={CheckoutPage}/>
    </Switch>
    </div>
  );
}
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
  // collectionArray: selectCollectionsForPreview
});


const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())


})


export default connect(mapStateToProps,mapDispatchToProps)(App);
