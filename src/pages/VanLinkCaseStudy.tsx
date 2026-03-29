import { ImageLightbox } from "../components/ImageLightbox";
import { ArrowLeft, Users, Target, Lightbulb, Palette, TrendingUp, Award, Sparkles } from "lucide-react";
import { Link } from "react-router";
import homeScreen from "figma:asset/homeScreen.png";
import empathyMap from "figma:asset/empathyMap.png";
import allScreens from "figma:asset/allScreens.png";
import journeyMap from "figma:asset/journeyMap.png";
import wireframes from "figma:asset/wireframes.png";
import ryanPersona from "figma:asset/ryanPersona.png";
import tripPlanner from "figma:asset/tripPlanner.png";
import tripPlannerSelected from "figma:asset/tripPlannerSelected.png";
import mapView from "figma:asset/mapView.png";
import reloadScreen from "figma:asset/reloadScreen.png";
import reloadSuccess from "figma:asset/reloadSuccess.png";
import upassRenewal from "figma:asset/upassRenewal.png";
import upassRenewed from "figma:asset/upassRenewed.png";
import wireframesCollection from "figma:asset/wireframesCollection.png";
import mapWireframe from "figma:asset/mapWireframe.png";
import vanlinkLogo from "../imports/Logo.svg";
import typeLogo from "../imports/Type.svg";

