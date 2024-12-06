import React from "react";
import {Navigate, Route} from 'react-router-dom';
//import { isAuthenticated } from "../services/auth";

/*
const RouterWrapper = ({component: Component, ...rest}) => (
    <Route
        { ...rest }
        render = { props =>
            isAuthenticated() ? ( <Component { ...props} /> 
            ) : (
            <Redirect 
                to={{ pathname: "/login", state: { from: props.location } }} />
            )
        }
    />
)
*/

const RouterWrapper = ({component: Component, ...rest}) => (
    <Route
        { ...rest }
        render = { props => <Navigate to={{ pathname: "/login", state: { from: props.location } }} /> }
    />
)

export default RouterWrapper;