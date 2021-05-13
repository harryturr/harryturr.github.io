import { Card } from "ui-neumorphism";

export let ProfessionalCard = () => {
  return (
    <>
      <h2 className="h2-cv">Professional</h2>

      <Card inset>
        <div style={{ padding: "15px" }}>
          <h3>
            03/2020–05/2021 |{" "}
            <span>
              <a href="https://plotly.com/">Plotly</a> | Montreal, Qc, Canada
            </span>
          </h3>

          <section>
            <b>Software Developer</b>
            <ul>
              <li>
                Individual Contributor in team implementing live
                metrics/monitoring to enterprise platform.
                <li>React, python3, Docker, GraphQL, Postgres, UI/UX</li>
              </li>
              <li>
                Release Manager for Dash open source repos.
                <li>
                  <a href="https://github.com/plotly/dash">Dash</a> |{" "}
                  <a href="https://github.com/plotly/dash-renderer">
                    Dash-Renderer
                  </a>{" "}
                  |{" "}
                  <a href="https://github.com/plotly/dash-core-components">
                    Dash-Core-Components
                  </a>{" "}
                  |{" "}
                  <a href="https://github.com/plotly/dash-html-components">
                    Dash-HTML-Components
                  </a>{" "}
                  |{" "}
                  <a href="https://github.com/plotly/dash-table">Dash-Table</a>
                </li>
              </li>
              <li>
                Champion of{" "}
                <a href="https://dash.plotly.com/integrating-dash">
                  Dash Embedded
                </a>{" "}
                enterprise features.
                <li>
                  Interact with customers to develop specific requested features
                </li>
                <li>Troubleshoot issues with customer success team</li>
                <li>Review pull requests</li>
              </li>
            </ul>
          </section>
        </div>

        <div style={{ padding: "0px 15px 15px 15px" }}>
          <h3>
            04/2017–02/2018 |{" "}
            <span>
              <a href="https://globalfoundries.com/">GLOBALFOUNDRIES</a> |
              Albany, NY, USA
            </span>
          </h3>

          <section>
            <b>Process/Defect Engineer</b>
            <ul>
              <li>
                Train and manage machine learning algorithms and recipes for
                automatic defect mage-based classification.
              </li>
              <li>
                Work with Process Integration and Advance Module Engineering
                teams to improve capture rate of defects of interest.
              </li>
              <li>Optimize recipes to increase throughput.</li>
            </ul>
          </section>
        </div>
      </Card>
    </>
  );
};
