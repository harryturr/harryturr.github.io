import { Card, Button, Divider } from "ui-neumorphism";
import { StyledChip } from "./StyledChip.react";
import React, { useState } from "react";
import { ProfessionalCard } from "./ProfessionalCard.react";
import { EducationCard } from "./EducationCard.react";
import { SkillsCard } from "./SkillsCard.react";

let ContentDiv = (props) => {
  if (props.clicked === "professional") {
    return <ProfessionalCard />;
  } else if (props.clicked === "education/research") {
    return <EducationCard />;
  } else if (props.clicked === "skills/other") {
    return <SkillsCard />;
  }
  return <Card>{props.clicked}</Card>;
};

export let Resume = () => {
  const [clicked, setClicked] = useState("professional");
  const [hover, setHover] = useState(false);


  return (
    <Card flat style={{ textAlign: "left", padding: "10px" }}>
      <div style={{ width: "100%" }}>
        {/*<p>I'm currently searching for job opportunities — check out my CV below!</p> <br />
         <p style={{ fontSize: "1rem" }}>
          Experience in FE development with <StyledChip text="Javascript" /> and{" "}
          <StyledChip text="React" />. Knowledge in
          <StyledChip text="Python" /> for writing integration tests and some BE
          work. I am comfortable with <StyledChip text="git/GitHub" /> work
          flows and <StyledChip text="GNU/Linux" />. I am familiar with{" "}
          <StyledChip text="Docker" />, <StyledChip text="k8s" />, and{" "}
          <StyledChip text="Node" /> .
        </p> */}

        <div style={{/*  marginTop: "25px", */ alignItems: "center",
  justifyContent: "center" }}>
          {["professional", "education/research", "skills/other"].map((i) => {
            return (
              <Button
                text
                size='small'
                key={i}
                active={clicked === i ? true : false}
                onClick={() => setClicked(i)}
                bgColor={clicked === i ? '#f7f9fc' : ''}
              >
                {i}
              </Button>
            );
          })}
        </div>
      </div>
      <ContentDiv clicked={clicked} />
    </Card>
  );
};
