import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Fragment } from 'react';
import Services from './Services';
import StartPage from './StartPage';

export default function UnionComponent() {
    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route path="/service" exact component={Services} />
                    <Route path="/" exact component={StartPage} />  
                </Switch>
                
            </Router>
        </Fragment>
    )
}

//<Route path="/list/:id" exact component={Description} />
// <Redirect to="/service" />