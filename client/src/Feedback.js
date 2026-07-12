import React from "react";

function Feedback() {
  return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Interview Feedback</h1>

                  <div
                          style={{
                                    width: "400px",
                                              margin: "20px auto",
                                                        padding: "20px",
                                                                  border: "1px solid #ddd",
                                                                            borderRadius: "10px",
                                                                                      boxShadow: "0 0 10px #ccc",
                                                                                              }}
                                                                                                    >
                                                                                                            <h3>Performance Report</h3>

                                                                                                                    <p>✔ Communication Skills : Good</p>
                                                                                                                            <p>✔ Technical Knowledge : Excellent</p>
                                                                                                                                    <p>✔ Problem Solving : Good</p>
                                                                                                                                            <p>✔ Confidence : Excellent</p>

                                                                                                                                                    <hr />

                                                                                                                                                            <h2 style={{ color: "green" }}>Overall Score : 8.5 / 10</h2>
                                                                                                                                                                  </div>
                                                                                                                                                                      </div>
                                                                                                                                                                        );
                                                                                                                                                                        }

                                                                                                                                                                        export default Feedback;