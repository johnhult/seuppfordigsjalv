import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	browserHistory
} from 'react-router-dom';
import BackgroundCanvas from 'components/BackgroundCanvas/BackgroundCanvas.jsx';
import Navigation from 'components/Navigation/Navigation.jsx';
import Home from 'containers/Home/Home.jsx';
import Fact from 'containers/Fact/Fact.jsx';
import NoPageFound from 'containers/NoPageFound/NoPageFound.jsx';



// Here you can add global headers and footers that will stay the same over different pages
const App = () => (
	<div>
		<Main />
	</div>
);


// Add other routes inside Switch to change pages here
const Main = () => (
	<main>
        <Navigation />
		<BackgroundCanvas />
		<Switch>
			<Route exact path="/" component={Home} />
            <Route exact path="/fact/:number" component={Fact} />
            <Route path="*" component={NoPageFound} />
		</Switch>
	</main>
);

ReactDOM.render((
	<Router history={browserHistory}>
		<App />
	</Router>
), document.getElementById('root')
);
