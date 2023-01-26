import SanityClient  from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = SanityClient({
    projectId: "toofd3zg",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21",
    withCredentials: false,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;