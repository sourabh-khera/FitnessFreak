import React from "react"
import triceps1 from "../../assets/image/triceps1.jpg";
import triceps2 from "../../assets/image/triceps2.jpg";
import triceps3 from "../../assets/image/triceps3.jpg";
import {Link} from "react-router-dom"
const Tricepsworkoutlists = () => {

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
                        <Link to="/instruction/TricepsOverheadExtensionWithRope"><img src={triceps1}/></Link>
                        <div className="carousel-caption">
                            <h3>Triceps Overhead Extension With Rope</h3>
                        </div>
                    </div>

                    <div className="item">
                        <Link to="/instruction/DipMachine"> <img src={triceps2}/></Link>
                        <div className="carousel-caption">
                            <h3>Dip Machine</h3>

                        </div>
                    </div>
                    <div className="item">
                        <Link to="/instruction/TricepsPushdown"> <img src={triceps3}/></Link>
                        <div className="carousel-caption">
                            <h3>Triceps Pushdown</h3>
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

export default Tricepsworkoutlists