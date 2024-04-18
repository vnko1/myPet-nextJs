import { UploadApiOptions, v2 as cloudinary } from "cloudinary";

import { customError } from "@/utils";
import { DeleteOptions } from "./file.type";

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
  process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true,
});

class Files {
  private static instance: Files;
  private cloudinary = cloudinary;

  constructor() {
    if (!Files.instance) Files.instance = this;

    return Files.instance;
  }

  private getPublicIdFromUrl(url: string, sliceValue: number = -4) {
    return url.split("/").slice(sliceValue).join("/").split(".")[0];
  }

  async upload(file: string, options?: Partial<UploadApiOptions>) {
    try {
      return await this.cloudinary.uploader.upload(file, options);
    } catch (error) {
      if (error instanceof Error)
        throw customError({
          message: error.message,
        });
    }
  }

  async delete(url: string, options?: Partial<DeleteOptions>) {
    try {
      const publicId = this.getPublicIdFromUrl(url, options?.sliceValue);

      await this.cloudinary.uploader.destroy(publicId, options);
    } catch (error) {
      if (error instanceof Error)
        throw customError({
          message: error.message,
        });
    }
  }
}

export { Files };
