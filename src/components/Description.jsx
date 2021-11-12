import {useSelector, useDispatch} from 'react-redux';
import {Form, Field} from 'react-final-form';
import {useContext} from "react";
import {Link} from 'react-router-dom';
import Context from "../context/Context";
import Spinner from "./Spinner";

export default function Description() {
    const {loading, description} = useSelector(state => state.list);
    const {getFetch} = useContext(Context);
    const dispatch = useDispatch();
    console.log(description);
    const Submit = () => {
        console.log('ok')
    }

    console.log(description);

    return (
        <>
            <Link to="/">Home</Link>
            {loading && <Spinner/>}
            {!loading &&
            <Form onSubmit={Submit}
                  initialValues={{...description}}
                  render={() => (
                          <form style={{"width": "500px", "margin": "50px"}}>
                              <div className="mb-3">
                                  <label htmlFor="inputName" className="form-label">Название</label>
                                  <Field name="Name" component="input" type="text" className="form-control form-control-lg" id="inputName" initialValue={description.name} required/>
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="inputPrice" className="form-label">Стоимость</label>
                                  <Field name="Price" type="text" component="input" className="form-control form-control-lg" id="inputPrice" initialValue={description.price} required/>
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="inputContent" className="form-label">Описание</label>
                                  <Field name="Content" type="text" component="input" className="form-control form-control-lg" id="inputContent" initialValue={description.content} required/>
                              </div>
                              <button type="submit" className="btn btn-dark">Submit</button>
                          </form>
                  )}
            />
            }
        </>
    )
}