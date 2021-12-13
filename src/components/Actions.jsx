import Context from '../context/Context';
import {useContext} from "react";
import {Link} from 'react-router-dom';
import {loadDescription} from "../actions/actionCreators";
// компонет с кнопками удаления и редактирования
// и также логика для перехода на страницу редактирования
export default function Actions(props) {
    const {id, dispatch} = props; // получаем айди сервиса для редактирования
    const {getFetch} = useContext(Context); // функция для отправки запросов

    return (
        <>
            <div className="btn-group" role="group" aria-label="Basic outlined example">
                <Link to="/description">
                    <button type="button" className="btn btn-outline-dark"
                            onClick={() => {
                                getFetch({method: "GET", dispatch, id});
                                dispatch(loadDescription(id));
                            }}>
                    <span className="material-icons">
                        edit
                    </span>
                    </button>
                </Link>
                <button type="button" className="btn btn-outline-dark"
                        onClick={() => getFetch({method: "DELETE", dispatch, id})}>
                    <span className="material-icons">
                        delete
                    </span>
                </button>
            </div>
        </>
    );
}