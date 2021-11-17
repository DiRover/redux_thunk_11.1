import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import {Fragment, useContext, useEffect} from 'react';
import ServicesList from './ServicesList';
import StartPage from './StartPage';
import Description from "./Description";

export default function UnionComponent() {

    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route path="/description" exact component={Description} />
                    <Route path="/services" exact component={ServicesList} />
                    <Route path="/" exact component={StartPage} />  
                </Switch>
                
            </Router>
        </Fragment>
    )
}
