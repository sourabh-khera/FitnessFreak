/**
 * Created by sourabh on 29/6/17.
 */
import React from "react"
export default class Createpost extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="PostContainer">
                    <div className="bannerHeading">Muscle n Fitness</div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 formWrapper">
                            <h3 className="leftPanelHeading">Create Post</h3>
                            <form action="" className="form-group">
                                 <textarea
                                     name="postBody"
                                     placeholder="Share your thought..."
                                 />
                                <div className="createpostFooter">
                                    <input type="button" className="btn btn-primary pull-right" value="Submit"/>

                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                </div>
            </div>

        )

    }
}