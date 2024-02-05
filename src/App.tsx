import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./components/layouts/AppRouter";
import {ProductFilterProvider} from "./contexts/ProductFilterContext";
import {Provider} from "react-redux";
import {store} from "./store/store";



function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <ProductFilterProvider>
                   <BrowserRouter>
                        <AppRouter/>
                   </BrowserRouter>
                </ProductFilterProvider>
            </Provider>
        </div>
    );
}

export default App;
