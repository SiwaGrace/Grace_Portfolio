import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, ExternalLink, Github } from "lucide-react";
import data from "../../lib/projects.json";

function ProjectCard({ project }) {
  const [imageError, setImageError] = useState(false);

  const shouldShowFallback = !project.image || imageError;

  return (
    <div className="bg-primaryColor rounded-2xl shadow-sm border border-secondaryColor/20 overflow-hidden hover:shadow-md transition-shadow duration-300 group">
      {/* Image */}
      <div className="relative h-44 bg-secondaryColor/10 overflow-hidden">
        {project.image && !imageError ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImageError(true)}
          />
        ) : null}

        {shouldShowFallback ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondaryColor/10 to-primaryColor">
            <span className="text-secondaryText text-xs font-medium tracking-widest uppercase">
              {project.title.charAt(0)}
            </span>
          </div>
        ) : null}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h2 className="text-lg font-bold text-primaryText mb-3">
          {project.title}
        </h2>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag.label}
              className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tag.color}`}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-secondaryText mb-4 font-medium">
          {project.description}
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-2">
          {project.features.map((f) => (
            <span
              key={f}
              className="text-xs text-secondaryText border border-secondaryColor/20 rounded-lg px-3 py-1 bg-secondaryColor/10"
            >
              {f}
            </span>
          ))}
        </div>

        {/* links */}
        <div className="mt-6 flex flex-wrap gap-3">
          {project.githublink ? (
            <a
              href={project.githublink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-secondaryColor/30 bg-secondaryColor/10 px-4 py-2 text-xs font-semibold text-secondaryText transition hover:bg-secondaryColor/20 hover:text-primaryText"
            >
              <Github className="h-4 w-4" />
              Source
            </a>
          ) : null}

          {project.websiteLink ? (
            <a
              href={project.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accentColor px-4 py-2 text-xs font-semibold text-primaryColor transition hover:bg-secondaryColor"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [aiOnly, setAiOnly] = useState(false);

  const projects = data.data;
  const filterTabs = data.filterTabs;

  const filtered = projects.filter((p) => {
    const matchesCategory =
      activeFilter === "All" || p.category.includes(activeFilter);
    const matchesAI = !aiOnly || p.isAI;
    return matchesCategory && matchesAI;
  });

  return (
    <div className="min-h-screen bg-primaryColor px-4 py-14 md:px-10">
      {/* Header */}
      <div className="mb-10 max-w-5xl mx-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-primaryText tracking-tight mb-2">
            My Projects
          </h1>
          <p className="text-secondaryText text-base">Showcasing my work</p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-accentColor px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-secondaryColor"
        >
          <Home className="h-4 w-4" />
          Home
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 max-w-5xl mx-auto">
        {/* Tab filters */}
        <div className="flex flex-wrap gap-2">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-5 py-2 rounded-lg text-sm font-medium border transition-all ${
                activeFilter === tab
                  ? "bg-secondaryColor text-primaryColor border-secondaryColor shadow"
                  : "bg-primaryColor text-secondaryText border-secondaryColor/30 hover:border-secondaryColor hover:text-primaryText"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* AI toggle */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-secondaryText">
            Show AI Projects Only
          </span>
          <button
            onClick={() => setAiOnly((v) => !v)}
            className={`relative w-12 h-6 rounded-full transition-colors ${
              aiOnly ? "bg-accentColor" : "bg-secondaryColor/20"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-primaryColor shadow transition-transform ${
                aiOnly ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {filtered.length > 0 ? (
          filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))
        ) : (
          <div className="col-span-3 text-center py-20 text-gray-400 text-sm">
            No projects match the selected filter.
          </div>
        )}
      </div>
    </div>
  );
}
