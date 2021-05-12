import me from "./me.jpeg";
import { Card } from "ui-neumorphism";
import React from "react";
import { DialogStyled } from "./Dialog.react";

export let About = () => {
  return (
    <Card style={{ textAlign: "left", padding: "10px" }}>
      <div style={{ width: "100%" }}>
        <img src={me} alt="profile_pic" className="Prof-pic" />

        <p>
          Hi, I'm Harrisonn (with 2 n's), a software developer based in
          Montreal! <br />
          <br />I started my career in software development at{" "}
          <a href="https://plotly.com/">Plotly</a> working on building open
          source and enterprise data visualization tools. <br />
          Before that I studied single electron physics while completing my
          Masters degree at{" "}
          <a href="https://spm.physics.mcgill.ca/">McGill University</a>.
          <br />
          <br />
          I'm excited by reproducible science, open source software, and data
          viz. I am an avid cyclist, nordic skiier, and tinkerer. <br /> <br />I
          spent six years restoring a 1978 Volkswagen camper bus. <br />
        </p>
      </div>
      <DialogStyled />
    </Card>
  );
};
