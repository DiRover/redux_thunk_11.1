import {Fragment, useEffect, useContext} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Router} from 'react-router';
import {loadList, loadListSuccess, loadListFailed} from '../actions/actionCreators';
import Context from '../context/Context';

import Spinner from "./Spinner";
import Message from "./Message";
import Actions from "./Actions"


// компонент отображения списка

export default function ServicesList() {
    const {list, loading, error, search} = useSelector(state => state.list);
    const { getFetch } = useContext(Context);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadList());
        getFetch({method: "GET", dispatch});
    }, []);

    return (
        <Fragment>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Service</th>
                    <th scope="col">Price</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {!loading ? list.map((item, index) => {
                    return (
                        <tr key={item.id} >
                            <th scope="row">{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td><Actions id={item.id} dispatch={dispatch}/></td>
                        </tr>
                    );
                }) : <Spinner />}`
                </tbody>
            </table>
            {error && <Message />}
        < /Fragment>

    )
}