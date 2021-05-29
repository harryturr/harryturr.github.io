import { Card } from "ui-neumorphism";

export let SkillsCard = () => {
  return (
    <>
      <h2 className="h2-cv">Skills / Other</h2>
      <Card flat>
        <div style={{ padding: "15px" }}>
          <h3>Programming</h3>

          <section>
            <b>Front End:</b>
            <ul>
              <li>React, Javascript, HTML, CSS, Selenium</li>
            </ul>

            <b>Back End:</b>
            <ul>
              <li>Python, GraphQL, Docker </li>
            </ul>

            <b>Misc</b>
            <ul>
              <li>GNU/Linux, git workflow, CI workflow </li>
            </ul>
          </section>

          <h3>Language</h3>

          <section>
            <b>English:</b> native <br />
            <b>French:</b> A1
          </section>

          <h3>Interests</h3>

          <section>
            <b>Sports:</b>
            <ul>
              <li>Cycling, Nordic Skiing, Hiking </li>
            </ul>
            <b>Hobbies:</b>
            <ul>
              <li>Camping, Canoeing, Vintage VWs, Bike Maintenance, Birding</li>
            </ul>
          </section>
        </div>
      </Card>
    </>
  );
};
