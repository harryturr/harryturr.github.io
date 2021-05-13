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
    <Card flat style={{ textAlign: "left", padding: "10px" }}>
      <div style={{ width: "100%" }}>
        <p>
          Enjoy working in teams where I can challenge myself, learn new tech,
          and continue to grow as a developer.
          <br />
          <br />
          I'm not afraid to get my hands dirty and try new things.
          <br />
          <br />
          Happy to speak about new and exciting opportunities! <br /> <br />
          <StyledCard
            href="mailto:griffin.harrisonn@gmail.com"
            text="griffin.harrisonn (@) gmail.com"
          />{" "}
          <br />
          <StyledCard
            target="_blank" href="https://www.linkedin.com/in/harrisonngriffin/"
            text="/in/harrisonngriffin"
          />{" "}
          <br />
          <StyledCard href="tel:518-338-5598" text="518 338 5598" />
        </p>
      </div>
    </Card>
  );
};
