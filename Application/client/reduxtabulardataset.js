import React from 'react';

import {render} from 'react-dom';

// Import css
import css1 from './styles/mystyle.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';



// Import Components
import App from './components/App';

import Grid from './components/Grid';


// import react router deps
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Grid}></IndexRoute>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'));
