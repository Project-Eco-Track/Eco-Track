import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: `${process.env.IMAGEKIT_PUBLIC_KEY}`,
  privateKey: `${process.env.IMAGEKIT_PRIVATE_KEY}`,
  urlEndpoint: `${process.env.IMAGEKIT_URL_ENDPOINT}`,
});

const upload = async (image: string, name: string): Promise<string> => {
  try {
    const imageKitResponse = await imagekit.upload({
      file: image,
      fileName: `${name}.jpg`,
      extensions: [
        {
          name: "google-auto-tagging",
          maxTags: 5,
          minConfidence: 95,
        },
      ],
    });

    if (imageKitResponse.url) {
      return imageKitResponse.url;
    } else {
      console.log("ImageKit response:", imageKitResponse);
      throw new Error("ImageKit response is empty.");
    }
  } catch (error: any) {
    console.log("ImageKit error:", error);
    throw new Error("Something went wrong.");
  }
};

export default upload;
