import {Redirect} from 'react-router';
import {useContext, useEffect} from "react";
import Context from "../context/Context";
import {useDispatch} from "react-redux";
import {loadList} from "../actions/actionCreators";

// стартовая страница с первоначальной загрузкой списка
// и редиректом на компонент со списком услуг

export default function StartPage() {

    const { getFetch } = useContext(Context);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadList());
        getFetch({method: "GET", dispatch});
    }, [getFetch, dispatch]);

    return (
        <Redirect to='/services'/>
    )
}
