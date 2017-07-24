import React from "react"
import legs1 from "../../assets/image/legs1.jpg";
import legs2 from "../../assets/image/legs2.jpg";
import legs3 from "../../assets/image/legs3.jpg";
import {Link} from "react-router-dom"
const Legsworkoutlists = () => {

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
                        <Link to="/instruction/LegPress"><img src={legs1}/></Link>
                        <div className="carousel-caption">
                            <h3>LegPress</h3>
                        </div>
                    </div>

                    <div className="item">
                        <Link to="/instruction/LyingLegCurls"> <img src={legs2}/></Link>
                        <div className="carousel-caption">
                            <h3>Lying Leg Curls</h3>

                        </div>
                    </div>
                    <div className="item">
                        <Link to="/instruction/LegExtensions"> <img src={legs3}/></Link>
                        <div className="carousel-caption">
                            <h3>Leg Extensions</h3>
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

export default Legsworkoutlists