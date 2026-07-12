import React, { useState } from "react";

function MockInterview() {
  const [showQuestions, setShowQuestions] = useState(false);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
              <h1>Mock Interview</h1>

                    <button
                            onClick={() => setShowQuestions(true)}
                                    style={{
                                              padding: "10px 20px",
                                                        backgroundColor: "#2563eb",
                                                                  color: "white",
                                                                            border: "none",
                                                                                      borderRadius: "5px",
                                                                                                cursor: "pointer"
                                                                                                        }}
                                                                                                              >
                                                                                                                      Start Interview
                                                                                                                            </button>

                                                                                                                                  {showQuestions && (
                                                                                                                                          <div style={{ marginTop: "20px", textAlign: "left", display: "inline-block" }}>
                                                                                                                                                    <h3>Interview Questions</h3>

                                                                                                                                                              <ol>
                                                                                                                                                                          <li>Tell me about yourself.</li>
                                                                                                                                                                                      <li>What is HTML?</li>
                                                                                                                                                                                                  <li>What is CSS?</li>
                                                                                                                                                                                                              <li>What is React?</li>
                                                                                                                                                                                                                          <li>Why should we hire you?</li>
                                                                                                                                                                                                                                    </ol>
                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                  )}
                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                        export default MockInterview;