export function VanLinkCaseStudy() {
  const teamMembers = ["Yun", "Bruno", "Luisa", "Mohamed Abuohagar"];
  
  const designColors = [
    { name: "Main", hex: "#0A2A5A", usage: "Primary navigation & headers" },
    { name: "Secondary", hex: "#00AEEF", usage: "Interactive elements & CTAs" },
    { name: "Accent", hex: "#FFB400", usage: "Highlights & notifications" }
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
              VANLINK — Unified Transit & Fare Management
            </h1>
            <div className="flex flex-wrap gap-4 mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 text-blue-700 rounded-full text-sm font-semibold">
                UI/UX Strategy 2 | Group Project
              </span>
            </div>
            <div className="mb-4">
              <p className="text-lg text-gray-600">
                <span className="font-semibold">Team:</span> {teamMembers.join(", ")}
              </p>
            </div>
            <p className="text-2xl text-gray-600 max-w-3xl">
              Streamlining the Metro Vancouver commute by unifying navigation and Compass Card 
              management into a single mobile interface
            </p>
          </div>
        </div>

        {/* Results & Impact */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-emerald-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Results & Impact
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              VanLink successfully addresses the fragmentation problem facing Metro Vancouver transit users. 
              Through rigorous usability testing and iterative design, we created a unified solution that 
              significantly improves the daily commute experience for thousands of students and regular transit riders.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp size={24} />
                  <div className="text-2xl font-bold">Faster & More Convenient</div>
                </div>
                <div className="text-sm text-white/80">
                  Usability testing confirmed VanLink is significantly quicker than current web-based transit tools
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={24} />
                  <div className="text-2xl font-bold">Reduced Cognitive Load</div>
                </div>
                <div className="text-sm text-white/80">
                  Smart Route suggestions transformed into true one-tap navigation shortcuts
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <Target size={24} />
                  <div className="text-2xl font-bold">Enhanced Visibility</div>
                </div>
                <div className="text-sm text-white/80">
                  Redesigned primary actions (Reload/Renew) now visually prominent and accessible
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Opportunity */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Problem & Opportunity</h2>
            
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-red-300">
                <div className="absolute -left-[5px] top-2 w-2 h-2 bg-white border-2 border-red-400 rounded-full"></div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">The Problem</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Metro Vancouver transit users struggle with fragmented tools—switching between different 
                  apps for navigation, balance checks, and manual card reloads. This fragmentation creates 
                  frustration, delays, and increases the likelihood of missed connections or forgotten top-ups.
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-emerald-400">
                <div className="absolute -left-[5px] top-2 w-2 h-2 bg-white border-2 border-emerald-500 rounded-full shadow-sm"></div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">The Opportunity</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  VanLink creates a unified experience that combines real-time route planning with instant 
                  Compass Card wallet integration. By consolidating these critical functions, we eliminate 
                  app-switching friction and provide commuters with a seamless, intuitive transit companion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* User Context & Research */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-xl text-white">
              <Users size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              User Context & Research
            </h2>
          </div>

          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              To understand the real pain points of Metro Vancouver transit users, we conducted comprehensive 
              research including surveys, interviews, and usability testing. Our methodology focused on 
              identifying behavioral patterns and friction points in the daily commute experience.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Research Methodology</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Survey Participants</h4>
                    <p className="text-sm text-gray-600">20 local students surveyed to identify pain points</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Usability Testing</h4>
                    <p className="text-sm text-gray-600">12 participants via Maze platform for validation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ryan Wong Persona */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Primary Persona: Ryan Wong</h3>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 max-w-4xl mx-auto">
              <ImageLightbox 
                src={ryanPersona}
                alt="Ryan Wong Persona - 21-year-old student who represents frequent Metro Vancouver commuters"
                className="w-full rounded-xl"
              />
              <p className="text-xs text-gray-500 mt-3 text-center">
                Ryan Wong, 21, Student & Library Assistant - Our primary persona representing frequent transit users
              </p>
            </div>
            <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-6">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">Ryan Wong</span> is a 21-year-old student and library assistant 
                who relies heavily on public transit to get to campus, his part-time job, and football practice. 
                He represents the typical Metro Vancouver commuter who juggles multiple apps and websites to manage 
                his transit needs. Ryan's story helped us identify key opportunities for consolidation and automation.
              </p>
            </div>
          </div>

          {/* Empathy Map */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
              <ImageLightbox 
                src={empathyMap}
                alt="Empathy Map showing what Ryan says, thinks, does, and feels during his transit journey"
                className="w-full rounded-xl"
              />
              <p className="text-xs text-gray-500 mt-3 text-center">
                Empathy Map: Understanding Ryan's transit experience
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
              <ImageLightbox 
                src={journeyMap}
                alt="Customer journey map showing actions, thoughts, emotions, and opportunities across Ryan's commute"
                className="w-full rounded-xl"
              />
              <p className="text-xs text-gray-500 mt-3 text-center">
                Journey Map: Mapping pain points and opportunities
              </p>
            </div>
          </div>
        </section>

        {/* Design Process - Lean UX */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-xl text-white">
              <Lightbulb size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Design Process: Lean UX
            </h2>
          </div>

          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We adopted a Lean UX approach, following the "Think - Make - Check" iterative cycle. This methodology 
              allowed us to rapidly prototype, test, and refine our designs based on real user feedback, ensuring 
              every design decision was grounded in evidence rather than assumptions.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Think</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Research, ideation, and hypothesis formation based on user pain points and opportunities identified 
                  through surveys and interviews.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Make</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Rapid prototyping from low-fidelity wireframes to high-fidelity mockups, iterating quickly on 
                  design concepts and interaction patterns.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Check</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Validation through usability testing with 12 participants via Maze, analyzing data to inform 
                  the next iteration of designs.
                </p>
              </div>
            </div>
          </div>

          {/* Wireframes */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">From Wireframes to High-Fidelity</h3>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
              <ImageLightbox 
                src={wireframes}
                alt="Low-fidelity wireframes showing the evolution of VanLink screens"
                className="w-full rounded-xl"
              />
              <p className="text-xs text-gray-500 mt-3 text-center">
                Low-fidelity wireframes: Rapid iteration on core user flows
              </p>
            </div>
          </div>
        </section>

        {/* Design System */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-xl text-white">
              <Palette size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Design System & Visual Language
            </h2>
          </div>

          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our design system draws inspiration from Vancouver's existing transit branding while introducing 
              modern UI patterns optimized for mobile-first experiences. We prioritized accessibility, high 
              contrast, and clear visual hierarchy to ensure usability in various lighting conditions—from 
              bright daylight to dimly lit buses and trains.
            </p>

            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Color Palette</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {designColors.map((color, index) => (
                  <div key={index} className="space-y-3">
                    <div 
                      className="w-full h-24 rounded-xl border border-gray-200 shadow-sm"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-gray-900">{color.name}</span>
                        <span className="text-xs font-mono text-gray-500">{color.hex}</span>
                      </div>
                      <p className="text-xs text-gray-600">{color.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Typography</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Primary: SF Pro Display</p>
                  <div className="text-3xl font-bold text-gray-900" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}>
                    The quick brown fox jumps
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">Secondary: Inter</p>
                  <div className="text-lg text-gray-700">
                    Used for body text, labels, and supporting content across the interface
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* High-Fidelity Showcase */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-xl text-white">
              <Sparkles size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              High-Fidelity Showcase
            </h2>
          </div>

          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The final high-fidelity designs represent the culmination of our iterative process. Every screen 
              has been refined based on usability testing feedback, with particular attention to the Reload CTA, 
              Smart Route suggestions, and trip planning filters.
            </p>

            {/* All Screens Overview */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8">
              <ImageLightbox 
                src={allScreens}
                alt="Complete VanLink screen flow showing all major features and user journeys"
                className="w-full rounded-xl"
              />
              <p className="text-xs text-gray-500 mt-4 text-center">
                Complete screen flow: Launch, Login, Dashboard, Refill, Map, Planner, Profile, and Notifications
              </p>
            </div>

            {/* Key Screens Grid */}
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-3">
                <ImageLightbox 
                  src={homeScreen}
                  alt="VanLink home screen showing Compass Card balance, reload CTA, and Smart Route suggestions"
                  className="w-full rounded-xl"
                />
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Home Screen
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-3">
                <ImageLightbox 
                  src={tripPlanner}
                  alt="Trip planning screen with route filters (ECO, Fastest, Cheapest, Least Walking)"
                  className="w-full rounded-xl"
                />
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Trip Planner
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-3">
                <ImageLightbox 
                  src={tripPlannerSelected}
                  alt="Trip planning screen with Eco Route highlighted and selected"
                  className="w-full rounded-xl"
                />
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Route Selection
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-3">
                <ImageLightbox 
                  src={mapView}
                  alt="Map view showing real-time transit route"
                  className="w-full rounded-xl"
                />
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Navigation
                </p>
              </div>
            </div>
          </div>

          {/* Interaction Highlights */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Interaction Highlights</h3>
            
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Target className="text-blue-600" size={20} />
                  Prominent Reload CTA
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The Reload button is now prominently displayed on the Compass Card itself with high-contrast 
                  yellow (#FFB400) background, directly addressing user feedback about difficulty finding the 
                  reload function in the original Compass Card website.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Sparkles className="text-cyan-600" size={20} />
                  Smart Route Suggestions
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Transformed from passive suggestions into actionable one-tap shortcuts. Users can now instantly 
                  launch navigation for their frequent routes (Home → BCIT Downtown, etc.) without manual input.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <TrendingUp className="text-blue-600" size={20} />
                  Route Filter Tabs
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tab-like filters (ECO, Fastest, Cheapest, Least Walking) allow users to quickly switch between 
                  route preferences with clear visual feedback, reducing cognitive load and decision time.
                </p>
              </div>
            </div>
          </div>

          {/* Core User Flows */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Core User Flows</h3>
            
            {/* Wallet Management Flow */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-sm font-bold">1</span>
                Wallet Management & Reload
              </h4>
              <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-3">
                  <ImageLightbox 
                    src={reloadScreen}
                    alt="Reload screen showing payment options and balance selection"
                    className="w-full rounded-xl"
                  />
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Step 1: Select amount
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-3">
                  <ImageLightbox 
                    src={reloadSuccess}
                    alt="Reload successful confirmation with new balance"
                    className="w-full rounded-xl"
                  />
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Step 2: Confirmation
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-700 font-semibold">Seamless Payment</p>
                    <p className="text-xs text-gray-500 mt-1">Quick top-up</p>
                  </div>
                </div>
              </div>
            </div>

            {/* U-Pass Renewal Flow */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center text-sm font-bold">2</span>
                U-Pass Renewal
              </h4>
              <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-3">
                  <ImageLightbox 
                    src={upassRenewal}
                    alt="U-Pass renewal screen showing current pass and next month activation"
                    className="w-full rounded-xl"
                  />
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Step 1: Select renewal
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-3">
                  <ImageLightbox 
                    src={upassRenewed}
                    alt="U-Pass renewed confirmation showing scheduled activation"
                    className="w-full rounded-xl"
                  />
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Step 2: Confirmation
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-700 font-semibold">Automated Renewal</p>
                    <p className="text-xs text-gray-500 mt-1">Never miss deadline</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Flow */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center text-sm font-bold">3</span>
                Real-Time Navigation
              </h4>
              <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-3">
                  <ImageLightbox 
                    src={mapView}
                    alt="Map view showing real-time transit route with step-by-step directions"
                    className="w-full rounded-xl"
                  />
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Live navigation
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-4 md:col-span-2">
                  <h5 className="font-semibold text-gray-900 mb-4">Navigation Features</h5>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Real-Time Updates</p>
                        <p className="text-xs text-gray-600">Live bus locations and arrival predictions</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Step-by-Step Guidance</p>
                        <p className="text-xs text-gray-600">Walk times, transfers, and stop notifications</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2"></div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Accessible Information</p>
                        <p className="text-xs text-gray-600">Clear visual hierarchy for quick scanning</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Integrated Wallet</p>
                        <p className="text-xs text-gray-600">Balance visible without leaving navigation</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-xl text-white">
              <Award size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Learning Outcomes & Reflections
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Product Management & Strategy
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Leading a multidisciplinary team through the entire product lifecycle taught me the importance 
                of clear communication, scope management, and aligning design decisions with strategic goals. 
                Coordinating research, design, and testing phases required careful planning and adaptability.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-sm text-gray-600">Team coordination across research and design phases</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-sm text-gray-600">Stakeholder communication and presentation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-sm text-gray-600">Scope definition and timeline management</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Evidence Over Intuition
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The most valuable lesson from this project was learning to validate every design assumption 
                with real user data. Our usability testing with 12 participants via Maze revealed critical 
                insights that fundamentally changed our approach to Smart Routes and the Reload CTA placement.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-gray-600">12 participants tested via Maze platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-sm text-gray-600">Data-driven design iteration cycles</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-gray-600">Quantitative validation of qualitative insights</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-br from-emerald-50/50 to-purple-50/50 border border-emerald-100 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Key Takeaways
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold text-xl">•</span>
                <span>
                  <strong>User research is non-negotiable:</strong> Every design decision must be validated 
                  with real user feedback, not assumptions or personal preferences.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 font-bold text-xl">•</span>
                <span>
                  <strong>Consolidation creates value:</strong> By unifying fragmented experiences, we can 
                  dramatically reduce cognitive load and improve user satisfaction.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold text-xl">•</span>
                <span>
                  <strong>Accessibility is design excellence:</strong> High contrast, clear typography, and 
                  thoughtful color choices aren't constraints—they're opportunities to create better experiences.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 font-bold text-xl">•</span>
                <span>
                  <strong>Iterate rapidly, validate constantly:</strong> The Lean UX cycle of Think-Make-Check 
                  enabled us to fail fast, learn quickly, and ultimately deliver a solution users love.
                </span>
              </li>
            </ul>
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