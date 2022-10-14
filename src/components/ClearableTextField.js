import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/Clear";

const ClearableTextField = (props) => {
  const { onClear, ...p } = props;

  return (
    <TextField
      {...p}
      InputProps={{
        endAdornment:
          (typeof onClear) === "function" ? (
            <IconButton
              sx={{
                visibility: !!p.value?.length ? "visible" : "hidden",
              }}
              size="small"
              onClick={(e) => onClear(e)}
            >
              <ClearIcon />
            </IconButton>
          ) : null,
      }}
    />
  );
};

export default ClearableTextField;
