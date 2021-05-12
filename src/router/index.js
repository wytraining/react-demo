import React from 'react';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom'
// import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import Page1 from '../views/Page1'
import Page2 from '../views/Page2'
import Page3 from '../views/Page3'

const Routes = () => (
    <Router>
        {/*路径*/}
        <ul>
            <li>
                <Link to="/page1">页面1</Link>
            </li>
            <li>
                <Link to="/page2">页面2</Link>
            </li>
            <li>
                <Link to="/page3">页面3</Link>
            </li>
        </ul>
        {/*页面*/}
        <Switch>
            <Route exact path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route path="/page3" component={Page3} />
            <Route path="/page1/page3" component={Page3} />
        </Switch>
    </Router>
);

export default Routes;


