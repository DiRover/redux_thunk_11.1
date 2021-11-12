import Context from "./Context";
import {loadListFailed, loadListSuccess, loadDescriptionSuccess} from "../actions/actionCreators";

export default function Provider(prop) {
    const getFetch = async ({method, dispatch, id}) => {
        try {

            if (method === "GET" && !id) {//получаем список первоначально
                const response = await fetch(process.env.REACT_APP_SEARCH_URL);
                const data = await response.json();
                console.log(data);
                dispatch(loadListSuccess(data));
            } else if (method === "DELETE") {//удаляем элемент списка
                await fetch(`${process.env.REACT_APP_SEARCH_URL}/${id}`, {
                    method,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });//сразу получаем новый список
                const response = await fetch(process.env.REACT_APP_SEARCH_URL, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                const data = await response.json();
                dispatch(loadListSuccess(data));
            } else if (method === "GET" && id) {
                const response = await fetch(`${process.env.REACT_APP_SEARCH_URL}/${id}`);
                const data = await response.json();
                console.log(data);
                dispatch(loadDescriptionSuccess(data));

            }

        } catch(e) {
            console.log(e)
            dispatch(loadListFailed());
        }
    }

    return(
        <Context.Provider value={{getFetch}}>
            {prop.children}
        </Context.Provider>
    )
}
