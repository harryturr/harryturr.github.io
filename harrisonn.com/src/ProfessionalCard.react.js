import { Card } from "ui-neumorphism";

export let ProfessionalCard = () => {
  return (
    <>
      <h2 className="h2-cv">Professional</h2>

      <Card flat>
        <div style={{ padding: "15px" }}>
          <h3>
            11/2021–Present |{" "}
            <span>
              <a target="_blank" href="https://www.sonder.com/">
                Sonder
              </a>{" "}
              | Montreal, Qc, Canada
            </span>
          </h3>

          <section>
            <b>Fullstack Software Developer</b>
            <ul>
              {/* <li> */}
              Fullstack developer at Sonder (a tech-forward hospitality company)
              in the Marketplace Core team. We are primarily responsible for
              managing and optimizing resource allocation to maximize
              availability which is key to business operations. Supporting and
              bulding features in key microservices.
              <br />
              <br />
              <li>
                Optimizations of room allocation and availability.
                <li>
                  Optimize shuffling bookings that increase inventory
                  availability across an entire calendar. Improve speed by 4:1,
                  increase confidence levels in service.
                </li>
                <li>
                  Optimize one-off booking allocation. Increase speed by 20:1
                  while also being more accurate and better tested.
                </li>
              </li>
              <li>
                Individual Contributor to corporate bookings tool.
                <li>
                  Implement majority of the frontend service (React/Typescript)
                  and user flows with extensive unit and integration testing.
                </li>
                <li> Work on legacy Ruby on Rails backend.</li>
                <li> Communicate with stakeholders and designers.</li>
              </li>
              <li>
                Other notable work.
                <li>
                  {" "}
                  Implement new and improve existing apis for inter and intra
                  team use.
                </li>
                <li>
                  {" "}
                  Build auditing tools to ensure health and validity of our
                  data.
                </li>
                <li>
                  {" "}
                  Actively participate in reviewing pull requests and sprint
                  planning.
                </li>
              </li>
              {/* </li> */}
              <li>
                Tech/Stack: Typescript, Python, React, MaterialUI, Ruby on
                Rails, Node, GraphQL, Pandas, Numpy, Kubernetes, Docker,
                Cypress, CircleCI, Git, Asana.
              </li>
            </ul>
          </section>
        </div>

        <div style={{ padding: "15px" }}>
          <h3>
            03/2020–05/2021 |{" "}
            <span>
              <a target="_blank" href="https://plotly.com/">
                Plotly
              </a>{" "}
              | Montreal, Qc, Canada
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
                Release Manager and Individual Contributor for Dash open source
                repos.
                <li>
                  <a target="_blank" href="https://github.com/plotly/dash">
                    Dash
                  </a>{" "}
                  |{" "}
                  <a
                    target="_blank"
                    href="https://github.com/plotly/dash-renderer"
                  >
                    Dash-Renderer
                  </a>{" "}
                  |{" "}
                  <a
                    target="_blank"
                    href="https://github.com/plotly/dash-core-components"
                  >
                    Dash-Core-Components
                  </a>{" "}
                  |{" "}
                  <a
                    target="_blank"
                    href="https://github.com/plotly/dash-html-components"
                  >
                    Dash-HTML-Components
                  </a>{" "}
                  |{" "}
                  <a
                    target="_blank"
                    href="https://github.com/plotly/dash-table"
                  >
                    Dash-Table
                  </a>
                </li>
              </li>
              <li>
                Champion of{" "}
                <a
                  target="_blank"
                  href="https://dash.plotly.com/integrating-dash"
                >
                  Dash Embedded
                </a>{" "}
                enterprise feature.
                <li>
                  Interact with customers to develop specific requested features
                </li>
                <li>Troubleshoot issues with customer success team</li>
                <li>Review pull requests in feature repo.</li>
              </li>
            </ul>
          </section>
        </div>

        <div style={{ padding: "0px 15px 15px 15px" }}>
          <h3>
            04/2017–02/2018 |{" "}
            <span>
              <a target="_blank" href="https://globalfoundries.com/">
                GLOBALFOUNDRIES
              </a>{" "}
              | Albany, NY, USA
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
