import express from "express";
import * as postController from "../controller/post.mjs";

const router = express.Router();

// 전체 포스트 가져오기
// 특정 아이디에 대한 포스트 가져오기
// http://localhost:8080/post
// http://localhost:8080/post?userid=XXX
router.get("/", postController.getPosts);

// 글번호에 대한 포스트 가져오기
// http://localhost:8080/post/:id
router.get("/:id", postController.getPost);

// 포스트 작성
// http://localhost:8080/post
router.post("/", postController.createPost);

// 포스트 수정
// http://localhost:8080/post/:id
router.put("/:id", postController.updatePost);

// 포스트 삭제
// http://localhost:8080/post/:id
router.delete("/:id", postController.deletePost);

export default router;
