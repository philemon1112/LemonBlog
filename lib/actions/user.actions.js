"use server"
import Post from "../models/post.model";
import User from "../models/user.model";
const { connectToDB } = require("../mongoose");

export async function updateUser({ userId, bio, name, path, username, image }) {
    try {
      connectToDB();
  
      await User.findOneAndUpdate(
        { id: userId },
        {
          username: username.toLowerCase(),
          name,
          bio,
          image,
          onboarded: true,
        },
        { upsert: true }
      );
  
      if (path === "/profile/edit") {
        revalidatePath(path);
      }
    } catch (error) {
      throw new Error(`Failed to create/update user: ${error.message}`);
    }
  }

  export async function fetchUser(userId) {
    try {
      connectToDB();
  
      return await User.findOne({ id: userId })
      // .populate({
      //   path: "communities",
      //   model: Post,
      // });
    } catch (error) {
      throw new Error(`Failed to fetch user: ${error.message}`);
    }
  }

  export async function fetchUserPosts(userId) {
    try {
      connectToDB();
  
      // Find all threads authored by the user with the given userId
      const posts = await User.findOne({ id: userId }).populate({
        path: "posts",
        model: Post,
      });
      return posts;
    } catch (error) {
      console.error("Error fetching user threads:", error);
      throw error;
    }
  }