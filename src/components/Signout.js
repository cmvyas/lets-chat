import React from "react";
import { auth } from "../firebase";
import { Button } from "@material-ui/core";

function Signout() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        position: "fixed",
        width: "100%",
        backgroundColor: "#FAFAFA",
        top: 0,
        borderBottom: "solid 1px lightgray",
        zIndex: "10",
      }}
    >
      <div>
        <p
          style={{
            color: "#035397",
            textTransform: "uppercase",
            fontSize: "2vmin",
            borderRadius: "0",
            fontWeight: "600",
            letterSpacing: "2px",
          }}
        >
          humanify
        </p>
      </div>

      <div>
        <Button
          style={{
            backgroundColor: "#5089C6",
            padding: "20px",
            fontSize: "15px",
            borderRadius: "0",
            fontWeight: "600",
          }}
          onClick={() => auth.signOut()}
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
}

export default Signout;
