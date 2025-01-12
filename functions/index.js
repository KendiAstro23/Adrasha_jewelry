process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

process.on("uncaughtException", (err, origin) => {
  console.error("Uncaught Exception:", err);
  process.exit(1); // Exit the process with failure code
});

if (process.env.NODE_ENV !== "production") {
  setInterval(() => {
    const memoryUsage = process.memoryUsage();
    console.log(`Memory Usage: ${(memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`);
  }, 10000); // Log memory usage every 10 seconds
}

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

// CORS configuration
app.use(cors({ origin: true }));
// Middleware for parsing JSON and serving static files
app.use(express.json());
app.use("/images", express.static(path.resolve(__dirname, "images")));

const products = [
  { id: "101", name: "Silver Necklace", imageUrl: "/images/neck2.jpg", price: 200,
    description: "A classic silver necklace.", madeOn: "2023-01-01", materials: "Gold", bestFor: "Weddings" },
  { id: "102", name: "Gold Pendant Necklace", imageUrl: "/images/neck3.jpg", price: 200,
    description: "A charming gold pendant necklace.", madeOn: "2023-01-01", materials: "Gold", bestFor: "Weddings" },
  { id: "103", name: "Silver Necklace", imageUrl: "/images/neck4.jpg", price: 200,
    description: "A classic silver necklace.", madeOn: "2023-01-01", materials: "Gold", bestFor: "Weddings" },
  { id: "104", name: "Gold Pendant Necklace", imageUrl: "/images/neck5.jpg", price: 200,
    description: "A charming gold pendant necklace.", madeOn: "2023-01-01", materials: "Gold", bestFor: "Weddings" },
  { id: "201", name: "Silver Necklace", imageUrl: "/images/ear2.jpg", price: 200,
    description: "A classic silver necklace.", madeOn: "2023-01-01", materials: "Gold", bestFor: "Weddings" },
  { id: "202", name: "Gold Pendant Necklace", imageUrl: "/images/ear3.jpg", price: 200,
    description: "A charming gold pendant necklace.", madeOn: "2023-01-01", materials: "Gold", bestFor: "Weddings" },
  { id: "203", name: "Silver Necklace", imageUrl: "/images/ear4.jpg", price: 200,
    description: "A classic silver necklace.", madeOn: "2023-01-01", materials: "Gold", bestFor: "Weddings" },
  { id: "204", name: "Gold Pendant Necklace", imageUrl: "/images/ear5.jpg", price: 200,
    description: "A charming gold pendant necklace.", madeOn: "2023-01-01", materials: "Gold", bestFor: "Weddings" },
  { id: "301", name: "Gold Necklace", imageUrl: "/images/comb2.jpg", price: 200,
    description: "Beautiful gold necklace.", madeOn: "2023-01-01", materials: "Gold", bestFor: "Weddings" },
  { id: "302", name: "Silver Bracelet", imageUrl: "/images/comb3.jpg", price: 100,
    description: "Elegant silver bracelet.", madeOn: "2023-02-01", materials: "Silver", bestFor: "Parties" },
  { id: "303", name: "Silver Necklace", imageUrl: "/images/comb4.jpg", price: 200,
    description: "A classic silver necklace.", madeOn: "2023-02-01", materials: "Silver", bestFor: "Parties" },
  { id: "304", name: "Gold Pendant Necklace", imageUrl: "/images/comb5.jpg", price: 200,
    description: "A charming gold pendant necklace.", madeOn: "2023-02-01", materials: "Silver", bestFor: "Parties" },
  { id: "401", name: "Gold Pendant Necklace", imageUrl: "/images/brace2.jpg", price: 200,
    description: "A charming gold pendant necklace.", madeOn: "2023-02-01", materials: "Silver", bestFor: "Parties" },
  { id: "402", name: "Gold Pendant Necklace", imageUrl: "/images/brace2.jpg", price: 200,
    description: "A charming gold pendant necklace.", madeOn: "2023-02-01", materials: "Silver", bestFor: "Parties" },
  { id: "403", name: "Gold Pendant Necklace", imageUrl: "/images/brace3.jpg", price: 200,
    description: "A charming gold pendant necklace.", madeOn: "2023-02-01", materials: "Silver", bestFor: "Parties" },
  { id: "404", name: "Gold Pendant Necklace", imageUrl: "/images/brace4.jpg", price: 200,
    description: "A charming gold pendant necklace.", madeOn: "2023-02-01", materials: "Silver", bestFor: "Parties" },
  { id: "405", name: "Gold Pendant Necklace", imageUrl: "/images/brace5.jpg", price: 200,
    description: "A charming gold pendant necklace.", madeOn: "2023-02-01", materials: "Silver", bestFor: "Parties" },
  { id: "501", name: "Gold Pendant Necklace", imageUrl: "/images/afgo2.jpg", price: 200,
    description: "A charming gold pendant necklace.", madeOn: "2023-02-01", materials: "Silver", bestFor: "Parties" },
  { id: "502", name: "Gold Pendant Necklace", imageUrl: "/images/afgo3.jpg", price: 200,
    description: "A charming gold pendant necklace.", madeOn: "2023-02-01", materials: "Silver", bestFor: "Parties" },
  { id: "503", name: "Gold Pendant Necklace", imageUrl: "/images/afgo4.jpg", price: 200,
    description: "A charming gold pendant necklace.", madeOn: "2023-02-01", materials: "Silver", bestFor: "Parties" },
  { id: "504", name: "Gold Pendant Necklace", imageUrl: "/images/afgo5.jpg", price: 200,
    description: "A charming gold pendant necklace.", madeOn: "2023-02-01", materials: "Silver", bestFor: "Parties" },
  { id: "601", name: "Gold Pendant Necklace", imageUrl: "/images/ank2.jpg", price: 200,
    description: "A charming gold pendant necklace.", madeOn: "2023-02-01", materials: "Silver", bestFor: "Parties" },
  { id: "602", name: "Gold Pendant Necklace", imageUrl: "/images/ank3.jpg", price: 200,
    description: "A charming gold pendant necklace.", madeOn: "2023-02-01", materials: "Silver", bestFor: "Parties" },
  { id: "603", name: "Gold Pendant Necklace", imageUrl: "/images/ank4.jpg", price: 200,
    description: "A charming gold pendant necklace.", madeOn: "2023-02-01", materials: "Silver", bestFor: "Parties" },
  { id: "604", name: "Gold Pendant Necklace", imageUrl: "/images/ank5.jpg", price: 200,
    description: "A charming gold pendant necklace.", madeOn: "2023-02-01", materials: "Silver", bestFor: "Parties" },
];
// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Products API");
});
// Get all products
app.get("/api/products", (req, res) => {
  res.json(products);
});
// Get a specific product by ID
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send("Product not found");
  }
});

// Add a log to indicate which port the app is running on
const PORT = process.env.PORT || 8080;
console.log(`App is configured to listen on port ${PORT}`);

// Export the app as a Firebase Cloud Function
exports.api = functions.https.onRequest(app);
