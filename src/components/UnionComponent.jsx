import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import {Fragment, useContext, useEffect} from 'react';
import ServicesList from './ServicesList';
import StartPage from './StartPage';
import Description from "./Description";
import {useDispatch} from "react-redux";
import Context from "../context/Context";
import {loadList} from "../actions/actionCreators";

export default function UnionComponent() {
    const { getFetch } = useContext(Context);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(loadList());
        getFetch({method: "GET", dispatch});
    }, [dispatch]);

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
