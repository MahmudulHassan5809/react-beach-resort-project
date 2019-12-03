import React,{ Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './components/pages/Home';
import Rooms from './components/pages/Rooms';
import SingleRoom from './components/pages/SingleRoom';
import Error from './components/pages/Error';
import Navbar from './components/layout/Navbar';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (

		<Router>
			<Provider store={store}>
				<Fragment>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/rooms" component={Rooms} />
						<Route exact path="/rooms/:slug" component={SingleRoom} />
						<Route  component={Error} />
					</Switch>
				</Fragment>
			</Provider>
		</Router>

  );
}

export default App;
