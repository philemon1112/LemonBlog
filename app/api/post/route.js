import Post from "@/lib/models/post.model";
import User from "@/lib/models/user.model";
import { connectToDB } from "@/lib/mongoose";
import { NextResponse } from "next/server";

export const GET = async () => {
    connectToDB()
    try {
      const post = await Post.find()
        .sort({ createdAt: "desc" })
        .populate({
        path: "author",
        model: User,
        });
  
      return new NextResponse(JSON.stringify(post, { status: 200 }));
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
      );
    }
  };