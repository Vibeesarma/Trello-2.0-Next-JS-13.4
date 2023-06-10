import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    process.env.NEXT_PUBLIC_BUCKET_ID!,
    ID.unique(),
    file
  );
  console.log("🚀 ~ file: uploadImage.ts:11 ~ uploadImage ~ fileUploaded:", fileUploaded)

  return fileUploaded;
};

export default uploadImage;
