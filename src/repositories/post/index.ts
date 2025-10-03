import { DrizzlePostRepository } from "./drizzle-post-repository";
import { PostRepository } from "./repository";

export const postRepository: PostRepository = new DrizzlePostRepository()