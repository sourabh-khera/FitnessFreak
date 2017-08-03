/**
 * Created by sourabh on 14/7/17.
 */
import React from "react"
import {fetchExercise} from "../actions/excercise"
import {connect} from "react-redux"
class Instruction extends React.Component {
    constructor(props) {
        super(props);
        this.exerciseName = props.match.params.key;
    }

    // speak = (text) => {
    //     let speechSynthesis = window.speechSynthesis;
    //     let utterThis = new SpeechSynthesisUtterance();
    //     utterThis.text = text;
    //     setTimeout(() => {
    //         speechSynthesis.speak(utterThis);
    //     }, 0)
    // };
    //
    // pauseVoice = () => {
    //     let speechSynthesis = window.speechSynthesis;
    //     speechSynthesis.pause()
    // };
    //
    // resumeVoice = () => {
    //     let speechSynthesis = window.speechSynthesis;
    //     speechSynthesis.resume()
    // };

    // componentWillUnmount(){
    //     let  speechSynthesis = window.speechSynthesis;
    //     speechSynthesis.cancel();
    // }
    componentDidMount() {
        const token = localStorage.getItem('token');
        this.props.fetchExercise(this.exerciseName, token)
    }

    render() {
        const instruction = this.props.exerciseData.map((item) => {
            if (item.exerciseName === this.exerciseName) {
                const steps = item.instructions.map((instruction) => {
                    console.log("item------", instruction);
                    return <li>{instruction}</li>
                });
                return steps
            }
        });
        const videoUrl = this.props.exerciseData.map((item) => {
            if (item.exerciseName === this.exerciseName) {
                return item.videoUrl;
            }
        });
        const imageUrl = this.props.exerciseData.map((item) => {
            if (item.exerciseName === this.exerciseName) {
                return item.imageUrl;
            }
        });

        return (
            <div className="instructionParent">
                <h1>INSTRUCTIONS:-</h1>
                    <div className="instructionsDisplay">
                        <ul>
                            {instruction}
                        </ul>
                    </div>
                    <div className="muscleImage">
                        <h3>Main Muscle</h3>
                        <img src={imageUrl}/>
                    </div>

                <div className="videoHeading">
                    For More Help Look At The Video...
                </div>
                <div className="videoUrl">
                    <iframe width="560" height="315" src={videoUrl} frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    exerciseData: state.exerciseReducer.exerciseData,
});

const mapDispatchToProps = (dispatch) => ({
    fetchExercise: (exerciseName, token) => dispatch(fetchExercise(exerciseName, token))
});

export default connect(mapStateToProps, mapDispatchToProps)(Instruction)