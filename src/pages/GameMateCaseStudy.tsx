import { ImageLightbox } from "../components/ImageLightbox";
import { ArrowLeft, Users, Target, Lightbulb, Palette, TrendingUp, Award, Sparkles, Zap, Layout, Code } from "lucide-react";
import { Link } from "react-router";
import homeFeed from "figma:asset/homeFeed.png";
import findTeammates from "figma:asset/findTeammates.png";
import partyLobby from "figma:asset/partyLobby.png";
import statsScreen from "figma:asset/statsScreen.png";
import profileScreen from "figma:asset/profileScreen.png";
import wireframeHome from "figma:asset/wireframeHome.png";
import wireframeTeammates from "figma:asset/wireframeTeammates.png";
import wireframeLobby from "figma:asset/wireframeLobby.png";
import wireframeStats from "figma:asset/wireframeStats.png";
import wireframeProfile from "figma:asset/wireframeProfile.png";

export function GameMateCaseStudy() {
  const designColors = [
    { name: "Primary Blue", hex: "#3980F3", usage: "CTAs, active states, interactive elements" },
    { name: "Dark Background", hex: "#303030", usage: "Card backgrounds, secondary surfaces" },
    { name: "Deep Black", hex: "#121212", usage: "Primary background, foundation layer" }
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
              GAMEMATE — A Social Companion App for Gamers
            </h1>
            <div className="flex flex-wrap gap-4 mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-700 rounded-full text-sm font-semibold">
                Product Design & Strategy
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 text-purple-700 rounded-full text-sm font-semibold">
                Lead Designer & Strategist
              </span>
            </div>
            <p className="text-2xl text-gray-600 max-w-3xl">
              Optimizing the social and strategic experience for multiplayer gaming through centralized 
              matchmaking and performance tracking
            </p>
          </div>
        </div>

        {/* Results & Impact */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Results & Impact
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              GameMate addresses a critical gap in the gaming ecosystem by unifying fragmented social and 
              performance tools into a single, cohesive platform. Through strategic design decisions and 
              user-centered architecture, GameMate transforms how gamers connect, compete, and track their progress.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <Zap size={24} />
                  <div className="text-2xl font-bold">Efficient Matchmaking</div>
                </div>
                <div className="text-sm text-white/80">
                  Developed a matchmaking concept that reduces time to find compatible teammates by filtering 
                  via behavior and playstyle rather than just skill rank
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <Layout size={24} />
                  <div className="text-2xl font-bold">Unified Platform</div>
                </div>
                <div className="text-sm text-white/80">
                  Successfully merged three fragmented utilities (matchmaking, stat tracking, and clip sharing) 
                  into one seamless dashboard
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <Users size={24} />
                  <div className="text-2xl font-bold">Social Engagement</div>
                </div>
                <div className="text-sm text-white/80">
                  Designed a social feed architecture that bridges the gap between competitive stat-tracking 
                  and casual community interaction
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Competitive Analysis */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Problem & Competitive Analysis</h2>
            
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-red-300">
                <div className="absolute -left-[5px] top-2 w-2 h-2 bg-white border-2 border-red-400 rounded-full"></div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">The Problem</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Gamers currently juggle multiple platforms—Discord for chat, GamerLink for LFG (Looking For Group), 
                  and Twitch for clips—creating a disjointed experience. This fragmentation leads to inefficiency, 
                  missed opportunities for connection, and a lack of cohesive performance tracking across games and platforms.
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-blue-400">
                <div className="absolute -left-[5px] top-2 w-2 h-2 bg-white border-2 border-blue-500 rounded-full shadow-sm"></div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Competitive Edge</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  Unlike Discord (pure chat) or Faceit (hardcore esports), GameMate targets the 16-30 age demographic 
                  with a focus on casual-to-semi-competitive social networking. The platform bridges the gap between 
                  hardcore competitive tools and casual social platforms.
                </p>
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mt-3">
                  <h5 className="text-sm font-semibold text-gray-900 mb-2">Key Differentiators:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                      <span className="text-xs text-gray-700">
                        <strong>Behavioral Matchmaking:</strong> Goes beyond skill level to match compatible personalities
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                      <span className="text-xs text-gray-700">
                        <strong>Cross-Platform Stats:</strong> Unified performance tracking across multiple games
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                      <span className="text-xs text-gray-700">
                        <strong>Social Feed:</strong> Community-driven content sharing with integrated stats
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience & Design Process */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white">
              <Users size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Design Process & System
            </h2>
          </div>

          <div className="mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Target Audience</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Primary Demographics</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                      <span className="text-sm text-gray-700">
                        <strong>Age Range:</strong> 16-30 years old
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2"></div>
                      <span className="text-sm text-gray-700">
                        <strong>Gaming Level:</strong> Casual to semi-competitive players
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                      <span className="text-sm text-gray-700">
                        <strong>Goals:</strong> Community building & performance improvement
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Pain Points</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2"></div>
                      <span className="text-sm text-gray-700">
                        Difficulty finding compatible teammates beyond skill level
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2"></div>
                      <span className="text-sm text-gray-700">
                        No centralized platform for stats across multiple games
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2"></div>
                      <span className="text-sm text-gray-700">
                        Fragmented experience across Discord, Twitch, and LFG apps
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Wireframes Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">From Concept to High-Fidelity</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The design process began with low-fidelity wireframes to establish information hierarchy and 
              user flow. Each screen was carefully planned to prioritize navigation clarity and minimize 
              cognitive load for users who need quick access to matchmaking, stats, and social features.
            </p>
            
            <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto mb-6">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-3">
                <ImageLightbox 
                  src={wireframeHome}
                  alt="Home feed wireframe showing initial layout concept"
                  className="w-full rounded-xl"
                />
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Home Feed
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-3">
                <ImageLightbox 
                  src={wireframeTeammates}
                  alt="Find Teammates wireframe with filter options"
                  className="w-full rounded-xl"
                />
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Matchmaking
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-3">
                <ImageLightbox 
                  src={wireframeLobby}
                  alt="Party Lobby wireframe showing chat interface"
                  className="w-full rounded-xl"
                />
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Party Lobby
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-3">
                <ImageLightbox 
                  src={wireframeStats}
                  alt="Stats screen wireframe with performance metrics"
                  className="w-full rounded-xl"
                />
                <p className="text-xs text-gray-500 mt-2 text-center">
                  My Stats
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-3">
                <ImageLightbox 
                  src={wireframeProfile}
                  alt="Profile wireframe showing user information layout"
                  className="w-full rounded-xl"
                />
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Profile
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Design System */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white">
              <Palette size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Visual Identity & Design System
            </h2>
          </div>

          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The visual identity draws from premium gaming aesthetics, using high-contrast dark themes that 
              reduce eye strain during extended gaming sessions while maintaining excellent readability for 
              data-heavy screens like stats and matchmaking.
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Typography & Hierarchy</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Primary Font: Inter</p>
                  <div className="text-3xl font-bold text-gray-900">
                    The quick brown fox jumps
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Bold headers for impact and immediate visual hierarchy
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-600 mb-2">Body Text & Data</p>
                  <div className="text-base text-gray-700">
                    Optimized for maximum readability in data-heavy sections like stats dashboards, 
                    matchmaking filters, and performance metrics
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Deep-Dive */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white">
              <Code size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Technical Deep-Dive
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Target className="text-blue-600" size={24} />
                Matchmaking Logic
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The matchmaking algorithm goes beyond traditional skill-based ranking to include behavioral 
                factors and playstyle preferences. This multi-dimensional approach ensures teammates are 
                compatible not just in ability, but in communication style and gaming objectives.
              </p>
              <div className="space-y-3">
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Filtering Criteria:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                      <span className="text-xs text-gray-700">
                        <strong>Behavior Score:</strong> Communication style, toxicity rating
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                      <span className="text-xs text-gray-700">
                        <strong>Playstyle:</strong> Aggressive, supportive, strategic
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                      <span className="text-xs text-gray-700">
                        <strong>Skill Level:</strong> Rank, K/D ratio, win rate
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                      <span className="text-xs text-gray-700">
                        <strong>Availability:</strong> Time zones, session length preferences
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Layout className="text-indigo-600" size={24} />
                Information Hierarchy
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Each screen prioritizes the most critical information while maintaining easy access to 
                secondary features. The navigation bar uses familiar gaming UI patterns, while the dark 
                theme reduces visual clutter and focuses attention on actionable elements.
              </p>
              <div className="space-y-3">
                <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Design Priorities:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5"></div>
                      <span className="text-xs text-gray-700">
                        <strong>Quick Actions:</strong> Prominent CTAs for "Invite" and "Find"
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5"></div>
                      <span className="text-xs text-gray-700">
                        <strong>Visual Clarity:</strong> High contrast for readability in any lighting
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5"></div>
                      <span className="text-xs text-gray-700">
                        <strong>Navigation:</strong> Bottom tab bar for thumb-friendly mobile access
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5"></div>
                      <span className="text-xs text-gray-700">
                        <strong>Data Density:</strong> Stats displayed without overwhelming the user
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* High-Fidelity Showcase */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white">
              <Sparkles size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              High-Fidelity Showcase
            </h2>
          </div>

          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The final high-fidelity designs showcase a cohesive dark-themed gaming interface that balances 
              aesthetic appeal with functional clarity. Each screen has been refined to ensure optimal user 
              experience across all core features.
            </p>

            {/* Main Screens Grid */}
            <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto mb-8">
              <div className="bg-gray-900 border border-gray-700 rounded-2xl p-3">
                <ImageLightbox 
                  src={homeFeed}
                  alt="Home feed showing social posts with game highlights from Fortnite, PUBG, and Call of Duty"
                  className="w-full rounded-xl"
                />
                <p className="text-xs text-gray-300 mt-2 text-center">
                  Home Feed
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-700 rounded-2xl p-3">
                <ImageLightbox 
                  src={findTeammates}
                  alt="Find Teammates screen with player list and invite buttons"
                  className="w-full rounded-xl"
                />
                <p className="text-xs text-gray-300 mt-2 text-center">
                  Find Teammates
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-700 rounded-2xl p-3">
                <ImageLightbox 
                  src={partyLobby}
                  alt="Party Lobby chat interface with team members"
                  className="w-full rounded-xl"
                />
                <p className="text-xs text-gray-300 mt-2 text-center">
                  Party Lobby
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-700 rounded-2xl p-3">
                <ImageLightbox 
                  src={statsScreen}
                  alt="Stats dashboard showing performance graph and game history"
                  className="w-full rounded-xl"
                />
                <p className="text-xs text-gray-300 mt-2 text-center">
                  My Stats
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-700 rounded-2xl p-3">
                <ImageLightbox 
                  src={profileScreen}
                  alt="User profile screen with activity feed and stats overview"
                  className="w-full rounded-xl"
                />
                <p className="text-xs text-gray-300 mt-2 text-center">
                  Profile
                </p>
              </div>
            </div>
          </div>

          {/* Key Features Breakdown */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Social Feed</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Bridges competitive stat-tracking with casual community interaction. Users can share highlights, 
                view friends' achievements, and engage with the gaming community without leaving the app.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Smart Matchmaking</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Filter by game, role, skill level, and playstyle. The prominent blue "Invite" buttons make 
                it easy to quickly form teams with compatible players based on behavior and preferences.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Performance Tracking</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Unified stats dashboard tracks win rate, K/D ratio, and match history across multiple games. 
                Visual graphs show performance trends over time for continuous improvement.
              </p>
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white">
              <Award size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Reflection & Key Learnings
            </h2>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              From Problem to Solution
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              This project reinforced the critical importance of transitioning from abstract problem identification 
              to concrete, data-backed high-fidelity solutions. By deeply understanding the target demographic 
              (16-30 year old gamers seeking community and improvement), I was able to design a platform that 
              addresses specific, validated pain points rather than assumed needs.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The process of balancing aesthetic gaming trends (dark themes, bold typography) with functional 
              requirements (data density, quick actions) taught me how to create interfaces that feel native to 
              the gaming ecosystem while maintaining design excellence and usability standards.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/50 border border-blue-100 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Key Takeaways
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-xl">•</span>
                <span>
                  <strong>User-centered matchmaking is multi-dimensional:</strong> Going beyond skill level to 
                  include behavior and playstyle creates more meaningful connections and better team dynamics.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold text-xl">•</span>
                <span>
                  <strong>Consolidation reduces friction:</strong> Merging three separate tools (matchmaking, 
                  stats, clips) into one platform dramatically improves the user experience and increases engagement.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-xl">•</span>
                <span>
                  <strong>Visual identity must serve the medium:</strong> Dark themes and high contrast aren't 
                  just aesthetic choices—they're functional decisions that reduce eye strain and improve readability.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold text-xl">•</span>
                <span>
                  <strong>Strategic design bridges business goals with user needs:</strong> Understanding the 
                  competitive landscape allowed me to position GameMate uniquely in the casual-to-semi-competitive space.
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
