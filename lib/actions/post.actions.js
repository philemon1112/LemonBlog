"use server";
import Post from "../models/post.model";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";

export async function createPost({ author, title, category, tags, image, description, slug, path }) {
    try {
        connectToDB();
        const createdPost = await Post.create({
          title,
          author,
          category,
          tags,
          image,
          description,
          slug
        });
    
        await User.findByIdAndUpdate(author, {
            $push: { posts: createdPost._id },
            });

        if (path === "/profile/edit") {
            revalidatePath(path);
          }
      } catch (error) {
        throw new Error(`Failed to create post: ${error.message}`);
      }
}

export async function fetchPosts(pageNumber = 1, pageSize = 20) {
  connectToDB();

  // Calculate the number of posts to skip based on the page number and page size.
  const skipAmount = (pageNumber - 1) * pageSize;

  // Create a query to fetch the posts that have no parent (top-level threads) (a thread that is not a comment/reply).
  const postsQuery = Post.find()
    .sort({ createdAt: "desc" })
    .skip(skipAmount)
    .limit(pageSize)
    .populate({
      path: "author",
      model: User,
    });

  // Count the total number of top-level posts (threads) i.e., threads that are not comments.
  const totalPostsCount = await Post.countDocuments(); // Get the total count of posts

  const posts = await postsQuery.exec();

  const isNext = totalPostsCount > skipAmount + posts.length;

  return { posts, isNext };
}

export async function fetchPostById(postId) {
  connectToDB();

  try {
    const post = await Post.findById(postId)
      .populate({
        path: "author",
        model: User,
        select: "_id id name image",
      }) // Populate the author field with _id and username
      .exec();

    return post;
  } catch (err) {
    console.error("Error while fetching thread:", err);
    throw new Error("Unable to fetch thread");
  }
}

export async function updatePost({ author, title, category, tags, image, description, postId, slug, path }) {
  try {
    connectToDB();

    await Post.findOneAndUpdate(
      { _id: postId },
      {
        title,
        author,
        category,
        tags,
        image,
        description,
        slug
      },
      { upsert: true }
    );

    if (path === "/edit") {
      revalidatePath(path);
    }
  } catch (error) {
    throw new Error(`Failed to update post: ${error.message}`);
  }
}

export async function deletePost({postId}){

  try {
    connectToDB();

    await Post.deleteOne({ _id: postId });
  } catch (error) {
    throw new Error(`Failed to delete post: ${error.message}`);
  }
}
