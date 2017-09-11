/**
 * Created by sourabh on 3/8/17.
 */
import React from "react"
import {connect} from "react-redux"
import { addToScheduleList } from "../actions/excercise"

class Listofexercises extends React.Component {
    render() {
        const { exercisesList, selectedExercise } = this.props;
        const list = exercisesList.map((items) => (
                    items.listofexercises.map((exercise,i) =>
                        <div>
                            <input
                                key={i}
                                type="checkbox"
                                value={exercise}
                                checked={!!selectedExercise.find((ex) => ex === exercise )}
                                onChange={(e) => this.props.addToScheduleList(exercise)}
                            /> {exercise}
                        </div>
                    )));
        return (
            <div>
                {list}
            </div>
        )
    }
}
;
const mapStateToProps = (state) => ({
    exercisesList: state.exerciseReducer.exercisesList,
    selectedExercise: state.exerciseReducer.selectedExercise
});

const mapDispatchToprops = (dispatch) => ({
    addToScheduleList: (exercise) => dispatch(addToScheduleList(exercise))
})

export default connect(mapStateToProps, mapDispatchToprops)(Listofexercises)