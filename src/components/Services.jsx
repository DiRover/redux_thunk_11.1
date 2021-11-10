import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Router } from 'react-router';
import { loadList } from '../actions/actionCreators';
// компонент отображения всего
export default function Services() {
    const { items, loading, error, search } = useSelector(state => state.list);
    const dispatch = useDispatch();

    useEffect(() => {
        loadList();
    });

    

    return (
    <Fragment>
        Hello
    </Fragment>
        
    )
}
