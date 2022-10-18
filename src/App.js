import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ClearableTextField from "./components/ClearableTextField";
import { createTodo, deleteTodo } from "./store/features/todo/todoSlice";
import './App.css';

function App() {
  const [todo, setTodo] = useState("");

  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const todoChanged = (e) => {
    setTodo(e.target.value);
  };

  const todoCleared = (e) => {
    setTodo("");
  };

  const todoKeyPress = (e) => {
    if (e.type === "click" || (e.type === "keypress" && e.charCode === 13)) {
      todoInsert(e.target.value)
      setTodo("");
    }
  };

  const todoInsert = (value) => {
    dispatch(createTodo(value));
  };

  const todoDelete = (e, key) => {
    dispatch(deleteTodo(key));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Grid container spacing={2} mt={2}>
          <Grid
            item
            xs
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h4" mt={2}>
              Rea4C Todo List
            </Typography>
            <ClearableTextField
              id="todo"
              variant="outlined"
              margin="normal"
              value={todo}
              onChange={(e) => todoChanged(e)}
              onKeyPress={(e) => todoKeyPress(e)}
              onClear={(e) => todoCleared(e)}
            />

            <Grid
              item
              xs
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              mt={3}
            >
              {todos.map(function (item, i) {
                return (
                  <ClearableTextField
                    key={i}
                    variant="outlined"
                    value={item.value}
                    onClear={(e) => todoDelete(e, item.key)}
                    disabled={true}
                    sx={{ marginBottom: 1 }}
                  />
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
