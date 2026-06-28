import Link from "next/link";
import { connectDB } from "@/lib/mongodb";
import Award from "@/models/Award";

export const metadata = {
  title: "Awards & Achievements | Dr. Anupriya Hajela Shah",
  description:
    "Explore awards, fellowships, certifications and professional achievements of Dr. Anupriya Hajela Shah.",
};

export default async function AwardsPage() {
  await connectDB();

  const awards = await Award.find().sort({ year: -1 }).lean();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-cyan-50/30 to-white">

      {/* HERO */}
      <section className="relative py-24 overflow-hidden">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-100 rounded-full blur-3xl opacity-50"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50"></div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">

          <span className="inline-flex px-5 py-2 rounded-full bg-cyan-100 text-cyan-700 font-bold">
            Recognition & Excellence
          </span>

          <h1 className="mt-8 text-5xl lg:text-7xl font-black text-slate-900 leading-tight">
            Awards &
            <span className="block bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
              Achievements
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-9 text-slate-600">
            A journey of dedication, academic excellence, fellowships and
            professional achievements in advanced ENT care.
          </p>

        </div>

      </section>

      {/* GRID */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {awards.map((award: any) => (

              <Link
                key={award._id.toString()}
                href={`/awards/${award.slug}`}
              >

                <div className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">

                  {/* IMAGE */}

                  <div className="relative h-64 overflow-hidden">

                    <img
                      src={award.image || "/Images/default-award.jpg"}
                      alt={award.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                    <div className="absolute top-5 right-5 w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center text-3xl">
                      🏆
                    </div>

                    <div className="absolute bottom-5 left-5">

                      <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-xl text-white font-bold">
                        {award.year}
                      </span>

                    </div>

                  </div>

                  {/* CONTENT */}

                  <div className="p-8">

                    <h2 className="text-3xl font-black text-slate-900 group-hover:text-cyan-700 transition-all">

                      {award.title}

                    </h2>

                    <p className="mt-5 text-slate-600 leading-8 line-clamp-3">

                      {award.description}

                    </p>

                    <div className="mt-8 flex items-center justify-between">

                      <span className="font-bold text-cyan-600">
                        Read More →
                      </span>

                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white flex items-center justify-center group-hover:rotate-12 transition-all">
                        🏅
                      </div>

                    </div>

                    <div className="mt-6 h-1 w-0 bg-gradient-to-r from-cyan-600 to-blue-600 group-hover:w-full transition-all duration-500"></div>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}