import React, { Component } from 'react'
import './Input.css'

export default class Inputs extends Component {

    constructor(props) {
        super(props);
        this.state = { isActive: true };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        const renderValues = this.props.passValues
        this.setState({ ...renderValues })
    }


    handleDelete() {
        this.setState({});
        this.setState({ isActive: false })
    }

    handleChange($event) {
        try {
            const key = Object.keys(this.state.actives)[$event.target.id];
            this.setState({
                ...this.state,
                actives: { [key]: $event.target.value }
            })
            this.props.change(this.state.actives, this.props.index)
        } catch (error) { }
    }

    counter = 0;

    componentWillUpdate(props) {
        if (this.counter <= 10) {
            const renderValues = props.passValues
            this.setState({ ...renderValues })
            this.counter++;
        }
    }

    render() {
        if (this.state.isActive) {
            return (
                <div className="form">
                    {
                        Object.entries(this.state).map((value, key) => (
                            key > 0 ?
                                <div key={key}>
                                    <input type="text" placeholder={value} id={key} onChange={this.handleChange} />
                                </div>
                                : ''
                        ))
                    }
                    <button onClick={this.handleDelete} > X </button>
                </div>
            )
        }
        return ('')
    }
}
