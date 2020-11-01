import React from 'react'
import Menu from './Menu'
import{Link , withRouter} from "react-router-dom"
import "./sidebar.css"

export default function Treatment() {
    return (
        <div className="wrapper1 ">
           <Menu/>
<div className="row ">
           <div class="col-md-6 mt-4">
               <h2 className="dashclr">Prescription</h2>
                     <div class="card">
                         <div class="card-body">
                             {/* <!-- title --> */}
                             <div class="d-md-flex align-items-center">
                                 <div>
                                     <h4 class="card-title">AKSHAY</h4>
                                     {/* <h5 class="card-subtitle">Overview of Top Selling Items</h5> */}
                                 </div>
                                 
                             </div>
                             {/* <!-- title --> */}
                         </div>
                         <div class="table-responsive">
                             <table class="table v-middle">
                                 <thead>
                                     <tr class="bg-light">
                                         <th class="border-top-0">Medicine</th>
                                         <th class="border-top-0">Time</th>
                                         
                                         {/* <th class="border-top-0">Technology</th> */}
                                         <th class="border-top-0">Doss</th>
                                         {/* <th class="border-top-0">Sales</th> */}
                                         {/* <th class="border-top-0">Amound</th> */}
                                     </tr>
                                 </thead>

                                 <tbody>
                                        <tr>
                                            <td>
                                            <form >
  
                                                <select name="cars" id="cars">
                                                <option value="volvo"></option>
                                                    <option value="volvo">Paracetamol</option>
                                                    <option value="saab">acetaminophen</option>
                                                    <option value="opel">Tylenol</option>
                                                    <option value="audi">ibuprofen</option>
                                                </select>
                                                

                                            </form>
                                            </td>

                                            <td>
                                            <form class="form-inline">
                                                
                                                <div class="form-group mx-sm-3 mb-2">
                                                  
                                                    <input type="text"  class="form-control" id="inputPassword2" placeholder="Time"/>
                                                </div>
                                                
                                            </form>
                                            </td>

                                            <td>
                                            <form class="form-inline">
                                                
                                                <div class="form-group mx-sm-3 mb-2">
                                                  
                                                    <input type="text"  class="form-control" id="inputPassword2" placeholder="Doss"/>
                                                </div>
                                                
                                            </form>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td>
                                            <form >
  
                                                <select name="cars" id="cars">
                                                <option value="volvo"></option>
                                                    <option value="volvo">Paracetamol</option>
                                                    <option value="saab">acetaminophen</option>
                                                    <option value="opel">Tylenol</option>
                                                    <option value="audi">ibuprofen</option>
                                                </select>
                                                

                                            </form>
                                            </td>

                                            <td>
                                            <form class="form-inline">
                                                
                                                <div class="form-group mx-sm-3 mb-2">
                                                  
                                                    <input type="text"  class="form-control" id="inputPassword2" placeholder="Time"/>
                                                </div>
                                                
                                            </form>
                                            </td>

                                            <td>
                                            <form class="form-inline">
                                                
                                                <div class="form-group mx-sm-3 mb-2">
                                                  
                                                    <input type="text"  class="form-control" id="inputPassword2" placeholder="Doss"/>
                                                </div>
                                                
                                            </form>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td>
                                            <form >
  
                                                <select name="cars" id="cars">
                                                <option value="volvo"></option>
                                                    <option value="volvo">Paracetamol</option>
                                                    <option value="saab">acetaminophen</option>
                                                    <option value="opel">Tylenol</option>
                                                    <option value="audi">ibuprofen</option>
                                                </select>
                                                

                                            </form>
                                            </td>

                                            <td>
                                            <form class="form-inline">
                                                
                                                <div class="form-group mx-sm-3 mb-2">
                                                  
                                                    <input type="text"  class="form-control"  placeholder="Time"/>
                                                </div>
                                                
                                            </form>
                                            </td>

                                            <td>
                                            <form class="form-inline">
                                                
                                                <div class="form-group mx-sm-3 mb-2">
                                                  
                                                    <input type="text"  class="form-control" id="inputPassword2" placeholder="Doss"/>
                                                </div>
                                                
                                            </form>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td>
                                            <form >
  
                                                <select name="cars" id="cars">
                                                <option value="volvo"></option>
                                                    <option value="volvo">Paracetamol</option>
                                                    <option value="saab">acetaminophen</option>
                                                    <option value="opel">Tylenol</option>
                                                    <option value="audi">ibuprofen</option>
                                                </select>
                                                

                                            </form>
                                            </td>

                                            <td>
                                            <form class="form-inline">
                                                
                                                <div class="form-group mx-sm-3 mb-2">
                                                  
                                                    <input type="text"  class="form-control" id="inputPassword2" placeholder="Time"/>
                                                </div>
                                                
                                            </form>
                                            </td>

                                            <td>
                                            <form class="form-inline">
                                                
                                                <div class="form-group mx-sm-3 mb-2">
                                                  
                                                    <input type="text"  class="form-control" id="inputPassword2" placeholder="Doss"/>
                                                </div>
                                                
                                            </form>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td>
                                            <form >
  
                                                <select name="cars" id="cars">
                                                <option value="volvo"></option>
                                                    <option value="volvo">Paracetamol</option>
                                                    <option value="saab">acetaminophen</option>
                                                    <option value="opel">Tylenol</option>
                                                    <option value="audi">ibuprofen</option>
                                                </select>
                                                

                                            </form>
                                            </td>

                                            <td>
                                            <form class="form-inline">
                                                
                                                <div class="form-group mx-sm-3 mb-2">
                                                  
                                                    <input type="text"  class="form-control" id="inputPassword2" placeholder="Time"/>
                                                </div>
                                                
                                            </form>
                                            </td>

                                            <td>
                                            <form class="form-inline">
                                                
                                                <div class="form-group mx-sm-3 mb-2">
                                                  
                                                    <input type="text" class="form-control" id="inputPassword2" placeholder="Doss"/>
                                                </div>
                                                
                                            </form>
                                            </td>
                                        </tr>

                                        
                                 </tbody>
                                 
                                 
                             </table>
                         </div>
                     </div>
                 </div>

                 <div class="col-md-6 mt-4">
                 <div class="d-sm-flex align-items-center justify-content-between mb-4">
         
         <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> 
         Generate Report</a>
       </div>
                 </div>

                 </div>
        </div>
    )
}
