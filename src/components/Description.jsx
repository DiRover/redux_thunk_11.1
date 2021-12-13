import {useSelector, useDispatch} from 'react-redux';
import {Form, Field} from 'react-final-form';
import {useContext} from "react";
import {Link} from 'react-router-dom';
import Context from "../context/Context";
import Spinner from "./Spinner";
import {cancel, uploadService} from "../actions/actionCreators";
import Message from "./Message";
import {Redirect} from "react-router";
//компонент для отрисовки описания сервиса
export default function Description() {
    const {loading, error, description, save, upload} = useSelector(state => state.list); //получаем всякие переменные для логики отрисовки спинера и описания
    const {getFetch} = useContext(Context); // функия для обработки запросов
    const dispatch = useDispatch();

    const onSubmit = (val) => { // сабмит формы
        const value = {id: val.id, name: val.Name, price: Number(val.Price), content: val.Content}; // получаю значение из формы
        dispatch(uploadService()); // указываю состояние о том, что происходит загрузка на сервер, крутиться спинер
        getFetch({method: "POST", dispatch, value}); // отправляю данные на сервер
    }

    const handleCancel = () => dispatch(cancel()); // отмера редактирования и сброс всего
    // всякая логика для отображения спинера и описания сервиса
    return (
        <>
            {description &&
            <Form onSubmit={onSubmit}
                  initialValues={{...description}}
                  render={({handleSubmit}) => (
                      <form style={{"width": "500px", "margin": "50px"}} onSubmit={handleSubmit}>
                          <div className="mb-3">
                              <label htmlFor="inputName" className="form-label">Название</label>
                              <Field name="Name" component="input" type="text"
                                     className="form-control form-control-lg"
                                     id="inputName" initialValue={description.name} required/>
                          </div>
                          <div className="mb-3">
                              <label htmlFor="inputPrice" className="form-label">Стоимость</label>
                              <Field name="Price" type="text" component="input"
                                     className="form-control form-control-lg"
                                     id="inputPrice" initialValue={description.price} required/>
                          </div>
                          <div className="mb-3">
                              <label htmlFor="inputContent" className="form-label">Описание</label>
                              <Field name="Content" type="text" component="input"
                                     className="form-control form-control-lg" id="inputContent"
                                     initialValue={description.content} required/>
                          </div>
                          {!upload && <div style={{"margin": "5px"}}>Upload changes is failed, please try again.</div>}
                          {!loading && <>
                              <Link to="/services">
                                  <button className="btn btn-dark" onClick={handleCancel}>Cancel</button>
                              </Link>
                              <button type="submit" className="btn btn-dark" style={{"marginLeft": "30px"}}
                              >Submit
                              </button>
                          </>}
                      </form>
                  )}
            />
            }
            {error && <Message variant="description"/>}
            {save && <Redirect to='/'/>}
            {loading && <Spinner />}
        </>
    )
}