const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();

app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
  });

  app.post("/upload", upload.single("resume"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({
              message: "No file uploaded",
                  });
                    }

                      res.json({
                          message: "Resume uploaded successfully!",
                              fileName: req.file.originalname,
                                  fileSize: req.file.size,
                                    });
                                    });

                                    const PORT = 5000;

                                    app.listen(PORT, () => {
                                      console.log(`Server is running on port ${PORT}`);
                                      });