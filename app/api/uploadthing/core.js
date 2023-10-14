import { currentUser } from "@clerk/nextjs";
import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

const getUser = async () =>  await currentUser();

const ourFileRouter = {
  media: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(async (req) => {
      const user = await getUser();

    if (!user) throw new Error("Unauthorized");

      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.url);
    }),
};

module.exports = { ourFileRouter };
