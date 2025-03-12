"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";

import { BrainCircuit, Satellite, Telescope } from "lucide-react";

import MehsanaSolar from "../../public/mehsanasolar.jpg";

import MehsanaWildlife from "../../public/mehsanawl.jpg";

import MehsanaWetland from "../../public/mehsanawetland.jpg";

const sections = [
  {
    img: MehsanaSolar,

    alt: "Mehsana Solar Plant",

    icon: BrainCircuit,

    title: " Advancing Solar Energy in Mehsana with AI",

    text: `Mehsana is emerging as a leader in renewable energy with the rapid growth of solar power plants. Using high-resolution Resourcesat-2A LISS IV satellite imagery and deep learning-based AI models, researchers have mapped solar installations across the district. The study, conducted from January to April 2023, reveals a significant increase in solar plant inventories compared to 2018. These findings highlight Mehsana’s contribution to India’s sustainable energy initiatives. The AI-powered analysis also provides insights into land use, enabling better planning for future solar energy projects. By leveraging satellite data and advanced AI techniques, Mehsana is accelerating its transition toward clean energy. This research, conducted under project TDP-202302021, showcases the potential of AI in environmental monitoring and sustainable development.`,

    btnText: "Learn More",

    reverse: false,
  },

  {
    img: MehsanaWetland,

    alt: "Mehsana Wildlife",

    icon: Satellite,

    title: "Satellite Data: Transforming Mehsana’s Development",

    text: `Satellite data plays a crucial role in monitoring Mehsana's environmental and agricultural landscapes. Researchers have analyzed multi-temporal Normalized Difference Vegetation Index (NDVI) profiles to track crop growth stages in Vijapur Taluka. This approach helps in optimizing agricultural planning and resource allocation. Additionally, geological maps generated from satellite imagery provide insights into soil composition and mineral deposits, aiding land management and industrial development. Mehsana has also been chosen for India’s first Satellite Network Portal Site under the Digital India initiative, enhancing regional connectivity. These advancements underscore the growing importance of satellite data in urban planning, environmental conservation, and infrastructure development. By integrating advanced remote sensing technologies, Mehsana is paving the way for data-driven decision-making and sustainable growth, ensuring better resource utilization and environmental conservation for future generations.`,

    btnText: "Explore More",

    reverse: true,
  },

  {
    img: MehsanaWildlife,

    alt: "Mehsana Wetlands",

    icon: Telescope,

    title: "Thol Lake: A Haven for Biodiversity in Mehsana",

    text: `Thol Lake Bird Sanctuary, a Ramsar-recognized wetland in Mehsana, is a vital ecological hotspot supporting over 320 bird species, including the critically endangered White-rumped vulture and the vulnerable Sarus crane. Established in 1988, the sanctuary spans 6.49 hectares and plays a crucial role in maintaining regional biodiversity. As a key stopover along the Central Asian Flyway, Thol Lake provides an essential habitat for migratory birds, supporting global conservation efforts. Its wetlands contribute to nutrient cycling, water purification, and climate regulation. Recognizing its importance, conservation initiatives focus on preserving this ecosystem against threats like habitat degradation and climate change. Thol Lake’s status as a Ramsar site highlights its global significance and the need for continuous efforts to protect its rich biodiversity. The sanctuary remains a prime example of how ecological conservation and responsible tourism can coexist to safeguard natural heritage.`,

    btnText: "Discover More",

    reverse: false,
  },
];

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <div className="max-w-7xl mx-auto px-4 mt-10">
        <div className="w-full overflow-hidden rounded-xl shadow-lg">
    
        </div>
      </div>

      {sections.map(
        ({ img, alt, icon: Icon, title, text, btnText, reverse }, index) => (
          <section
            key={index}
            className={`mx-auto flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-10 py-16 px-20`}
          >
            <div className="w-full md:w-1/2">
              <Image
                src={img}
                alt={alt}
                width={600}
                height={350}
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <div className="w-full md:w-1/2">
              <Icon className="text-[var(--primary-color)] w-12 h-12 mb-4" />

              <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-4">
                {title}
              </h2>

              <p className="text-gray-700 leading-relaxed">{text}</p>

              <Button className="mt-6 bg-[var(--primary-color)] text-white hover:bg-[var(--accent-color)] transition-colors cursor-pointer">
                {btnText}
              </Button>
            </div>
          </section>
        )
      )}
    </div>
  );
}
