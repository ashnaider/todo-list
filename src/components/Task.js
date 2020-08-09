import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task_id: this.props.task_id, 
      first_time: true,
      task_name: this.props.task_name,
      isDone: false,
      taskNameDecoration: "none",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTaskNameChange = this.handleTaskNameChange.bind(this);
    this.handleDoneCheckbox = this.handleDoneCheckbox.bind(this);
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

  handleDoneCheckbox() {
    this.setState(function(state) {
      let newDecoration = "line-through";
      if (state.isDone) {
        newDecoration = "none";
      }
      return {
        isDone: !state.isDone,
        taskNameDecoration: newDecoration
      };
    });
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
        <input type="checkbox" onChange={this.handleDoneCheckbox}/>

        <span style={{textDecoration: this.state.taskNameDecoration}}>{this.state.task_name}</span>
        <button onClick={this.handleChange}>Delete task</button>
      </div>
      );
    }
  }
}

export default Task;
