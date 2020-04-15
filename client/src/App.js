import React, {useEffect} from 'react';
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



const App = ({checkUserSession, currentUser}) =>  {

  useEffect(() => {
    checkUserSession()

  }, [checkUserSession]);


 

 
  return (
    <div>
    <Header/>
    <Switch>
    <Route exact path ='/' component={HomePage}></Route>
    <Route path='/shop' component={ShopPage}/>
    <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/'/>) : (<SignInAndSingUpPage/>)}/>
    <Route exact path='/checkout' component={CheckoutPage}/>
    </Switch>
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
  // collectionArray: selectCollectionsForPreview
});


const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())


})


export default connect(mapStateToProps,mapDispatchToProps)(App);
