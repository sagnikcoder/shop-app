import React from "react";
import Processitem from "./Process-item";
const ProcessSection=()=>{
    return (
       <section className="how-it-work-area bg_cover pt-150 pb-150">
        {/* <img src={sectionimage} className="process"/> */}
           <div className="container">
               <div className="row">
                   <div className="col-lg-12">
                        <div className="how-it-work-box">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="section-title text-center">
                                        <img src="https://theme.app.prod.fuznet.com/rondhon/assets/images/shape/title-shape.png" alt="..."/>
                                        <h3 className="title">How it works</h3>
                                        <p>The Process of our service</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <Processitem  src="https://theme.app.prod.fuznet.com/rondhon/assets/images/icon/icon-1.png" title="Choose Restaurant" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis scelerisque sapien. Suspendisse euismod nulla quis pellentesque aliquam. Nulla facilisi. Suspendisse at dolor sapien. Nulla facilisi. Etiam pretium sed dolor sit amet consequat. Phasellus interdum lectus nec ullamcorper auctor."/>
                                <Processitem src="https://theme.app.prod.fuznet.com/rondhon/assets/images/icon/icon-2.png" title="Choose Restaurant" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis scelerisque sapien. Suspendisse euismod nulla quis pellentesque aliquam. Nulla facilisi. Suspendisse at dolor sapien. Nulla facilisi. Etiam pretium sed dolor sit amet consequat. Phasellus interdum lectus nec ullamcorper auctor."/>
                                <Processitem src="https://theme.app.prod.fuznet.com/rondhon/assets/images/icon/icon-3.png" title="Choose Restaurant" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis scelerisque sapien. Suspendisse euismod nulla quis pellentesque aliquam. Nulla facilisi. Suspendisse at dolor sapien. Nulla facilisi. Etiam pretium sed dolor sit amet consequat. Phasellus interdum lectus nec ullamcorper auctor."/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </section>
    );
}

export default ProcessSection;