/**
 * Created by sourabh on 3/8/17.
 */
import React from "react"
import Schedule from "./schedule"
import Listofexercises from "./displayExercisesList"

export default class ScheduleWrapper extends React.Component{
  render(){
      return(
          <div>
              <Schedule/>
              <Listofexercises/>
          </div>
      )
  }
};