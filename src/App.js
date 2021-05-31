import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
