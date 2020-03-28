import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddToDo from './AddToDo/AddToDo';
import ToDos from './ToDos/ToDos';

class App extends Component {

  state = {
    Todos: ['Feed dogs', 'Walk dogs', 'cook dinner'],
    userInput: ''
  }

  addTodo = (event) => {
    event.preventDefault();
    const stateCopy = [...this.state.Todos];
    stateCopy.push(this.state.userInput);
    this.setState({Todos:stateCopy,userInput:''});
  }

  updateInput = (event) => {
    this.setState({userInput:event.target.value})
  }

  deleteTodo = (index) => {
    const stateCopy = [...this.state.Todos];
    stateCopy.splice(index,1);
    this.setState({Todos:stateCopy});
  }


  render() {
    const toDos = this.state.Todos.map((todo, index) => <ToDos key={index} deleteTodo={() => this.deleteTodo(index)} todo={todo} />);

    return (
      <div>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
              <p>Todo List App</p>
            </Typography>
          </Toolbar>
        </AppBar>
        <AddToDo 
          addTodo = {this.addTodo.bind(this)}
          userInput = {this.state.userInput}
          updateInput = {this.updateInput.bind(this)} />
          <hr style={{color:'#d3d3d3'}} />
        {toDos}
      </div>
    )
  }
}

export default App;