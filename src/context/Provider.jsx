import Context from "./Context";
import { useDispatch } from 'react-redux';

export default function Provider(prop) {
    const dispatch = useDispatch();

    const getList = async () => {
        let response = await fetch(process.env.REACT_APP_SEARCH_URL);
        let json = await response.json();
        return json;
    }
    

    return(
        <Context.Provider value={{getList}}>
            {prop.children}
        </Context.Provider>
    )
}

