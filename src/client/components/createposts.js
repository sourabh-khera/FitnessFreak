import React from "react"
import {createPost} from "../actions/post"
import {connect} from "react-redux"
export default class Createpost extends React.Component {
    constructor() {
        super();
        this.state = {
            postBody: ""
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };
    handleSubmit = (postData) => {
        this.props.createPost(postData)
    };

    render() {
        return (
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
                                     onChange={this.handleChange}
                                 />
                                <div className="createpostFooter">
                                    <input type="button" className="btn btn-primary pull-right" value="Submit"
                                           onClick={() => this.handleSubmit(this.state)}/>
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

const mapDispatchToProps = (dispatch) => ({
    createPost:(postData)=>{dispatch(createPost(postData))}
});

export default connect(null,mapDispatchToProps)(Createpost)