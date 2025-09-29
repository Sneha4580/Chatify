import express from "express";
import { exp } from "three/examples/jsm/nodes/Nodes.js";


const router = express.Router();

router.get("/signup", (req, res)=>{
  res.send("Signup endpoint");
});

router.get("/login", (req, res)=>{
  res.send("Login endpoint");
});

router.get("/logout", (req, res)=>{
  res.send("Logout endpoint");
});

export default router;