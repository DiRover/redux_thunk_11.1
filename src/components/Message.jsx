import {useDispatch, useSelector} from 'react-redux';
import {useContext} from "react";
import Context from "../context/Context";
import {loadDescription, loadList} from "../actions/actionCreators";
// модалка для отображения ошибки со строны сервера
// всякая логика в зависимости от того, какая ошибка (список, описание или ошибка загрузи на сервер)
export default function Message(prop) {
    const {id} = useSelector(state => state.list);
    const {getFetch} = useContext(Context);
    const dispatch = useDispatch();

    const {variant} = prop;

    const handleRequest = () => {
        switch (variant) {
            case 'list': // если была ошибка загрузки списка
                dispatch(loadList());
                getFetch({method: "GET", dispatch});
                break;
            case 'description': // если была ошибка загрузки описания
                dispatch(loadDescription(id));
                getFetch({method: "GET", dispatch, id});
                break;
            default:
                break;
        }
    }
    return (
        <div className="card" style={{"margin": "30px", "width": "500px"}}>
            <div className="card-header">
                Fail!
            </div>
            <div className="card-body">
                <h5 className="card-title">Server doesn't response</h5>
                <p className="card-text">For new try, please push the button</p>
                <button type="button" className="btn btn-dark" onClick={handleRequest}>Reload</button>
            </div>
        </div>
    )
}