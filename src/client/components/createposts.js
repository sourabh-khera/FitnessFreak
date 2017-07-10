import React from "react"
import {createPost} from "../actions/post"
import {connect} from "react-redux"
import axios from "axios"
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dcs4tfpha/upload";
const CLOUDINARY_PRESET = "rrawwml0";
class Createpost extends React.Component {
    constructor() {
        super();
        this.state = {
            postBody: "",
            image:"",
        }
    }

    onImageChange = (e) => {
        let file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_PRESET);

        axios({
            url: CLOUDINARY_URL,
            method: 'post',
            data: formData,
        })
            .then((res) => {
                this.setState({image: res.data.secure_url});
            })
            .catch((error) => {
                console.log(error)
            })

    };
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };
    handleSubmit = (postData,e) => {
        const token = localStorage.getItem('token');
        this.props.createPost(postData, token);
        this.setState({postBody: '',image:''})
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
                                     value={this.state.postBody}
                                     onChange={this.handleChange}
                                 />
                                <div className="createpostFooter">
                                    <input type="button" className="btn btn-primary pull-right" value="Submit"
                                           onClick={() => this.handleSubmit(this.state)}/>
                                    <input type="file"  name="image"
                                           onChange={this.onImageChange} onClick={(e)=>{
                                               e.target.value=null;
                                           }}/>
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
    createPost: (postData, token) => {
        dispatch(createPost(postData, token))
    }
});

export default connect(null, mapDispatchToProps)(Createpost)