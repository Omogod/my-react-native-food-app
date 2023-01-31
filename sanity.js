import  SanityClient  from "@sanity/client";
import  ImageUrlBuilder  from "@sanity/image-url";

const client = new SanityClient({
    projectId: "l9o8k3oz",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: true,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;