import { Card, Dialog, Button } from "ui-neumorphism";
import React, { useState } from "react";
import vw from "./vw.png";

export let DialogStyled = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div style={{ marginTop: "10px" }}>
      <Button rounded onClick={() => setVisible(true)}>
        (check it out here!)
      </Button>
      <Dialog
        minWidth={300}
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <Card className="VW-Outer">
          <img src={vw} alt="volkswagen" className="VW" />
          <Button onClick={() => setVisible(false)}>close</Button>
        </Card>
      </Dialog>
    </div>
  );
};
