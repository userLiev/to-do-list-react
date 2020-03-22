import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: "" };
    }

    updateInput = input => {
        this.setState({ input });
    };

    handleAddTodo = () => {
        if(this.state.input !== "") {
            this.props.addTodo(this.state.input);
            this.setState({ input: "" });
        }
    }

    render() {
        return (
            <div className="add-todo">
                <input 
                    onChange={e => this.updateInput(e.target.value)}
                    value={this.state.input}
                />
                <button className="add-todo" onClick={this.handleAddTodo}>
                    add
                </button>
            </div>
        )
    }

}

export default connect(
    null,
    { addTodo }
)(AddTodo);
