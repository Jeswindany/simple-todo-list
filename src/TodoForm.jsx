import { ListItem, TextField, InputAdornment, IconButton } from "@mui/material";
import { useState } from "react";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const handleChange = (evt) => {
    setText(evt.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <ListItem sx={{ justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{
            mt: 1,
            "& label.Mui-focused": {
              color: "purple",
            },
            "& label.MuiInputLabel-shrink": {
              color: "purple",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "purple",
              },
              "&:hover fieldset": {
                borderColor: "darkviolet",
              },
              "&.Mui-focused fieldset": {
                borderColor: "rebeccapurple",
              },
            },
          }}
          id="outlined-basic"
          label="New Todo"
          variant="outlined"
          onChange={handleChange}
          value={text}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit" aria-label="create todo" edge="end">
                  <CreateRoundedIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </ListItem>
  );
}
