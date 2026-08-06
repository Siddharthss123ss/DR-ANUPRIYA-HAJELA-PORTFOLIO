import { MetadataRoute } from "next";
import { connectDB } from "@/lib/mongodb";
import Award from "@/models/Award";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await connectDB();

  const awards = await Award.find({}, "slug updatedAt");

  const awardUrls = awards.map((award: any) => ({
    url: `https://anupriyahajela.in/awards/${award.slug}`,
    lastModified: award.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://anupriyahajela.in",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: "https://anupriyahajela.in/awards",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    ...awardUrls,
  ];
}