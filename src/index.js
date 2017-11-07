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
import First from 'containers/First/First.jsx';
import Second from 'containers/Second/Second.jsx';
import Third from 'containers/Third/Third.jsx';
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
		<Switch>
			<Route exact path="/" component={Home} />
            <Route exact path="/1" component={First} />
            <Route exact path="/2" component={Second} />
            <Route exact path="/3" component={Third} />
            <Route path="*" component={NoPageFound} />
		</Switch>
        <Navigation />
		<BackgroundCanvas />
	</main>
);

ReactDOM.render((
	<Router history={browserHistory}>
		<App />
	</Router>
), document.getElementById('root')
);
