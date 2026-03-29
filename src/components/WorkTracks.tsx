import { useState } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import almazaThumbnail from "figma:asset/almazaThumbnail.png";
import focusThumbnail from "figma:asset/focusThumbnail.png";
import mihraqThumbnail from "figma:asset/mihraqThumbnail.png";
import gamemateThumbnail from "figma:asset/gamemateThumbnail.png";
import vanlinkThumbnail from "figma:asset/vanlinkThumbnail.png";

export function WorkTracks() {
  const [activeTab, setActiveTab] = useState<
    "development" | "design"
  >("development");

  // Real Projects from Assignment 1 Plan
  const developmentProjects = [
    {
      name: "Almaza Kitchen",
      description: "Modern Restaurant Platform",
      tech: "Custom CSS Grid • Masonry Layout • JS",
      image: almazaThumbnail,
      alt: "Almaza Kitchen - Modern restaurant web platform with custom CSS grid and masonry layout",
      link: "/projects/almaza"
    },
    {
      name: "MyFocus",
      description: "Productivity & Timer Web App",
      tech: "Vanilla JS • LocalStorage • State Logic",
      image: focusThumbnail,
      alt: "MyFocus - Productivity timer web application built with vanilla JavaScript and LocalStorage",
      link: "/projects/focus"
    },
    {
      name: "Mihraaq (Featured)",
      description: "Full-Stack Literary Platform",
      tech: "Next.js • Strapi CMS • API Integration",
      image: mihraqThumbnail,
      alt: "Mihraaq - Full-stack Arabic literary platform built with Next.js and Strapi CMS",
      link: "/projects/mihraq"
    },
  ];

  const designProjects = [
    {
      name: "VanLink",
      description: "Transportation App UX Case Study",
      tech: "User Research • Wireframing • Figma",
      image: vanlinkThumbnail,
      alt: "VanLink - Transportation app UX case study with user research and Figma prototypes",
      link: "/projects/vanlink"
    },
    {
      name: "GameMate",
      description: "Gaming Platform UI & Branding",
      tech: "UI Design • Color Theory • Typography",
      image: gamemateThumbnail,
      alt: "GameMate - Gaming platform UI design with custom branding and typography system",
      link: "/projects/gamemate"
    },
  ];

  const projects =
    activeTab === "development"
      ? developmentProjects
      : designProjects;

  return (
    <section id="work" className="py-32 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Selected Work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical and creative journey,
            split between engineering logic and user interface
            design.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white p-1.5 rounded-full shadow-sm border border-gray-200">
            <button
              onClick={() => setActiveTab("development")}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                activeTab === "development"
                  ? "bg-gray-900 text-white shadow-md"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Development
            </button>
            <button
              onClick={() => setActiveTab("design")}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                activeTab === "design"
                  ? "bg-gray-900 text-white shadow-md"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              UI/UX Design
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const cardContent = (
              <>
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {project.name}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-purple-600 transition-colors" />
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs font-mono text-emerald-800 font-medium tracking-tight">
                      {project.tech}
                    </p>
                  </div>
                </div>
              </>
            );

            const className = "group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block cursor-pointer";

            return project.link ? (
              <Link to={project.link} key={index} className={className}>
                {cardContent}
              </Link>
            ) : (
              <div key={index} className={className}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}