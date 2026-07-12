import React, { useState } from "react";
import axios from "axios";

function ResumeAnalysis() {
  const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");

      const handleFileChange = (e) => {
          setFile(e.target.files[0]);
            };

              const handleUpload = async () => {
                  if (!file) {
                        alert("Please select a resume!");
                              return;
                                  }

                                      const formData = new FormData();
                                          formData.append("resume", file);

                                              try {
                                                    const res = await axios.post(
                                                            "http://localhost:5000/upload",
                                                                    formData
                                                                          );

                                                                                setMessage(res.data.message);
                                                                                    } catch (error) {
                                                                                          console.log(error);
                                                                                                setMessage("Upload Failed!");
                                                                                                    }
                                                                                                      };

                                                                                                        return (
                                                                                                            <div style={{ textAlign: "center", marginTop: "50px" }}>
                                                                                                                  <h1>Resume Analysis</h1>

                                                                                                                        <input
                                                                                                                                type="file"
                                                                                                                                        onChange={handleFileChange}
                                                                                                                                              />

                                                                                                                                                    <br />
                                                                                                                                                          <br />

                                                                                                                                                                <button onClick={handleUpload}>
                                                                                                                                                                        Analyze Resume
                                                                                                                                                                              </button>

                                                                                                                                                                                    <h3>{message}</h3>
                                                                                                                                                                                        </div>
                                                                                                                                                                                          );
                                                                                                                                                                                          }

                                                                                                                                                                                          export default ResumeAnalysis;