import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/user.model.js"
import Product from "./models/product.model.js";
import connectDB from "./config/db.js";

process.loadEnvFile();
connectDB();

