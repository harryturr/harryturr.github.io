import "./App.css";
import React, { useState } from "react";

import { Button, Card } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import { Contact } from "./Contact.react";
import { About } from "./About.react";
import { Github } from "./Github.react";
import { Resume } from "./Resume.react";

let ContentDiv = (props) => {
  if (props.clicked === "about") {
    return <About />;
  } else if (props.clicked === "contact") {
    return <Contact />;
  } else if (props.clicked === "resume") {
    return <Resume />;
  } else if (props.clicked === "github") {
    return <Github />;
  }
  return <Card>{props.clicked}</Card>;
};

function App() {
  const [clicked, setClicked] = useState("about");

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ paddingTop: "50px", paddingBottom: "25px" }}>
          Harrisonn Griffin
        </h1>
        <div>
          {["about", "resume", "contact", "github"].map((i) => {
            return (
              <Button
                key={i}
                text={clicked === i ? true : false}
                onClick={() => setClicked(i)}
              >
                {i}
              </Button>
            );
          })}
        </div>
      </header>
      <div className="Content">
        <Card>
          <ContentDiv clicked={clicked} />
        </Card>
      </div>
    </div>
  );
}

export default App;
