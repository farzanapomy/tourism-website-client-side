import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AddFeatures from './pages/AddFeatures/AddFeatures';
import MyOrders from './pages/AdminPanel/MyOrders/MyOrders';
import Features from './pages/Home/Features/Features';
import Footer from './pages/Home/Footer/Footer';
import Header from './pages/Home/Header/Header';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './pages/NotFound/NotFound';
import OurWinning from './pages/OurWinning/OurWinning';
import SingleFeature from './pages/SingleFeature/SingleFeature';




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
            <Route exact path='/features'>
              <Features></Features>
            </Route>
            <Route exact path='/ourWinning'>
              <OurWinning></OurWinning>
            </Route>
            <PrivateRoute exact path='/features/:id'>
              <SingleFeature></SingleFeature>
            </PrivateRoute>
            <PrivateRoute exact path='/myOrders'>
              <MyOrders></MyOrders>
            </PrivateRoute>

            <PrivateRoute path='/addFeatures'>
              <AddFeatures></AddFeatures>
            </PrivateRoute>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>

      </AuthProvider>

    </div>
  );
}

export default App;
