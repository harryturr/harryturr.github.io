import { Chip } from "ui-neumorphism";

export let StyledChip = (props) => {
  return (
    <Chip
      active
      elevation={1}
      style={{
        fontSize: "1.25rem",
        width: "fit-content",
        padding: "10px",
        backgroundColor: "#f7f9fc",
      }}
    >
      {props.text}
    </Chip>
  );
};
