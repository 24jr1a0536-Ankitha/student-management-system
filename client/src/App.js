import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import ResumeAnalysis from "./ResumeAnalysis";
import Quiz from "./Quiz";
import MockInterview from "./MockInterview";
import Feedback from "./Feedback";

function App() {
return (
<BrowserRouter>
<Navbar />

<Routes>  
                    <Route path="/" element={<h1 style={{textAlign:"center",marginTop:"50px"}}>Home Page</h1>} />  
                                                  <Route path="/resume" element={<ResumeAnalysis />} />  
                                                                                        <Route path="/quiz" element={<Quiz />} />  
                                                                                                                                      <Route path="/mock" element={<MockInterview />} />  
                                                                                                                                                                                            <Route path="/feedback" element={<Feedback />} />  
                                                                                                                                                                                                                                                        </Routes>  
                                                                                                                                                                                                                                                                                                                        </BrowserRouter>  
                                                                                                                                                                                                                                                                                                                                                                                          );  
                                                                                                                                                                                                                                                                                                                                                                                                                                                            }  

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              export default App;