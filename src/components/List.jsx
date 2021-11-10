import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Router } from 'react-router';
import { changeSearchField } from '../actions/actionCreators';
// компонент отображения всего
export default function List() {
    const { items, loading, error, search } = useSelector(state => state.list);
    const dispatch = useDispatch();

    const handleSearch = evt => {
        const { value } = evt.target;
        dispatch(changeSearchField(value));//диспатч экшена изменения поля
    };

    const hasQuery = search.trim() !== ''; //удаляем пробел вначале 

    return (
    <Fragment>
        Hello
    </Fragment>
        
    )
}


/*
<Fragment>
            <div><input type="search" value={search} onChange={handleSearch} /></div>
            {!hasQuery && <div>Type something to search</div>}
            {hasQuery && loading && <div>searching...</div>}
            {error ? <div>Error occured</div> : <ul>{items.map(o => <li key={o.id}>{o.name}</li>)}</ul>}
        </Fragment>
         */