import { Card } from "ui-neumorphism";
import octocat from "./octocat.png";

export let Github = () => {
    return (
      <Card style={{ textAlign: "left", padding: "10px" }}>
        <div style={{ width: "100%" }}></div>
        <div>
          <p>
            <a href="https://github.com/harryturr">
              <img src={octocat} className="Github" alt="github_octocat"/>
            </a>{" "}
            Check out my <a href="https://github.com/harryturr">GitHub</a> to see
            more about me! <br /> <br />
            My open source contributions have been in{" "}
            <a href="https://github.com/plotly/Dash">Plotly Dash</a> and it's
            other core repos.
          </p>
        </div>
      </Card>
    );
  };