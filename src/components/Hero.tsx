import { ArrowRight, Code2 } from "lucide-react";
import { Link } from "react-router";
import profileImage from "figma:asset/profileImage.png";

export function Hero() {
  return (
    <section
      id="home"
      style={{ paddingTop: "120px", paddingBottom: "120px" }}
      className="relative flex flex-col items-center justify-start px-4 overflow-hidden"
    >
      {/* الخلفية */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-30 -z-10"></div>

      {/* 1. الصورة */}
      <div className="relative mb-6 group z-20 shrink-0">
        <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border-[4px] md:border-[6px] border-white shadow-2xl overflow-hidden bg-gray-100 relative mx-auto">
          <img
            src={profileImage}
            alt="Mohamed Abuohagar"
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* توهج خلفي */}
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-purple-600 rounded-full blur-2xl opacity-40 -z-10 transform scale-110"></div>

        {/* شارة الحالة */}
        <div className="absolute bottom-0 right-[-5px] md:right-0 bg-white px-2 py-0.5 md:px-3 md:py-1 rounded-full shadow-lg border border-gray-100 flex items-center gap-1.5 md:gap-2 animate-bounce-slow">
          <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] md:text-xs font-bold text-gray-700 whitespace-nowrap">
            Open to Work
          </span>
        </div>
      </div>

      {/* الاسم */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 z-20">
        Mohamed Abuohagar
      </h2>

      {/* 2. النصوص والتفاصيل */}
      <div className="text-center max-w-4xl mx-auto space-y-5 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[10px] md:text-sm font-medium border border-emerald-200 mx-auto">
          <Code2 className="w-3 h-3 md:w-4 md:h-4" />
          <span>Front-End Developer</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 tracking-tight">
          Building High-Performance <br />
          <span className="bg-gradient-to-r from-emerald-500 to-purple-600 bg-clip-text text-transparent">
            Web Experiences
          </span>
        </h1>

        <p className="text-sm md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
          Full-Stack Developer specializing in Next.js & Modern
          UI.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-2 md:pt-4 w-full px-8 sm:px-0">
          <Link
            to="/work"
            className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-sm md:text-base font-medium"
          >
            View Work <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 border border-gray-200 text-gray-700 bg-white rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all text-sm md:text-base font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}