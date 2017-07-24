import React from "react"
import frontPully from "../../assets/image/back1.jpg";
import oneArmRow from "../../assets/image/back3.jpg";
import pullOver from "../../assets/image/back2.jpg"
import {Link} from "react-router-dom"
const Backworkoutlists = () => {

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
                        <Link to="/instruction/LatPulldown"><img src={frontPully}/></Link>
                        <div className="carousel-caption">
                            <h3>Lat Pulldown</h3>
                        </div>
                    </div>

                    <div className="item">
                        <Link to="/instruction/PullOver"> <img src={pullOver}/></Link>
                        <div className="carousel-caption">
                            <h3>PullOver</h3>

                        </div>
                    </div>
                    <div className="item">
                        <Link to="/instruction/OneArmRow"> <img src={oneArmRow}/></Link>
                        <div className="carousel-caption">
                            <h3>One Arm Row</h3>
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

export default Backworkoutlists