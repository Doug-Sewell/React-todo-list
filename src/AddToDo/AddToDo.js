import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const AddToDo = (props) => {

    const style={
        margin:'1rem'
    }

    const buttonStyle = {
        marginTop:'0.5rem'
    }
    
    return(
        <form 
        style={style}
        onSubmit={(event) => props.addTodo(event)}>
            <TextField 
            variant="outlined"
            value={props.userInput} 
            onChange={props.updateInput}
            placeholder="Type Todo Here" 
            type="text" /> <br />
            
            <Button style={buttonStyle} variant="contained" color="secondary" type="submit">Add ToDo Item</Button>
        </form>
    )
}

export default AddToDo;