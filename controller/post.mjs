import * as postRepository from "../data/post.mjs";

// 전체 포스트 가져오기
export async function getPosts(req, res, next) {
  const userid = req.query.userid;
  const data = await (userid
    ? postRepository.getAllByUserid(userid)
    : postRepository.getAll());
  res.status(200).json(data);
}

// 특정 아이디에 대한 포스트 가져오기
export async function getPost(req, res, next) {
  const id = req.params.id;
  const post = await postRepository.getById(id);
  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
}

// 포스트 작성
export async function createPost(req, res, next) {
  const { userid, name, text } = req.body;
  const post = await postRepository.create(userid, name, text);
  res.status(201).json(post);
}

// 포스트 수정
export async function updatePost(req, res, next) {
  const id = req.params.id;
  const text = req.body.text;
  const post = await postRepository.update(id, text);
  if (post) {
    res.status(204).json(post);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
}

// 포스트 삭제
export async function deletePost(req, res, next) {
  const id = req.params.id;
  await postRepository.remove(id);
  res.sendStatus(204);
}
