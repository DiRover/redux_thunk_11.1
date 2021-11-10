import { Route, Router, Redirect } from 'react-router';
import { Fragment } from 'react';
import List from './List';
import Blank from './Blank';

export default function UnionComponent() {
    return (
        <Fragment>
            <Router>
                <Route path="/service" exact component={List} />
                <Route path="/" exact component={Blank} />
            </Router>
        </Fragment>
    )
}

//<Route path="/list/:id" exact component={Description} />
// <Redirect to="/service" />