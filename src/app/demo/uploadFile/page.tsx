import { uploadPostImage } from "@/utils/helper";
import React from "react";

let url: string | null;

export const uploadImage = async (formData: FormData) => {
  "use server";
  const file = formData.get("image") as File | undefined;
  const image_url = await uploadPostImage(file);
  url = image_url;
};

const UploadFile = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center">
        <form action={uploadImage}>
          <input type="file" name="image" id="image" placeholder="Image" />
          <button type="submit">Upload</button>
        </form>
        <img
          src={url || ""}
          alt=""
          className="w-40 h-40 rounded-2xl p-3 bg-red-500"
        />
      </main>
    </React.Fragment>
  );
};

export default UploadFile;
