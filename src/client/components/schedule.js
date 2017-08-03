/**
 * Created by sourabh on 1/8/17.
 */
import React from "react";
import { DropdownButton, MenuItem ,ButtonToolbar} from "react-bootstrap";
import {fetchExercisesList} from "../actions/excercise"
import {connect} from "react-redux"

class Schedule extends React.Component {
    constructor(){
        super();
        this.state={
            title:'select-body-part'
        }
    }
    handleChange = (e) => {
        this.setState({title:e});
        const token=localStorage.getItem('token');
      this.props.fetchExercisesList(e,token)

    };
    render() {
        return (
            <div>
                <ButtonToolbar>
                <DropdownButton bsSize="large" bsStyle="primary" title={this.state.title} onSelect={this.handleChange} id="dropdown-size-medium">
                    <MenuItem eventKey="Chest">Chest</MenuItem>
                    <MenuItem eventKey="Shoulder">Shoulder</MenuItem>
                    <MenuItem eventKey="Biceps">Biceps</MenuItem>
                    <MenuItem eventKey="Triceps">Triceps</MenuItem>
                    <MenuItem eventKey="Legs">Legs</MenuItem>
                    <MenuItem eventKey="Back">Back</MenuItem>
                </DropdownButton>
                </ButtonToolbar>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    exercisesList: state.exerciseReducer.exercisesList,
});

const mapDispatchToProps = (dispatch) => ({

   fetchExercisesList: (bodypart,token) => { dispatch(fetchExercisesList(bodypart,token))}
});

export default connect(mapStateToProps,mapDispatchToProps)(Schedule)