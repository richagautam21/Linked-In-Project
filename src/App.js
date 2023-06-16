import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { selectUser ,login, logout} from './features/counter/userSlice';
import Login from './Login';
import { auth } from './firebase';
import Widgets from './Widgets';

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        // use is logged out
        dispatch(logout());
      }
    })
  }, [dispatch]);

  return (
    <div className="app">
          <Header />
          {!user ? ( 
          <Login /> 
          ) : (
          <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>   
          )}
        
    </div>
    
   
  );
}

export default App;