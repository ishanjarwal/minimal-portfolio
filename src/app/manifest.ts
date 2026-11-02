import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ishan Jarwal — Software Engineer & AI Product Engineer",
    short_name: "Ishan Jarwal",
    description:
      "Personal portfolio and README of Ishan Jarwal. Software Engineer & AI Product Engineer specializing in Agentic AI, LLMs, and scalable distributed systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf9f5",
    theme_color: "#0e1116",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
