import React, { Component } from 'react';
import SingleWorkRowDescription from './SingleWorkrowDescription';
import SingleWorkRowEdit from './SingleWorkRowEdit';

class SingleWorkRow extends Component {
    constructor(props) {
        super(props);
        let editing = this.props.editing ? true : false;
        this.state = {
            editing: editing,
            work: props.work,
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            work: newProps.work
        });
    }

    handlechange = e => {
        this.setState({
            work: object.assign(this.state.work, {
                [e.target.name]: e.target.value,
            }),
        });
    }

    toggleEdit = e => {
        if (this.state.editing) {
            if (this.props.newWork) {
                this.props.savenewWork(this.state.work);
            } else {
                this.props.updateWork(this.state.work);
            }
        }
        this.setState({
            editing: !this.state.editing
        });
    }

    render() {
        return (
            this.state.editing
            ? <SingleWorkRowEdit work={this.state.work} idx={this.props.idx} handleChange={this.handlechange} toggleEdit={this.toggleEdit} />
            : <SingleWorkRowDescription work={this.props.work} idx={this.props.idx} toggleEdit={this.toggleEdit} />

        )
    }
}

export default SingleWorkRow;