const express = require("express");
// const Comment = require("../models/comments");
const commentRouter = express.Router();

commentRouter.get("/", async (req, res) => {
    try {
        const comments = await Comment.find();
        res.send(comments);
    } catch (error) {
        res.status(400).send("Error: " + error.message);
    }
});

commentRouter.post("/", async (req, res) => {
    try {
        const newComment = new Comment(req.body);
        await newComment.save();
        res.status(201).send("Comment created successfully");
    } catch (error) {
        res.status(400).send("Error: " + error.message);
    }
});

commentRouter.delete("/:id", async (req, res) => {
    try {
        const result = await Comment.findByIdAndDelete(req.params.id);
        res.send("Deleted: " + result);
    } catch (error) {
        res.status(400).send("Error: " + error.message);
    }
});

commentRouter.patch("/:id", async (req, res) => {
    try {
        const result = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send("Updated: " + result);
    } catch (error) {
        res.status(400).send("Error: " + error.message);
    }
});

module.exports = commentRouter;