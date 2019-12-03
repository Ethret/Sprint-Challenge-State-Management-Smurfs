import React from "react";
import "./App.css";
import { connect } from 'react-redux'
import { getData } from '../actions'

const SmurfList = props => {
    return(
        <div>
            <button onClick = {props.getData}>Meet The Smurfs</button>
            {props.smurfs.map(smurf => {
            return (
                <div>
                    <h3>Name: {smurf.name}</h3>
                    <h4>Age: {smurf.age}</h4>
                    <h4>Height: {smurf.height}</h4>
                    <hr/>
                </div>)
        })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs : state.smurfs
    }
}

export default connect(mapStateToProps, { getData })(SmurfList)
