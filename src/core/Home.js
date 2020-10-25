import React from 'react'
import Dashboard from './Dashboard'
import Menu from './Menu'
import "./menu.css"

export default function Home() {
    return (
        <div>
           <Menu/>
           <Dashboard/>
        </div>
    )
}
