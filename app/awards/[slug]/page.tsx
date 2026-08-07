import { connectDB } from "@/lib/mongodb";
import Award from "@/models/Award";
import { notFound } from "next/navigation";
import Script from "next/script";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};
export async function generateMetadata({ params }: Props) {
  await connectDB();

  const { slug } = await params;

  const award = await Award.findOne({ slug });

  if (!award) {
    return {};
  }

  return {
    title: `${award.title} | Dr. Anupriya Hajela Shah`,

    description: award.description,

    alternates: {
      canonical: `https://anupriyahajela.in/awards/${award.slug}`,
    },

    openGraph: {
      title: award.title,
      description: award.description,
      url: `https://anupriyahajela.in/awards/${award.slug}`,
      images: [
        {
          url: award.image,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: award.title,
      description: award.description,
      images: [award.image],
    },
  };
}
export default async function AwardDetailsPage({ params }: Props) {
  await connectDB();

  const { slug } = await params;

  const award = await Award.findOne({ slug });

  if (!award) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-cyan-50 py-24">
    <Script
  id="award-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      headline: award.title,
      description: award.description,
     image: `https://anupriyahajela.in${award.image}`,

url: `https://anupriyahajela.in/awards/${award.slug}`,

publisher: {
  "@type": "Organization",
  name: "Hajela Hospital",
},
      author: {
        "@type": "Person",
        name: "Dr. Anupriya Hajela Shah",
      },
    }),
  }}
/>
      <div className="max-w-5xl mx-auto px-6">

        <div className="overflow-hidden rounded-[40px] shadow-2xl">
          <Image
            src={award.image}
            alt={award.title}
            className="w-full h-[500px] object-cover"
          />
        </div>

        <div className="mt-12">
          <span className="inline-flex px-5 py-2 rounded-full bg-cyan-100 text-cyan-700 font-bold">
            {award.year}
          </span>

          <h1 className="mt-6 text-5xl lg:text-6xl font-black text-slate-900">
            {award.title}
          </h1>

          <p className="mt-8 text-xl leading-10 text-slate-600">
            {award.description}
          </p>
        </div>

      </div>
    </main>
  );
}