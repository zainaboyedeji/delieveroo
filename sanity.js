import {createClient}  from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
    projectId: "n1scojri",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21",
    withCredentials: false,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;

// Deploy Sanity studio
// sanity deploy
