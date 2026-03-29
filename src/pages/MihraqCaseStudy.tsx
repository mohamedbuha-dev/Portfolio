import { ArrowLeft, ExternalLink, Github, Code2, Database, Zap, Sparkles, Layout, Gauge } from "lucide-react";
import { Link } from "react-router";
import { ImageLightbox } from "../components/ImageLightbox";
import heroImage from "figma:asset/heroImage.png";
import literaryTextsImage from "figma:asset/literaryTextsImage.png";
import magazineImage from "figma:asset/magazineImage.png";
import aboutImage from "figma:asset/aboutImage.png";
import strapiDashboard from "figma:asset/strapiDashboard.png";
import strapiPosts from "figma:asset/strapiPosts.png";
import strapiTeam from "figma:asset/strapiTeam.png";

export function MihraqCaseStudy() {
  const techStack = [
    "Next.js 14",
    "App Router",
    "TypeScript",
    "Strapi v5",
    "Framer Motion",
    "Tailwind CSS",
    "REST API",
    "Render",
    "GitHub CI/CD"
  ];

  return (
    <div style={{ paddingTop: "100px" }} className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Back Button */}
        <Link 
          to="/work"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </Link>

        {/* Hero Section */}
        <div className="mb-16">
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Mihraq <span className="text-4xl md:text-5xl" dir="rtl">(مِهْرَاق)</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl">
              A sophisticated literary and cultural platform delivering Arabic content through a luxurious, high-performance digital experience
            </p>
          </div>

          {/* Project Links */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a 
              href="https://mihraaq.mohamedabuohagar.ca/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <ExternalLink size={18} />
              <span>Visit Live Site</span>
            </a>
            <a 
              href="https://github.com/buha-bel/mihraq-project" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 hover:-translate-y-1 transition-all"
            >
              <Github size={18} />
              <span>View Source</span>
            </a>
          </div>
        </div>

        {/* Results & Impact */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-emerald-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Results & Impact
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              Mihraq successfully launched as a premium destination for Arabic literary content, 
              combining technical excellence with beautiful design. The platform demonstrates how 
              modern web technologies can be leveraged to create culturally rich, performant, 
              and scalable digital experiences.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">95+</div>
                <div className="text-sm text-white/80">Lighthouse Performance Score</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">&lt; 1s</div>
                <div className="text-sm text-white/80">Average Page Load Time</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm text-white/80">Type-Safe Codebase</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-full text-sm text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Project Overview */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-emerald-50/50 to-purple-50/50 border border-emerald-100 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Project Vision
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mihraq is more than just a website—it's a digital sanctuary for Arabic literature and culture. 
              The platform combines cutting-edge web technologies with thoughtful UX design to create an 
              immersive reading experience. Built with scalability and performance in mind, every technical 
              decision was made to ensure the platform can grow alongside its community while maintaining 
              the highest standards of quality and user experience.
            </p>
          </div>
        </section>

        {/* Section 1: Modern Frontend Architecture */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-xl text-white">
              <Layout size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Modern Frontend Architecture
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Zap className="text-emerald-500" size={22} />
                  Next.js 14 with App Router
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Leveraging Next.js 14's App Router and Static Site Generation (SSG) to deliver 
                  lightning-fast page loads and superior SEO performance. Every page is pre-rendered 
                  at build time, ensuring instant content delivery to users worldwide.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Sparkles className="text-purple-500" size={22} />
                  Responsive Design Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Seamless experience across all devices with special attention to high-end typography, 
                  proper Arabic RTL support, and adaptive layouts that maintain visual hierarchy 
                  from mobile to desktop.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
                <ImageLightbox 
                  src={heroImage}
                  alt="Mihraq Hero Page"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <p className="text-xs text-gray-500 mt-3 text-center">Hero Landing Experience</p>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
                <ImageLightbox 
                  src={literaryTextsImage}
                  alt="Literary Texts Page"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <p className="text-xs text-gray-500 mt-3 text-center">Literary Content Gallery</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Headless CMS Integration */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-xl text-white">
              <Database size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Headless CMS Integration
            </h2>
          </div>

          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Powered by Strapi v5, the platform features a flexible, scalable backend that empowers 
              content creators while maintaining data integrity. The custom API handling logic ensures 
              the frontend remains robust regardless of backend schema changes.
            </p>

            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Smart API Data Handler
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                One of the key challenges in working with Strapi was handling API structure changes 
                between versions. I developed a smart normalization layer that handles both nested 
                (v4) and flat (v5) data structures, ensuring backward compatibility and future-proofing 
                the application.
              </p>
              
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  Handles both nested and flat API response structures
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  Type-safe implementation with TypeScript generics
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  Backward compatible with Strapi v4 and v5
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  Automatic data normalization for consistent frontend consumption
                </li>
              </ul>
            </div>
          </div>

          {/* Database Screenshots */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
              <ImageLightbox 
                src={strapiDashboard}
                alt="Strapi Admin Dashboard"
                className="w-full h-48 object-cover rounded-xl"
              />
              <p className="text-xs text-gray-500 mt-3 text-center">Admin Dashboard Overview</p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
              <ImageLightbox 
                src={strapiPosts}
                alt="Strapi Content Manager - Posts"
                className="w-full h-48 object-cover rounded-xl"
              />
              <p className="text-xs text-gray-500 mt-3 text-center">Content Manager - Posts</p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
              <ImageLightbox 
                src={strapiTeam}
                alt="Strapi Team Members Management"
                className="w-full h-48 object-cover rounded-xl"
              />
              <p className="text-xs text-gray-500 mt-3 text-center">Team Members Management</p>
            </div>
          </div>
        </section>

        {/* Section 3: Advanced Animations & UX */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-xl text-white">
              <Sparkles size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Advanced Animations & UX
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Framer Motion Integration
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Every interaction on Mihraq is carefully crafted using Framer Motion to create 
                smooth, delightful transitions. From page navigation to hover effects, the animations 
                add a layer of polish that elevates the entire user experience.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">3D Magazine Covers</h4>
                    <p className="text-sm text-gray-600">Interactive 3D transformations on hover with perspective effects</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Page Transitions</h4>
                    <p className="text-sm text-gray-600">Smooth fade and slide animations between routes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Scroll Animations</h4>
                    <p className="text-sm text-gray-600">Content reveals and parallax effects for depth</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 overflow-hidden">
              <ImageLightbox 
                src={magazineImage}
                alt="Magazine Archive Library"
                className="w-full object-cover rounded-xl h-[350px]"
              />
              <p className="text-xs text-gray-500 mt-3 text-center">Magazine Archive Library</p>
            </div>
          </div>
        </section>

        {/* Section 4: Custom Logic & Algorithms */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-xl text-white">
              <Code2 size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Custom Logic & Algorithms
            </h2>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Smart Team Sorting Algorithm
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              The Team page required a unique sorting solution: executive management needed manual 
              priority control for organizational hierarchy, while regular team members should be 
              sorted alphabetically. This algorithm provides the perfect balance of control and 
              automation, with full support for Arabic name sorting.
            </p>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  Manual priority sorting for executive-level members
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  Automatic alphabetical sorting for regular team members
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  Full Arabic language support with proper locale handling
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  Type-safe implementation with TypeScript
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Performance & CI/CD */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-xl text-white">
              <Gauge size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Performance & Deployment
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Optimized for Speed
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every aspect of Mihraq is optimized for performance. Static generation ensures 
                instant page loads, while smart code splitting and lazy loading keep bundle sizes minimal.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">First Contentful Paint</span>
                  <span className="text-sm font-semibold text-emerald-600">&lt; 1.0s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Time to Interactive</span>
                  <span className="text-sm font-semibold text-emerald-600">&lt; 2.0s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Lighthouse Score</span>
                  <span className="text-sm font-semibold text-emerald-600">95+</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                CI/CD Pipeline
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Deployed on Render with a fully automated GitHub CI/CD pipeline. Every commit 
                triggers automated testing, building, and deployment, ensuring quality and reliability.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-sm text-gray-600">Automated testing on PR</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-sm text-gray-600">Build optimization & caching</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-sm text-gray-600">Zero-downtime deployments</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project CTA */}
        <div className="text-center">
          <Link 
            to="/work"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:-translate-y-1 transition-all text-lg font-semibold"
          >
            View More Projects
          </Link>
        </div>

      </div>
    </div>
  );
}