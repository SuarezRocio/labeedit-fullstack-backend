import express from "express"
import { CommentBusiness } from "../business/CommentBusiness"
import { CommentController } from "../controller/CommentController"
import { CommentDatabase } from "../database/CommentDatabase"
import { IdGenerator } from "../services/IdGenerator"
import { TokenManager } from "../services/TokenManager"

export const commentRouter = express.Router()

const commentController = new CommentController(
    new CommentBusiness(
        new CommentDatabase(),
        new IdGenerator(),
        new TokenManager()
    )
)

//POST /post/{id}/comment
commentRouter.get("/", commentController.getComment)
commentRouter.post("/", commentController.createComment)
commentRouter.get("/:id", commentController.getCommentsByPostId)

commentRouter.put("/:id", commentController.editComment)
commentRouter.delete("/:id", commentController.deleteComment)

commentRouter.put("/:id/like", commentController.likeOrDislikeComment)