import React from "react"
import bicepRod from "../../assets/image/biceps1.jpg";
import hammer from "../../assets/image/biceps2.jpg";
import alternate from "../../assets/image/alternate.png"
import {Link} from "react-router-dom"
const Bicepsworkoutlists = () => {

    return (

        <div className="container">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="item active">
                        <Link to="/instruction/WideGripStandingBarbellCurl"><img src={bicepRod}/></Link>
                        <div className="carousel-caption">
                            <h3>Wide-Grip Standing Barbell Curl</h3>
                        </div>
                    </div>

                    <div className="item">
                        <Link to="/instruction/HammerCurls"> <img src={hammer}/></Link>
                        <div className="carousel-caption">
                            <h3>Hammer Curls</h3>

                        </div>
                    </div>
                    <div className="item">
                        <Link to="/instruction/AlternateDumbbell"> <img src={alternate}/></Link>
                        <div className="carousel-caption">
                            <h3>Alternate Dumbbell Curls</h3>
                        </div>
                    </div>


                </div>
                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )

};

export default Bicepsworkoutlists