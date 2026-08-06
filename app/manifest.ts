import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dr. Anupriya Hajela Shah",
    short_name: "Dr. Anupriya",
    description:
      "Best ENT Specialist in Bhopal providing advanced ENT treatment.",

    start_url: "/",

    display: "standalone",

    background_color: "#ffffff",

    theme_color: "#0891b2",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}