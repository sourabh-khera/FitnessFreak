import React from "react"
import shoulder1 from "../../assets/image/shoulder1.jpg";
import shoulder2 from "../../assets/image/shoulder2.jpg";
import shoulder3 from "../../assets/image/shoulder3.jpg";
import {Link} from "react-router-dom"
const Shoulderworkoutlists = () => {

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
                        <Link to="/instruction/FrontPlateRaise"><img src={shoulder1}/></Link>
                        <div className="carousel-caption">
                            <h3>Front Plate Raise</h3>
                        </div>
                    </div>

                    <div className="item">
                        <Link to="/instruction/DumbbellShoulderPress"> <img src={shoulder2}/></Link>
                        <div className="carousel-caption">
                            <h3>Dumbbell Shoulder Press</h3>

                        </div>
                    </div>
                    <div className="item">
                        <Link to="/instruction/SideLateralRaise"> <img src={shoulder3}/></Link>
                        <div className="carousel-caption">
                            <h3>Side Lateral Raise</h3>
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

export default Shoulderworkoutlists