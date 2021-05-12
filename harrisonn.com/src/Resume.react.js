import { Card } from "ui-neumorphism";
import { StyledChip } from "./StyledChip.react";

export let Resume = () => {
  return (
    <Card style={{ textAlign: "left", padding: "10px" }}>
      <div style={{ width: "100%" }}>
        <p>
          I'm currently searching for job opportunities! <br /> <br />
          Experienced in frontend development with{" "}
          <StyledChip text="Javascript" /> and <StyledChip text="React" />, with
          knowledge in
          <StyledChip text="Python" /> for writing integration tests and some
          backend work. I am comfortable with <StyledChip text="git/GitHub" />{" "}
          work flows and <StyledChip text="GNU/Linux" />. and am familiar with{" "}
          <StyledChip text="Docker" />, <StyledChip text="k8s" />, and{" "}
          <StyledChip text="Node" /> .
        </p>
      </div>
    </Card>
  );
};
