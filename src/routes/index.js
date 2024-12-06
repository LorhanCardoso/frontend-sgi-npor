import React from "react";
import {BrowserRouter as Router, Route, Routes as AppRoutes } from 'react-router-dom';


import Login from '../pages/public/Login'
import Dashboard from '../pages/secure/Dashboard/index'
import NotaIndividual from '../pages/secure/NotasProvas/NotasMateria/NotaIndividual/index'
import FatosObservados from '../pages/secure/FatosObservados'
import Adimistrador from '../pages/secure/Administrador'

//import RoutePrivate from './router-Wrapper'

export default function Routes(){
    return(
        <Router>
            <AppRoutes>
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={<Dashboard />} />
                <Route path="/notas" element={<NotaIndividual />} />
                <Route path="/fatos-observados" element={<FatosObservados />} />
                <Route path="/administracao" element={<Adimistrador />} />
                {/*<Route path="*" element={<Login />} />*/}
                {/*<RoutePrivate exact path="/" component={DashboardPage} />
                <RoutePrivate exact path="/contacts" component={ContactsListPage} />
                <RoutePrivate exact path="/contacts/add" component={ContactAddPage} />
                <RoutePrivate exact path="/contacts/:id" component={ContactDetailsPage} />*/}
            </AppRoutes>
        </Router>
    )
}