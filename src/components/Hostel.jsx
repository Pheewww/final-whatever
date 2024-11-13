import React, { useState } from "react";

function Hostel() {
  const [IN, setIn] = useState(true);
  const [OUT, setOut] = useState(true);
  const [Leave, setLeave] = useState(true);
  const [defcolor, setColor] = useState("white");
  const [reg_no, setNumber] = useState("");
  const [user, setUser] = useState({
    username: "",
    year: "",
    branch: "",
  });

  function putData(e) {
    setNumber(e.target.value);
  }

  const PostData = async (e) => {
    e.preventDefault();
    const resp = await fetch("http://localhost:3000/users/api/entry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ reg_no }),
    });

    if (resp.ok) {
      const data1 = await resp.json();
      const { username, reg_no, year, branch } = data1;
      setUser({
        username: `${username}`,
        year: `${year}`,
        branch: `${branch}`,
      });

      setIn(false);
      setOut(false);
      setLeave(false);
      setColor("lightgreen");
    } else {
      const errorData = await resp.json();
      console.error(errorData.message);
    }
  };

  const senddata = async (e) => {
    const date = new Date();
    const timeOut = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const { username, year, branch } = user;
    const timein = "";
    const resp = await fetch("http://localhost:3000/out/api/outdetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        reg_no,
        year,
        branch,
        timeOut,
        timein,
      }),
    });

    if (resp.status !== 422) {
      window.alert("Entry made");
    }
  };

  const makeIn = async (e) => {
    const date = new Date();
    const timein = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const resp = await fetch("http://localhost:3000/out/api/indetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reg_no,
        timein,
      }),
    });

    if (resp.status !== 422) {
      window.alert("Entry made");
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50%",
          backgroundColor: "#f4f6f9",
        }}
      >
        <form
          style={{
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            width: "100%",
            maxWidth: "500px",
            textAlign: "center",
          }}
          onSubmit={PostData}
        >
          <h2 style={{ color: "#333", marginBottom: "20px", fontSize: "24px" }}>
            Hostel Entry System
          </h2>

          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                color: "#555",
                marginBottom: "5px",
              }}
            >
              Reg No:
            </label>
            <input
              type="text"
              value={reg_no}
              onChange={putData}
              placeholder="Enter your registration number"
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "16px",
              }}
              required
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                color: "#555",
                marginBottom: "5px",
              }}
            >
              Name:
            </label>
            <input
              type="text"
              value={user.username}
              placeholder="Your Name"
              disabled
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "16px",
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                color: "#555",
                marginBottom: "5px",
              }}
            >
              Year:
            </label>
            <input
              type="text"
              value={user.year}
              placeholder="Your Year"
              disabled
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "16px",
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                color: "#555",
                marginBottom: "5px",
              }}
            >
              Branch:
            </label>
            <input
              type="text"
              value={user.branch}
              placeholder="Your Branch"
              disabled
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "16px",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={!reg_no}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
              backgroundColor: "#3498db",
              color: "white",
              border: "none",
              transition: "all 0.3s ease",
            }}
          >
            Verify
          </button>
        </form>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <button
            style={{
              padding: "12px",
              borderRadius: "8px",
              backgroundColor: defcolor,
              color: "#333",
              border: "1px solid #ccc",
              fontSize: "16px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            disabled={IN}
            onClick={makeIn}
          >
            IN
          </button>
          <button
            style={{
              padding: "12px",
              borderRadius: "8px",
              backgroundColor: defcolor,
              color: "#333",
              border: "1px solid #ccc",
              fontSize: "16px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            disabled={OUT}
            onClick={senddata}
          >
            OUT
          </button>
          <button
            style={{
              padding: "12px",
              borderRadius: "8px",
              backgroundColor: defcolor,
              color: "#333",
              border: "1px solid #ccc",
              fontSize: "16px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            disabled={Leave}
          >
            LEAVE
          </button>
        </div>
      </div>
    </>
  );
}

export default Hostel;
