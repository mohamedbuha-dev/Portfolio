import { ExternalLink, Code } from "lucide-react";
import { Link } from "react-router";
import mihraqThumbnail from "figma:asset/mihraqThumbnail.png";

export function FeaturedProject() {
  return (
    <section 
      id="work" 
      // 1. مسافة علوية إجبارية 150 بكسل (لحل مشكلة "مافي مسافة فوق")
      style={{ paddingTop: '40px', paddingBottom: '100px' }}
      className="relative px-6 bg-gradient-to-br from-emerald-50/50 to-purple-50/50"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* النصوص العلوية */}
        {/* مسافة إجبارية تحت النصوص 60 بكسل */}
        <div className="text-center flex flex-col items-center" style={{ marginBottom: '60px' }}>
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-500 to-purple-600 text-white rounded-full text-sm mb-6">
            Featured Project
          </span>
          <Link to="/projects/mihraq" className="hover:opacity-80 transition-opacity">
            <h2 className="text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              Mihraaq
              <ExternalLink className="w-8 h-8 text-gray-400" />
            </h2>
          </Link>
          <p className="text-xl text-gray-600">Literary Platform | Next.js + Strapi CMS</p>
        </div>

        <div className="relative">
          {/* اللابتوب */}
          {/* 2. مسافة سفلية إجبارية 100 بكسل (لحل مشكلة "مافي مسافة تحت الشاشة") */}
          <Link 
            to="/projects/mihraq"
            className="relative mx-auto max-w-4xl transform transition-transform hover:scale-[1.02] duration-500 block group cursor-pointer"
            style={{ marginBottom: '100px' }}
          >
            <div className="bg-gray-900 rounded-t-2xl p-2 shadow-2xl">
              <div className="bg-gray-800 rounded-t-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-700">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 mx-4 bg-gray-700 rounded px-3 py-1 text-[10px] md:text-xs text-gray-400 font-mono text-center">
                    mihraaq.com
                  </div>
                </div>
                <div className="aspect-[16/10] bg-white relative">
                  <img
                    src={mihraqThumbnail}
                    alt="Mihraaq Literary Platform - Next.js based Arabic literature platform with Strapi CMS integration"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>
              </div>
            </div>
            <div className="h-3 md:h-4 bg-gray-800 rounded-b-2xl mx-auto w-[85%] shadow-lg"></div>
          </Link>

          {/* التفاصيل (الأعمدة الثلاثة) */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl mb-4">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Tech Stack</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Next.js 14, TypeScript, Tailwind, Strapi</p>
            </div>

            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-xl mb-4">
                <ExternalLink className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Key Features</h3>
              <p className="text-gray-600 text-sm leading-relaxed">CMS, Search, Auth, Reading Lists</p>
            </div>

            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Performance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">95+ Lighthouse Score, Fast SSR/SSG</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}