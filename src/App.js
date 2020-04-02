import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSingUpPage from './pages/sing-in-and-sing-out page/sing-in-and-sing-out page.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();



    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShop => {
          this.setState({
            currentUser: {
              id: snapShop.id,
              ...snapShop.data()
            }
          });


          console.log(this.state);

        });

        
      } else {

        this.setState({currentUser: userAuth});
      }  

      
      // this.setState({currentUser: user})
      // console.log(user);;
    })
    

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }


  render() {
  return (
    <div>
    <Header currentUser={this.state.currentUser}/>
    <Switch>
    <Route exact path ='/' component={HomePage}></Route>
    <Route path='/shop' component={ShopPage}/>
    <Route path='/signin' component={SignInAndSingUpPage}/>
    </Switch>
    </div>
  );
}
}

export default App;
