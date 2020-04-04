import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import {setCurrentUser } from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selector';
import SignInAndSingUpPage from './pages/sing-in-and-sing-out page/sing-in-and-sing-out page.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';


class App extends React.Component {
  

  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShop => {
          setCurrentUser({
            
              id: snapShop.id,
              ...snapShop.data()
            
          });


         

        });

        
      } else {

        setCurrentUser(userAuth);
      }  

      
      
    })
    

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
    </Switch>
    </div>
  );
}
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))


})


export default connect(mapStateToProps,mapDispatchToProps)(App);
