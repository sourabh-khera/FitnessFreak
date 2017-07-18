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
        console.log("key------", this.exerciseName);
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
         const instructions=this.props.exerciseData.map((item)=>{
                  if(item.excerciseName===this.exerciseName) {
                      console.log("item------",item);
                      return item.instructions;
                  }
         });
         const videoUrl=this.props.exerciseData.map((item)=>{
             if(item.excerciseName===this.exerciseName) {
                 return item.videoUrl;
             }
         });

        return (
            <div className="speak">
                <div className="instruction">
                    <h1>INSTRUCTIONS:-</h1>
                    {instructions}
                </div>
                {/*<div className="controllers">*/}
                    {/*<button title="Play" className="Play" onClick={() => this.speak(instructions)}>Play</button>*/}
                    {/*<button title="Pause" className="Pause" onClick={() => this.pauseVoice()}>Pause</button>*/}
                    {/*<button title="Resume" className="Resume" onClick={() => this.resumeVoice()}>Resume</button>*/}
                {/*</div>*/}
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