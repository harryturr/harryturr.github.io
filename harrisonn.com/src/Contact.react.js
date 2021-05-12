import { Card } from "ui-neumorphism";

let StyledCard = (props) => {
  return (
    <Card
      inset
      elevation={1}
      style={{
        fontSize: "1.25rem",
        width: "fit-content",
        padding: "5px",
      }}
    >
      <a href={props.href}>{props.text}</a>
    </Card>
  );
};

export let Contact = () => {
  return (
    <Card style={{ textAlign: "left", padding: "10px" }}>
      <div style={{ width: "100%" }}>
        <p>
          I'm currently searching for job opportunities! <br />
          <br />
          I'm looking for a team where I can challenge myself, learn new tech,
          and continue to grow as a developer.
          <br />
          <br />
          I'm not afraid to get my hands dirty and try new things.
          <br />
          <br />
          If you think I'd be a good fit, please reach out! <br /> <br />
          <StyledCard
            href="mailto:griffin.harrisonn@gmail.com"
            text="griffin.harrisonn (@) gmail.com"
          />{" "}
          <br />
          <StyledCard
            href="https://www.linkedin.com/in/harrisonngriffin/"
            text="/in/harrisonngriffin"
          />{" "}
          <br />
          <StyledCard href="tel:518-338-5598" text="518 338 5598" />
        </p>
      </div>
    </Card>
  );
};
