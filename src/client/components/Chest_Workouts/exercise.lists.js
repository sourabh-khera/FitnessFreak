/**
 * Created by sourabh on 14/7/17.
 */
import React from "react"
import chest1 from "../../assets/image/chest1.jpg";
import chest2 from "../../assets/image/Incline_Dumbbell_Bench_Press_Starting.jpg";
import chest3 from "../../assets/image/chest3.jpg";
import chest4 from "../../assets/image/chest4.jpg";
import {Link} from "react-router-dom"
const Chestworkoutlists = () => {

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
                        <Link to="/instruction/InclineBenchPress"><img src={chest1}/></Link>
                            <div className="carousel-caption">
                                <h3>Incline Bench Press</h3>
                            </div>
                    </div>

                    <div className="item">
                        <Link to="/instruction/InclineBenchPressDumbbell"> <img src={chest2}/></Link>
                            <div className="carousel-caption">
                                <h3>Incline Bench Dumbbell Press</h3>

                            </div>
                    </div>
                    <div className="item">
                        <Link to="/instruction/ButterFlies"> <img src={chest4}/></Link>
                        <div className="carousel-caption">
                            <h3>Butterflies</h3>
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

export default Chestworkoutlists