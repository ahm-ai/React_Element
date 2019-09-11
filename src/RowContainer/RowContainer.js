import React, { Component } from 'react'
import Inputs from './Inputs/Inputs';
import "./RowContainer.css"

export default class RowContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: [
                { value1: "", value2: "", value3: "", },
                { val: '' },
                { val: 'THREE' }
            ]
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.addField = this.addField.bind(this);
    }

    handleDelete(idx) {
        let values = this.state.values;
        let state = this.state;
        values.splice(idx, 1)
        state.values = values;
        this.setState({
            ...state
        })
    }

    addField() {
        this.setState({
            values: [...this.state.values,
            { val: "" }
            ]
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.addField}>ADD</button>
                {this.state.values.map((passFields, i) => (
                    <div >
                        <Inputs
                            deleteMe={
                                (i) => {
                                    this.handleDelete(i)
                                }}
                            change={
                                (value, idx) => {
                                    var tempState = { ...this.state }
                                    tempState.values[idx] = value;

                                    this.setState({
                                        ...tempState
                                    })
                                    console.warn(this.state);

                                }
                            }
                            key={i} passValues={passFields} index={i} />


                    </div>

                ))}

            </div>
        )
    }
}
