import React, { useState } from "react";
import { Button, Input } from "@material-ui/core";
import { db, auth } from "../firebase";
import firebase from "firebase";

function SendMessages({ scroll }) {
  const [msg, setMsg] = useState("");
  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await db.collection("messages").add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className='card'>
      <div>
        <form onSubmit={sendMessage}>
          <div className='sendmsginput'>
            <Input
              required
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder='Type a message'
            />
            <Button
              style={{
                color: "white",
                textTransform: "uppercase",
                fontSize: "2vmin",
                borderRadius: "20px",
                fontWeight: "400",
                letterSpacing: "2px",
                backgroundColor: "#035397",
                marginLeft: "20px",
              }}
              type='submit'
            >
              SEND
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SendMessages;
