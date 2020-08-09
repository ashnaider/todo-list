import React from 'react';

import Task from './Task';

class TaskList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      total_tasks: 0, 
      tasks: [], 
      card_id: this.props.card_id,
      card_name: this.props.card_name,
      new_task_name: "",
    };

    this.addNewTask = this.addNewTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.deleteCard = this.deleteCard.bind(this);

    this.handleNewTaskNameChange = this.handleNewTaskNameChange.bind(this);
    this.handleNewTaskNameSubmit = this.handleNewTaskNameSubmit.bind(this);
  }

  deleteTask(task_id) {
    this.setState(function(state) {
      delete state.tasks[task_id];
      return {
        total_tasks: --state.total_tasks,
        tasks: state.tasks
      };
    });
  }

  deleteCard() {
    this.props.deleteCard(this.state.card_id);
  }

  addNewTask() {
    
    this.setState(function(state) {
      let r = state.tasks;
      r.push(<Task 
                task_id={state.tasks.length} 
                deleteTask={this.deleteTask} 
                task_name={state.new_task_name}
                />)
      return {
        total_tasks: ++state.total_tasks,
        tasks: r,
        new_task_name: "",
      };
    });
  }

  handleNewTaskNameChange(event) {
    this.setState({new_task_name: event.target.value});
  }

  handleNewTaskNameSubmit() {
    if (this.state.new_task_name === "") {
      return;
    }
    this.addNewTask();
  }

  render () {
    return (
      <div>
        {/* <button onClick={this.addNewTask}>Add new task</button> */}
        <h3>{this.state.card_name}</h3>
        <text>New tasks: {this.state.total_tasks}</text>
        <button onClick={this.deleteCard}>Delete card</button>
        
        <div>
        <br/>
          <label>
          Add new task:
          <input 
            type="text" 
            onChange={this.handleNewTaskNameChange}
            value={this.state.new_task_name}
            />
          </label>
          <input type="button" value="Done" onClick={this.handleNewTaskNameSubmit}/>
        </div>
        

        <div>{this.state.tasks}</div>
        <br /> 
        <br />
      </div>
    );
  }
}

export default TaskList;