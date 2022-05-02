import logo from './logo.svg';
import './App.css';
import CustomComponent from "./components/CustomComponent/CustomComponent";
import { Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux";
import reducer from "./stores/reducer";
import thunk from "redux-thunk"

const store = createStore(reducer,applyMiddleware(thunk));


function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <CustomComponent/>
            </div>
        </Provider>
    );
}

export default App;
