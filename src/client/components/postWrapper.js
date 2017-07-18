import React from "react"
import {Route} from "react-router-dom"
import Createpost from "./createposts"

export default class Postwrapper extends React.Component {
    render() {
        return (

            <div className="container-fluid">
                <div className="PostContainer">
                    <div className="bannerHeading">Muscle n Fitness</div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 formWrapper">
                            <Createpost/>
                        </div>
                        <div className="col-md-6">
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}