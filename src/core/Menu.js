import React ,{Fragment} from "react"
import{Link , withRouter} from "react-router-dom"
import "./menu.css"


const currentTab = (history,path) =>{
    if(history.location.pathname === path){
        return {color : "#FFFFFF"}
    }
    else{
        return {color: "#66a8f3"}
    }
}

const Menu = ({history}) => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to ="/">MEDIC</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" 
  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
  aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link style = {currentTab(history,"/")}  className="nav-link" to="/">Dashboard</Link>
      </li>
      <li className="nav-item">
      <Link style = {currentTab(history,"/contact")}  className="nav-link" to="/contact">Link</Link>
      </li>
      
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>

    <ul className="navbar-nav mr">
    <li className="nav-item">
        <a className="nav-link" href="#"><i class="fas fa-phone-volume phone"></i>+91 8848042631</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><i class="fas fa-envelope email"></i> medic@gmail.com</a>
      </li>
      
      
    </ul>
    
  </div>
</nav>

    )
}
export default withRouter(Menu);
