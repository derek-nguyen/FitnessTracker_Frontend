import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './components'


const App = () => {
    return (
        <div className='app'>
            <Router>
                <Switch>
                    {/* <Route path='/activities'
                    render={(props) => (
                        <ViewActivities />
                    )}
                >
                </Route> */}
                    <Route path='/' render={(props) => (
                        <Home />
                    )}>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("app")
)



// import React from "react";
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from "react-router-dom";

// import App from "./app.js";

// const root = createRoot(document.getElementById('app'))

// root.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
// )

// /* 
// Using React-router-dom ^v6.10
// - replaces BrowserRouter with createBrowserRouter

// */