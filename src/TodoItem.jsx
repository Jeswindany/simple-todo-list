import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

export default function TodoItem({ todo, remove, toggleTodo }) {
  const labelId = `checkbox-list-label-${todo.id}`;
  const removeTodo = () => {
    remove(todo.id);
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
          <DeleteOutlineRoundedIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            sx={{
              color: "purple",
              "&.Mui-checked": {
                color: "purple",
              },
              "& .MuiSvgIcon-root": {
                borderColor: "purple",
                borderRadius: "4px",
              },
            }}
            edge="start"
            checked={todo.completed}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
            onChange={toggleTodo}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={todo.text} />
      </ListItemButton>
    </ListItem>
  );
}
