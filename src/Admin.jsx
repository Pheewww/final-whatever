import React, { useState } from "react";

function Admin() {
  const [sampleData, setSampleData] = useState([
    {
      id: 1,
      regId: "21382",
      name: "Rahul Sharma",
      branch: "EnTC",
      visitor: "Mr. Sharma",
      reason: "Family Visit",
      date: "2023-10-01",
    },
    {
      id: 2,
      regId: "21382",
      name: "Priya Singh",
      branch: "EnTC",
      visitor: "Mrs. Singh",
      reason: "Parent Meeting",
      date: "2023-10-02",
    },
    {
      id: 3,
      regId: "21382",
      name: "Amit Patel",
      branch: "EnTC",
      visitor: "Mr. Patel",
      reason: "Friend Visit",
      date: "2023-10-03",
    },
  ]);

  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleRequestClick = (request) => {
    setSelectedRequest(request);
  };

  const handleAccept = () => {
    alert(`Accepted request for ${selectedRequest.visitor}`);
    setSampleData(sampleData.filter((req) => req.id !== selectedRequest.id));
    setSelectedRequest(null);
  };

  const handleDeny = () => {
    alert(`Denied request for ${selectedRequest.visitor}`);
    setSampleData(sampleData.filter((req) => req.id !== selectedRequest.id));
    setSelectedRequest(null);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Admin Page</h1>
      <h2 style={styles.subtitle}>Visitor Requests</h2>
      <ul style={styles.list}>
        {sampleData.map((request) => (
          <li
            key={request.id}
            style={styles.listItem}
            onClick={() => handleRequestClick(request)}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#e0e0e0")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#fff")
            }
          >
            {request.visitor} - {request.date}
          </li>
        ))}
      </ul>
      {selectedRequest && (
        <div style={styles.details}>
          <h3>Request Details</h3>
          <p>
            <strong>Reg ID:</strong> {selectedRequest.regId}
          </p>
          <p>
            <strong>Name:</strong> {selectedRequest.name}
          </p>
          <p>
            <strong>Branch:</strong> {selectedRequest.branch}
          </p>
          <p>
            <strong>Reason:</strong> {selectedRequest.reason}
          </p>
          <p>
            <strong>Date:</strong> {selectedRequest.date}
          </p>
          <div style={styles.buttonContainer}>
            <button style={styles.acceptButton} onClick={handleAccept}>
              Accept
            </button>
            <button style={styles.denyButton} onClick={handleDeny}>
              Deny
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
  },
  title: {
    textAlign: "center",
    color: "#333",
    marginBottom: "10px",
  },
  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: "20px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    padding: "15px",
    borderBottom: "1px solid #ddd",
    cursor: "pointer",
    transition: "background-color 0.3s",
    borderRadius: "4px",
    backgroundColor: "#fff",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  details: {
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
  },
  buttonContainer: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
  },
  acceptButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    flex: "1",
    marginRight: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s",
  },
  denyButton: {
    backgroundColor: "#f44336",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    flex: "1",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s",
  },
};

export default Admin;
