import React from 'react';
import Paper from '@material-ui/core/Paper';

const style = {
    padding:'1rem',
    margin:'1rem',
    display:'inline-block',
    backgroundColor:'#d3d3d3',
    cursor:'pointer'
}
const ToDos = (props) => {
    return(
        <Paper 
        style={style}
        onClick={props.deleteTodo}>{props.todo}</Paper>
    )
}

export default ToDos;