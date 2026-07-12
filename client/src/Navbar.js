import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
      <nav className="navbar">
            <h2 className="logo">AI Interview Prep</h2>

                  <div className="nav-links">
                          <Link to="/">Home</Link>
                                  <Link to="/resume">Resume</Link>
                                          <Link to="/quiz">Quiz</Link>
                                                  <Link to="/mock">Mock Interview</Link>
                                                          <Link to="/feedback">Feedback</Link>
                                                                </div>
                                                                    </nav>
                                                                      );
                                                                      }

                                                                      export default Navbar;