import { Card, Button, Divider, Chip } from "ui-neumorphism";
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
        <div
          style={{
            /*  marginTop: "25px", */ alignItems: "center",
            justifyContent: "center",
          }}
        >
          {["professional", "education/research", "skills/other"].map((i) => {
            return (
              <Button
                text
                size="small"
                key={i}
                active={clicked === i ? true : false}
                onClick={() => setClicked(i)}
                bgColor={clicked === i ? "#f7f9fc" : ""}
              >
                {i}
              </Button>
            );
          })}
        </div>
      </div>
      <ContentDiv clicked={clicked} />
      <Divider dense />
      <br />
      <Chip size="large">
        <div>
          For a full CV, click to{" "}
          <a href="GriffinCV.pdf" target="_blank">
            view
          </a>{" "}
          or
          <a href="GriffinCV.pdf" download>
            {" "}
            download.
          </a>
        </div>
      </Chip>
    </Card>
  );
};
