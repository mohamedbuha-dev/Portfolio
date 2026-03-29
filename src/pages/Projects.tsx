import { WorkTracks } from "../components/WorkTracks";
import { FeaturedProject } from "../components/FeaturedProject";

export function Projects() {
  return (
    <div style={{ paddingTop: "100px" }} className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-emerald-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my work in web development and UI/UX design
          </p>
        </div>
        
        <FeaturedProject />
        <WorkTracks />
      </div>
    </div>
  );
}
