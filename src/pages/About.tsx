import { AboutSkills } from "../components/AboutSkills";
import { Code2, Sparkles, Rocket } from "lucide-react";

export function About() {
  return (
    <div style={{ paddingTop: "100px" }} className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-emerald-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate developer crafting exceptional digital experiences
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-lg text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">My Journey</h2>
            </div>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I am a New Media Design graduate from BCIT with a passion for making the
                web look good and work smoothly. I believe great development shouldn't be complicated.
              </p>
              
              <p>
                With a toolkit that includes Figma, Front-end technologies, and the Adobe Creative Suite, I
                help startups launch their visions quickly and effectively.
              </p>
              
              <p>
                When I'm not coding, I'm refining my craft to ensure every pixel serves a purpose.
              </p>
            </div>
          </div>
        </div>

        {/* What I Do */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            What I Do
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Code2,
                title: "Front-End Development",
                description: "Building responsive, performant web applications using React, Next.js, and modern JavaScript."
              },
              {
                icon: Sparkles,
                title: "UI/UX Design",
                description: "Creating intuitive user interfaces with attention to detail, accessibility, and user experience."
              },
              {
                icon: Rocket,
                title: "Performance Optimization",
                description: "Ensuring fast load times and smooth interactions through code optimization and best practices."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="p-3 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-xl text-white w-fit mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <AboutSkills />
      </div>
    </div>
  );
}