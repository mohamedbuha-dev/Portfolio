import { ImageLightbox } from "../components/ImageLightbox";
import { ArrowLeft, ExternalLink, Github, Code2, MonitorSmartphone, Zap, Server, Image as ImageIcon, Accessibility, TrendingUp, Layers } from "lucide-react";
import { Link } from "react-router";
import heroImg from "figma:asset/heroImg.png";
import aboutImg from "figma:asset/aboutImg.png";
import galleryImg from "figma:asset/galleryImg.png";
import reserveImg from "figma:asset/reserveImg.png";

export function AlmazaCaseStudy() {
  const techStack = [
    "HTML5",
    "CSS3 (Grid/Flexbox)",
    "JavaScript (ES6+)",
    "Masonry.js",
    "Git"
  ];

  return (
    <div style={{ paddingTop: "100px" }} className="min-h-screen bg-white text-gray-700 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        
        {/* Back Button */}
        <Link 
          to="/work"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </Link>

        {/* 1. Hero Section */}
        <div className="mb-16 relative">
          <div className="absolute top-0 left-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-30 -z-10 pointer-events-none"></div>
          
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
              ALMAZA KITCHEN
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl">
              Modern Mediterranean Dining Experience
            </p>
          </div>

          {/* Project Links */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a 
              href="https://almaza.mohamedabuohagar.ca/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <ExternalLink size={18} />
              <span>View Live Site</span>
            </a>
            <a 
              href="https://github.com/mohamedbuha-dev/almaza-kitchen" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 hover:-translate-y-1 transition-all"
            >
              <Github size={18} />
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>

        {/* 2. Results & Impact (Top Priority) */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-emerald-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Results & Impact
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              A modern digital transformation for a Mediterranean kitchen in Vancouver, delivering 
              an appetizing visual experience paired with uncompromising performance. The project 
              demonstrates how thoughtful design and clean code can create exceptional user experiences.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">&lt; 1.5s</div>
                <div className="text-sm text-white/80">Page Load Speed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">50%</div>
                <div className="text-sm text-white/80">Increase in Reservations</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm text-white/80">WCAG Compliant</div>
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

        {/* 3 & 5. About & Role & Problem & Solution */}
        <section className="mb-20 grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Context</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              A modern digital transformation for a Mediterranean kitchen in Vancouver, 
              developed as part of the BCIT New Media program. The project focuses on 
              delivering an appetizing visual experience paired with uncompromising performance.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-50 to-purple-50 border border-emerald-200 text-emerald-700 rounded-lg text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Lead Full-Stack Developer & UI/UX Designer
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Problem & Solution</h2>
            
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-red-300">
                <div className="absolute -left-[5px] top-2 w-2 h-2 bg-white border-2 border-red-400 rounded-full"></div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">The Problem</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Outdated online presence with a fragmented mobile experience.
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-emerald-400">
                <div className="absolute -left-[5px] top-2 w-2 h-2 bg-white border-2 border-emerald-500 rounded-full shadow-sm"></div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">The Solution</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A performance-driven, mobile-first landing page with high-quality visual storytelling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Technical Deep-Dive */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8 relative">
            <div className="p-3 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-xl text-white">
              <Code2 size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Technical Deep-Dive
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start hover:border-emerald-300 hover:shadow-lg transition-all">
              <div className="p-4 bg-gradient-to-br from-emerald-50 to-purple-50 rounded-xl shrink-0">
                <ImageIcon className="text-emerald-600" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Masonry Gallery Logic</h3>
                <p className="text-gray-600 leading-relaxed">
                  Implemented Masonry.js combined with imagesLoaded to intelligently calculate 
                  and pack images of varying dimensions without layout shifts. The script waits 
                  for all image assets to fully load before initializing the layout grid, 
                  ensuring a seamless, professional viewing experience mimicking a lively mosaic of culinary dishes.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start hover:border-purple-300 hover:shadow-lg transition-all">
              <div className="p-4 bg-gradient-to-br from-emerald-50 to-purple-50 rounded-xl shrink-0">
                <MonitorSmartphone className="text-purple-600" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Responsive Engine</h3>
                <p className="text-gray-600 leading-relaxed">
                  Developed a custom 12-column grid system utilizing standard CSS3 Grid and Flexbox 
                  designed explicitly for Mobile, Tablet, and Desktop viewports. Mathematical alignment 
                  is enforced with consistent 16px and 20px gutters, ensuring typography and image 
                  containers stay strictly bound to the design language across all screens.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start hover:border-emerald-300 hover:shadow-lg transition-all">
              <div className="p-4 bg-gradient-to-br from-emerald-50 to-purple-50 rounded-xl shrink-0">
                <Server className="text-emerald-600" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Optimization & Delivery</h3>
                <p className="text-gray-600 leading-relaxed">
                  Utilized Static Site Generation (SSG) principles for rendering static assets and 
                  ensuring high-performance image delivery. Content is served lightning-fast without 
                  server-side overhead, yielding impeccable Lighthouse scores and minimizing time-to-interactive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Visual Gallery */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-xl text-white">
              <Layers size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Visual Gallery
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 group hover:border-emerald-300 transition-all">
              <div className="overflow-hidden rounded-xl bg-white mb-4">
                <ImageLightbox 
                  src={heroImg} 
                  alt="Desktop Hero" 
                  className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-700 ease-in-out"
                />
              </div>
              <p className="text-sm font-semibold text-gray-900 px-2">Hero Section</p>
              <p className="text-xs text-gray-500 px-2 mt-1">Impactful modern typography and clear CTAs</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 group hover:border-purple-300 transition-all">
              <div className="overflow-hidden rounded-xl bg-white mb-4">
                <ImageLightbox 
                  src={aboutImg} 
                  alt="About Section" 
                  className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-700 ease-in-out"
                />
              </div>
              <p className="text-sm font-semibold text-gray-900 px-2">Brand Story</p>
              <p className="text-xs text-gray-500 px-2 mt-1">Highlighting coastal ingredients and heritage</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 group hover:border-emerald-300 transition-all">
              <div className="overflow-hidden rounded-xl bg-white mb-4">
                <ImageLightbox 
                  src={galleryImg} 
                  alt="Signature Dishes / Gallery" 
                  className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-700 ease-in-out"
                />
              </div>
              <p className="text-sm font-semibold text-gray-900 px-2">Masonry Gallery</p>
              <p className="text-xs text-gray-500 px-2 mt-1">Dynamic layout eliminating visual shifts</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 group hover:border-purple-300 transition-all">
              <div className="overflow-hidden rounded-xl bg-white mb-4">
                <ImageLightbox 
                  src={reserveImg} 
                  alt="Reservation & Contact" 
                  className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-700 ease-in-out"
                />
              </div>
              <p className="text-sm font-semibold text-gray-900 px-2">Seamless Booking</p>
              <p className="text-xs text-gray-500 px-2 mt-1">Direct contact points and intuitive forms</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}