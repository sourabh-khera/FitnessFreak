/**
 * Created by sourabh on 3/8/17.
 */
import React from "react"
import {connect} from "react-redux"

class Listofexercises extends React.Component{
  render () {
      const { exercisesList } = this.props;
      const list = exercisesList.map((items) => (
        items.listofexercises.map((exercise) => <div><input type="checkbox" value={exercise} />{exercise}</div>)
      ));
      return(
          <div>
              <ul>
              {list}
              </ul>
          </div>
      )
  }
};
const mapStateToProps = (state) => ({
    exercisesList: state.exerciseReducer.exercisesList,
});

export default connect(mapStateToProps)(Listofexercises)