import React from 'react'
import {BrowserRouter , Switch ,Route} from "react-router-dom"
import Contact from './core/Contact'
import Home from './core/Home'
import Treatment from './core/Treatment'


const Routes = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component ={Home} />
                <Route path = "/contact" exact component ={Contact} />
                <Route path = "/treatment" exact component ={Treatment} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes