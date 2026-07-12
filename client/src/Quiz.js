import React, { useState } from "react";

function Quiz() {
  const [score, setScore] = useState(null);

    const checkAnswer = () => {
        const answer = document.querySelector(
              'input[name="q1"]:checked'
                  );

                      if (!answer) {
                            alert("Please select an answer");
                                  return;
                                      }

                                          if (answer.value === "html") {
                                                setScore(1);
                                                    } else {
                                                          setScore(0);
                                                              }
                                                                };

                                                                  return (
                                                                      <div style={{ textAlign: "center", marginTop: "50px" }}>
                                                                            <h1>Technical Quiz</h1>

                                                                                  <h3>1. What does HTML stand for?</h3>

                                                                                        <label>
                                                                                                <input type="radio" name="q1" value="html" />
                                                                                                        Hyper Text Markup Language
                                                                                                              </label>

                                                                                                                    <br />
                                                                                                                          <br />

                                                                                                                                <label>
                                                                                                                                        <input type="radio" name="q1" value="wrong" />
                                                                                                                                                High Text Machine Language
                                                                                                                                                      </label>

                                                                                                                                                            <br />
                                                                                                                                                                  <br />

                                                                                                                                                                        <button onClick={checkAnswer}>
                                                                                                                                                                                Submit
                                                                                                                                                                                      </button>

                                                                                                                                                                                            {score !== null && (
                                                                                                                                                                                                    <div>
                                                                                                                                                                                                              <h2>Your Score: {score}/1</h2>

                                                                                                                                                                                                                        {score === 1 ? (
                                                                                                                                                                                                                                    <p style={{ color: "green" }}>
                                                                                                                                                                                                                                                  Excellent! Correct Answer.
                                                                                                                                                                                                                                                              </p>
                                                                                                                                                                                                                                                                        ) : (
                                                                                                                                                                                                                                                                                    <p style={{ color: "red" }}>
                                                                                                                                                                                                                                                                                                  Wrong Answer. Try Again.
                                                                                                                                                                                                                                                                                                              </p>
                                                                                                                                                                                                                                                                                                                        )}
                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                      )}
                                                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                                                                            export default Quiz;