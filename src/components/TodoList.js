import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useTransition, animated } from '@react-spring/web';
import CancelIcon from '@mui/icons-material/Cancel';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newTodo.trim() !== '') {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    };

    const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    /*const todoList = todos.map((todo, index) => {
        return (
            <li key={index}>
                {todo}
                <button onClick={() => handleDelete(index)}>X</button>
            </li>
        );
    });*/

    const transitions = useTransition(todos, {
        from: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(50%,0,0)' },
    });

    const todoList = transitions((style, todo, index) => (
        <animated.li style={{ ...style }} key={index}>
            <ListItemButton
            >
                <ListItemIcon>
                    <CancelIcon onClick={() => handleDelete(index)} />

                </ListItemIcon>
                <ListItemText primary={todo} />

                <ListItemIcon>
                    <DragIndicatorIcon />

                </ListItemIcon>
            </ListItemButton>
        </animated.li>
    ));

    /*const todoList = todos.map((todo, index) => {
      return (
          <animated.li key={index}>
              {todo}
              <button onClick={() => handleDelete(index)}>X</button>
          </animated.li>
      )});*/

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Stack direction="row" spacing={2} justifyContent="center" marginTop={3} marginRight={2} marginLeft={2}>
                    <TextField inputProps={{
                        style: {
                        },
                    }}
                        fullWidth
                        id="filled-basic" label="Your Todo" variant="filled" type="text" value={newTodo} onChange={(event) => setNewTodo(event.target.value)} />
                    <Button variant="contained" endIcon={<PlaylistAddIcon />} style={{ background: '#00B4EB' }} onClick={handleSubmit}>
                        Add
                    </Button>
                </Stack>
            </form>
            <List component="nav">
                {todoList}
            </List>
        </div>
    );
}

export default TodoList;