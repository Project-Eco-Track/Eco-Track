import ImageKit from "imagekit";

var imagekit = new ImageKit({
  publicKey: `${process.env.IMAGEKIT_PUBLIC_KEY}`,
  privateKey: `${process.env.IMAGEKIT_PRIVATE_KEY}`,
  urlEndpoint: `${process.env.IMAGEKIT_URL_ENDPOINT}`,
});

export const upload = async (image: string, name: string) => {
  let url: string = "";

  await imagekit
    .upload({
      file: image,
      fileName: `${name}.jpg`,
      extensions: [
        {
          name: "google-auto-tagging",
          maxTags: 5,
          minConfidence: 95,
        },
      ],
    })
    .then((response) => {
      url = response["url"];
      console.log(url);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
  return url;
};
