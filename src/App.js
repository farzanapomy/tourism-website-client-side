import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AddFeatures from './pages/AddFeatures/AddFeatures';
import BookFeature from './pages/BookFeature/BookFeature';
import Features from './pages/Home/Features/Features';
import Header from './pages/Home/Header/Header';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './pages/NotFound/NotFound';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/features'>
              <Features></Features>
            </Route>
            <Route path='/features/:id'>
             <BookFeature></BookFeature>
            </Route>
            <PrivateRoute path='/addFeatures'>
              <AddFeatures></AddFeatures>
            </PrivateRoute>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>

      </AuthProvider>

    </div>
  );
}

export default App;
