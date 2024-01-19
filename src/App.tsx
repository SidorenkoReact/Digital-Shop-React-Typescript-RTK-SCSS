import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./components/layouts/AppRouter";
import {ProductFilterProvider} from "./contexts/ProductFilterContext";



function App() {
    return (
        <div className="App">
            <ProductFilterProvider>
               <BrowserRouter>
                    <AppRouter/>
               </BrowserRouter>
            </ProductFilterProvider>
        </div>
    );
}

export default App;
