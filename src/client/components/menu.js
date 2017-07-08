/**
 * Created by sourabh on 30/6/17.
 */

import React from "react"
import {Link} from "react-router-dom"

export default class Menu extends React.Component{
    render(){
        return(
            <div className="MenuContainer">
                <div className="item1">
                    <button>Exercises</button>
                </div>
                <div className="item2">
                    <button>Gallery</button>
                </div>
                <div className="item3">
                    <button><Link to="/createpost">
                        Upload Photos<br/>
                             &<br/>
                            Videos
                    </Link></button>
                </div>
                <div className="MenuHeading">Muscle n Fitness</div>
            </div>
        )
    }

}