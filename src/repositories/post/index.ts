import { JsonPostRepository } from "./json-post-repository";
import { PostRepository } from "./repository";

export const postRepository: PostRepository = new JsonPostRepository()