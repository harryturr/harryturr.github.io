import { Card } from "ui-neumorphism";

export let EducationCard = () => {
  return (
    <>
      <h2 className="h2-cv">Education / Research </h2>
      <Card flat>
        <div style={{ padding: "15px" }}>
          <h3>
            02/2018–02/2020 |{" "}
            <span>
              <a target="_blank" href="https://www.mcgill.ca/">McGill University</a> | Montreal,
              Qc, Canada
            </span>
          </h3>

          <section>
            <b>Masters student</b> in the{" "}
            <a target="_blank" href="https://spm.physics.mcgill.ca/">Grütter SPM group</a> in
            the Department of Physics. <br />
            <b>GPA:</b> 4.0/4.0 <br />
            <ul>
              <li>
                Run low temperature, high vacuum experiments on home-built
                atomic force microscope.
                <li>Implement optical excitation of AFM cantilever</li>
                <li>
                  Convert AFM to open source hardware and software. source
                </li>
                <li>Synthesize self assembled monolayer molecule samples.</li>
                <li>
                  Work on python model for simulating single electron charging
                  events.
                </li>
                <li>
                  Model the back-action of electron tunneling on the dynamic of
                  AFM in python.
                </li>
              </li>

              <li>
                Present results at{" "}
                <a target="_blank" href="https://ncafm2018.aalto.fi/">NC-AFM 2018</a> and{" "}
                <a target="_blank" href="http://www.physik.ur.de/ncafm22/">NC-AFM 2019</a>.
              </li>
            </ul>
            <b>Publications:</b>{" "}
            <ul>
              <li>
                <i>
                  <a target="_blank" href="https://epjtechniquesandinstrumentation.springeropen.com/articles/10.1140/epjti/s40485-020-0053-9">
                    Optical excitation of atomic force microscopy cantilever for
                    accurate spectroscopic measurements
                  </a>
                </i>{" "}
                . Yoichi Miyahara & Harrisonn Griffin, Antoine Roy-Gobeil, Peter
                Grütter.
              </li>
            </ul>
            <b>Teaching/Other:</b>{" "}
            <ul>
              <li>Makerspace / 3D printing lab Manager</li>
              <li>TA Physics of Music</li>
            </ul>
          </section>
        </div>

        <div style={{ padding: "0px 15px 15px 15px" }}>
          <h3>
            08/2016–12/2016 |{" "}
            <span>
              <a target="_blank" href="https://www.concordia.ca/">Concordia University</a> |
              Montreal, Qc, Canada
            </span>
          </h3>

          <section>
            <b>Research Assistant</b> in the Champagne Group in the Department
            of Physics.
            <ul>
              <li>
                Designing and nanofabricating strain transistors out of single
                layer graphene.
              </li>

              <li>
                Mathematica model to simulate varying strain and magnetic field
                on suspended graphene devices.
              </li>
            </ul>
          </section>
        </div>

        <div style={{ padding: "0px 15px 15px 15px" }}>
          <h3>
            09/2012-06/2016 |{" "}
            <span>
              <a target="_blank" href="https://www.union.edu/">Union College</a> | Schenectady,
              NY, USA
            </span>
          </h3>

          <section>
            <b>BSc Phsyics</b> | Minor Mathematics <br />
            <b>GPA:</b> 3.84/4.0 <br />
            Summa Cum Laude, with Honors in Phsyics
            <ul>
              <li>
                Honors Thesis Project
                <li>
                  <i>Heat of Fusion of Primary Alcohol Confined in Nanopores</i>
                </li>
              </li>
              <li>
                Other research projects
                <li>Self ordered aluminum oxide nanopores</li>
                <li>Home-built optical tweezers for trapping microbeads</li>
              </li>
              <li>
                Present results at{" "}
                <a target="_blank" href="https://ncafm2018.aalto.fi/">NC-AFM 2018</a> and{" "}
                <a target="_blank" href="http://www.physik.ur.de/ncafm22/">NC-AFM 2019</a>.
              </li>
            </ul>
            <b>Teaching/Other:</b>{" "}
            <ul>
              <li>
                Teaching assistant in introductory mechanics and
                electromagnetism
              </li>
              <li>Work study in Physics Department</li>
            </ul>
          </section>
        </div>
      </Card>
    </>
  );
};
