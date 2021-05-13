import { Card } from "ui-neumorphism";

export let StyledCard = (props) => {
  return (
    <Card
      inset
      elevation={1}
      style={{
        fontSize: "1.25rem",
        width: "fit-content",
        padding: "5px",
      }}
    >
      <a target="_blank" href={props.href}>{props.text}</a>
    </Card>
  );
};
