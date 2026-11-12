
const express = require("express");
const mongoose = require("mongoose");
const rootRoute = require("./routes/indexRoute");
const cors = require("cors");
const loggingMiddleware = require("./middlewares/loggingMiddleware");
const errorHandler = require("./middlewares/test.middleware");

require("dotenv").config();

const app = express();

// 1. Configure CORS first
const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://divineft-steel.vercel.app",
    "https://www.divineconceptinvestments.com",
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization",
  ],
};

app.use(cors(corsOptions));

// 2. Middleware
app.use(loggingMiddleware);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 3. Routes
app.use("/api/v1", rootRoute);

// 4. Error handler (after routes)
app.use(errorHandler);

// 5. Database connection
mongoose
  .connect(process.env.MONGODB_URI, {
    family: 4,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.log("Error connecting to the database:", error);
  });

// 6. Start server
const port = process.env.PORT || 5200;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
