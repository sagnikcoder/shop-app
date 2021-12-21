import React from "react";
import "./AdminLayout.css";
const AdminOrders=()=>(
    <section className="food-menu-area">
       <div className="container">
           <div className="row justify=content-center">
               <div className="col-lg-8">
                   <div className="section-title text-center">
                       <img src="https://theme.app.prod.fuznet.com/rondhon/assets/images/shape/title-shape-2.png"/>
                       <h3 className="title">Current Available Menu</h3>
                       <p>The Process of our Service</p>
                   </div>
               </div>
           </div>
        </div>
        <div className="container custom-container-2">
            <div className="row">
                <div className="col-lg-12">
                    <div className="food-menu-box bg_cover">
                        <div className="project-menu">
                           <ul>
                               <li data-filter="*" className="active">
                                   All
                               </li>
                               <li data-filter=".cat-1">
                                   Breakfast
                               </li>
                               <li data-filter=".cat-2">
                                   Lunch
                               </li>
                               <li data-filter=".cat-3">
                                   Dinner
                               </li>
                               <li data-filter=".cat-4">
                                   Coffee
                               </li>
                               <li data-filter=".cat-5">
                                   Snacks
                               </li>
                           </ul>
                        </div>
                        <div className="row grid" style={{position: "relative", height: "370px"}}>
                        <div class="col-lg-6 cat-3 cat-4 cat-2" style={{position: "absolute", top: "0px",left: "0px"}}>
                             {/* Work to be done */}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </section>
);

export default AdminOrders;