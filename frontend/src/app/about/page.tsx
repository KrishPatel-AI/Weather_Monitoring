import {
  LucideUsers,
  LucideBuilding2,
  LucideTarget,
  LucideBookOpen,
  LucideLightbulb,
  LucideGlobe,
  LucideHandshake,
  LucideGraduationCap,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export default function AboutUs() {
  return (
    <div className=" text-[var(--primary-color)] p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-center text-[var(--primary-color)] mb-8">
          About Sankalchand Patel University
        </h1>

        <p className="text-lg text-center text-[var(--primary-color)] mb-12 max-w-4xl mx-auto">
          A world-class university where learning is nurtured at every corner!
        </p>

        <Card className=" p-8 mb-12  ">
          <CardContent>
            <p className="text-[var(--primary-color)] text-lg leading-relaxed">
              Nootan Sarva Vidyalaya Kelavani Mandal (NSVKM) was established in
              1952 by Shri. Sankalchand Patel, a freedom fighter and a social
              entrepreneur. The aim was to create a value-based diversified
              education system for the students of North Gujarat.
            </p>

            <p className="text-[var(--primary-color)] text-lg leading-relaxed mt-6">
              The university was established on 9th May 2016 and is spread
              across 84 acres of land. Today, it is home to various institutes
              offering Medical, Paramedical, Technical, & Science courses with
              state-of-the-art infrastructure.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: LucideBuilding2,

              title: "13 Faculties",

              description:
                "Offering programs in Medical, Paramedical, Technical, Science & Commerce.",
            },

            {
              icon: LucideUsers,

              title: "10,000+ Students",

              description: "With 500+ teaching & 450+ non-teaching staff.",
            },

            {
              icon: LucideTarget,

              title: "Industry Collaborations",

              description:
                "Dedicated cells for startups, innovation, incubation & patents.",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg rounded-xl p-8 flex items-center transition-all"
            >
              <item.icon className="text-[var(--primary-color)] w-12 h-12 mr-6" />

              <CardContent>
                <h3 className="text-2xl font-semibold">{item.title}</h3>

                <p className="text-[var(--primary-color)] text-lg">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-4xl font-bold text-center text-[var(--primary-color)] mt-16 mb-10">
          Our Values & Commitment
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: LucideBookOpen,

              title: "Knowledge & Learning",

              description:
                "Creating, organizing, and disseminating knowledge across fields.",
            },

            {
              icon: LucideLightbulb,

              title: "Innovation & Research",

              description:
                "Promoting research, startup incubation, and technological advancements.",
            },

            {
              icon: LucideGlobe,

              title: "Global Outreach",

              description:
                "Establishing strong industry and academic linkages worldwide.",
            },

            {
              icon: LucideHandshake,

              title: "Community Engagement",

              description:
                "Encouraging social responsibility and sustainability initiatives.",
            },

            {
              icon: LucideGraduationCap,

              title: "Student Success",

              description:
                "Ensuring holistic development and career growth for students.",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className=" p-8 flex items-center hover:text-[var(--accent-color)] transition-all"
            >
              <item.icon className="text-[var(--primary-color)] w-12 h-12 mr-6" />

              <CardContent>
                <h3 className="text-2xl font-semibold">{item.title}</h3>

                <p className="text-[var(--primary-color)] text-lg">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
