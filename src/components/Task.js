import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task_id: this.props.task_id, 
      first_time: true,
      task_name: this.props.task_name,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTaskNameChange = this.handleTaskNameChange.bind(this);
  }

  handleChange() {
    this.props.deleteTask(this.state.task_id);
  }

  handleSubmit() {
    this.setState((state) => ({
      first_time: false
    }));
  }

  handleTaskNameChange(event) {
    this.setState({task_name: event.target.value});
  }

  render() {
    if (false) { // this.state.first_time

      return (
        <form onSubmit={this.handleSubmit}>
          <label>
          Task name:
          <input 
            type="text" 
            value={this.state.task_name} 
            onChange={this.handleTaskNameChange}
            />
          </label>
          <input type="button" value="Done" onClick={this.handleSubmit}/>
        </form>
        );

    } else {
      return (
      <div>
        <input type="checkbox"/>
        <text>{this.state.task_name}</text>
        <button onClick={this.handleChange}>Delete task</button>
      </div>
      );
    }
  }
}

export default Task;
