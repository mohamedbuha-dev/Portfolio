import { ImageLightbox } from "../components/ImageLightbox";
import { ArrowLeft, ExternalLink, Github, Code2, Zap, Clock, Boxes, Sparkles, TrendingUp, Settings } from "lucide-react";
import { Link } from "react-router";
import focusSetupImg from "figma:asset/focusSetupImg.png";
import focusTimerImg from "figma:asset/focusTimerImg.png";

export function FocusCaseStudy() {
  const techStack = [
    "Next.js 14",
    "React 18",
    "TypeScript",
    "Tailwind CSS",
    "Zustand",
    "Local Storage API",
    "Web Audio API",
    "Git"
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
              FOCUS APP — Minimalist Productivity Ecosystem
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl">
              A performance-driven task management tool designed to eliminate digital clutter and foster deep work
            </p>
          </div>

          {/* Project Links */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a 
              href="https://focus.mohamedabuohagar.ca/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <ExternalLink size={18} />
              <span>View Live App</span>
            </a>
            <a 
              href="https://github.com/mohamedbuha-dev/Focus-App" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 hover:-translate-y-1 transition-all"
            >
              <Github size={18} />
              <span>View Source Code</span>
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
              Focus App successfully delivers a zero-distraction productivity environment that enhances 
              user focus through seamless Pomodoro integration and elegant task management. The platform 
              demonstrates how minimalist design paired with technical excellence creates exceptional user experiences.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">&lt; 1s</div>
                <div className="text-sm text-white/80">Interaction Latency</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm text-white/80">Data Persistence</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">95+</div>
                <div className="text-sm text-white/80">Lighthouse Score</div>
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
              Focus App reimagines productivity software by stripping away unnecessary features and 
              embracing radical simplicity. Built with modern web technologies and a mobile-first approach, 
              every interaction is crafted to be instant, intuitive, and distraction-free. The app combines 
              Pomodoro time management with elegant task tracking, creating a unified workspace for deep work.
            </p>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Problem & Solution</h2>
            
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-red-300">
                <div className="absolute -left-[5px] top-2 w-2 h-2 bg-white border-2 border-red-400 rounded-full"></div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">The Problem</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Existing productivity tools often introduce more distraction through complex UI, 
                  excessive notifications, and feature bloat. Users spend more time managing the tool 
                  than focusing on actual work.
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-emerald-400">
                <div className="absolute -left-[5px] top-2 w-2 h-2 bg-white border-2 border-emerald-500 rounded-full shadow-sm"></div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">The Solution</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A 'zero-distraction' environment that prioritizes core functionality and aesthetic 
                  minimalism. Focus App provides only what's essential: a timer, tasks, and ambient 
                  soundscapes, all in a beautifully crafted interface.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Architecture & State Management */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-xl text-white">
              <Boxes size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Architecture & State Management
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Zap className="text-emerald-500" size={22} />
                  Next.js with Server-Side Rendering
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Built on Next.js 14 to leverage Server-Side Rendering (SSR) and efficient hydration 
                  for instant task updates. The app router ensures smooth navigation between focus sessions 
                  and task management views with zero page reloads.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Settings className="text-purple-500" size={22} />
                  Robust State Management
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Implementation of Zustand for lightweight, type-safe global state management. 
                  Real-time task transitions, timer updates, and category filtering happen instantly 
                  without props drilling or context complexity.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
                <ImageLightbox 
                  src={focusSetupImg}
                  alt="Focus App Setup Interface"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <p className="text-xs text-gray-500 mt-3 text-center">Session Setup & Ambient Soundtracks</p>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
                <ImageLightbox 
                  src={focusTimerImg}
                  alt="Focus Timer View"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <p className="text-xs text-gray-500 mt-3 text-center">Minimalist Timer Interface</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Custom Logic & Algorithms */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-xl text-white">
              <Code2 size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Custom Logic & Algorithms
            </h2>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Dynamic Task Prioritization Algorithm
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Developed a custom prioritization logic that dynamically sorts tasks based on user-defined 
              urgency levels. The algorithm considers multiple factors including deadline proximity, 
              task category, and completion status to present the most relevant work first.
            </p>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  Multi-factor sorting based on urgency, category, and completion
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  Real-time re-prioritization as task states change
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  Intelligent category filtering with zero lag
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  Type-safe implementation with TypeScript generics
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pomodoro Timer Logic
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              A precision timer implementation using Web APIs that maintains accuracy even when the tab 
              is inactive. The system handles session transitions, break notifications, and ambient audio 
              synchronization seamlessly.
            </p>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Technical Highlights:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  Background timer sync using Service Workers
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  Automatic session tracking and statistics
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  Web Audio API integration for ambient soundscapes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  Custom audio controls with fade in/out transitions
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Data Persistence & Performance */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-xl text-white">
              <TrendingUp size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Data Persistence & Performance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                100% Local Storage Reliability
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                All task data and user preferences persist using optimized Local Storage APIs. 
                The implementation includes automatic debouncing, data validation, and fallback 
                mechanisms to ensure zero data loss.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-sm text-gray-600">Automatic save on every change</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-sm text-gray-600">Schema migration support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-sm text-gray-600">Data integrity validation</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Optimized for Speed
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every interaction is optimized for sub-1-second latency. Smart code splitting, 
                lazy loading, and minimal bundle sizes ensure the app loads instantly and responds 
                immediately to user actions.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">First Contentful Paint</span>
                  <span className="text-sm font-semibold text-emerald-600">&lt; 0.8s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Time to Interactive</span>
                  <span className="text-sm font-semibold text-emerald-600">&lt; 1.5s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Task Update Latency</span>
                  <span className="text-sm font-semibold text-emerald-600">&lt; 50ms</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: UX & Design Philosophy */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-xl text-white">
              <Sparkles size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              UX & Design Philosophy
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Radical Minimalism
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Every pixel serves a purpose. The interface uses a dark color palette to reduce 
                eye strain during long focus sessions, with carefully chosen accent colors that 
                guide attention without overwhelming.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Zero UI Clutter</h4>
                    <p className="text-sm text-gray-600">Only essential controls visible at any time</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Consistent Interactions</h4>
                    <p className="text-sm text-gray-600">Predictable patterns across all features</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Contextual Actions</h4>
                    <p className="text-sm text-gray-600">Features appear when needed, hide when not</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ambient Audio Integration
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Built-in ambient soundscapes designed to enhance focus. Users can choose from 
                curated audio tracks or upload custom sounds, with full playback controls and 
                volume management.
              </p>
              <div className="bg-gradient-to-br from-emerald-50 to-purple-50 rounded-xl p-4 border border-emerald-200">
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Deep Ambient Base</span>
                    <Clock size={14} className="text-emerald-600" />
                  </div>
                  <div className="flex justify-between">
                    <span>Brown Noise Focus</span>
                    <Clock size={14} className="text-purple-600" />
                  </div>
                  <div className="flex justify-between">
                    <span>Rain / White Noise</span>
                    <Clock size={14} className="text-emerald-600" />
                  </div>
                  <div className="flex justify-between">
                    <span>Fire Crackle (Abstract)</span>
                    <Clock size={14} className="text-purple-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Technical Highlights */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-emerald-50/50 to-purple-50/50 border border-emerald-100 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Key Technical Achievements
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">TypeScript Throughout</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  100% type coverage ensures compile-time safety and enhanced developer experience. 
                  Custom types and interfaces model the entire application domain.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Responsive Design</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Mobile-first approach with fluid layouts that adapt beautifully from 320px to 
                  4K displays. Touch-optimized controls for smartphone users.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Accessibility First</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  WCAG 2.1 AA compliant with keyboard navigation, screen reader support, and 
                  high contrast mode. Inclusive design for all users.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Git Version Control</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Comprehensive commit history with semantic versioning, feature branches, and 
                  detailed documentation for maintainability.
                </p>
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
