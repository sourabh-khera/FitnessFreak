/**
 * Created by sourabh on 10/7/17.
 */
import React from "react"
import{Link} from "react-router-dom"
const Excercises = () => {
    return (
        <div className="container">
            <div className="ExcerciseHeading">Muscle n Fitness</div>
            <div className="row">
                <div className="chestParent col-md-4">
                    <div className="chestWrapper ">
                        <div className="chestOverlay">
                        </div>
                        <h1><Link to="/chestworkoutlists">CHEST</Link></h1>
                    </div>
                </div>
                <div className="backParent col-md-4">
                    <div className="backWrapper ">
                        <div className="backOverlay">
                        </div>
                        <h1><Link to="/backworkoutlists">BACK</Link></h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className=" bicepsParent col-md-4">
                    <div className="bicepsWrapper">
                        <div className="bicepsOverlay">

                        </div>
                        <h1>BICEPS</h1>
                    </div>
                </div>
                <div className="tricepsParent col-md-4">
                    <div className="tricepsWrapper ">
                        <div className="tricepsOverlay">

                        </div>
                        <h1>TRICEPS</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="shoulderParent col-md-4">
                    <div className="shoulderWrapper ">
                        <div className="shoulderOverlay">

                        </div>
                        <h1>SHOULDER</h1>
                    </div>
                </div>
                <div className="legsParent col-md-4">
                    <div className="legsWrapper">
                        <div className="legsOverlay">

                        </div>
                        <h1>LEGS</h1>
                    </div>
                </div>
            </div>

        </div>
    )
};
export default Excercises