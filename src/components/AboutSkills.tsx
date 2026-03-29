import { FileText, Cpu, Palette, Layout } from "lucide-react";

export function AboutSkills() {
  const skills = {
    core: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
    frameworks: [
      "React.js",
      "Next.js 14",
      "Tailwind CSS",
      "Bootstrap",
    ],
    tools: ["Git & GitHub", "Figma", "VS Code", "Strapi CMS"],
    design: [
      "Responsive Design",
      "UI Prototyping",
      "Wireframing",
      "Accessibility (a11y)",
    ],
  };

  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Bio Section */}
        <div className="space-y-8 px-2 sm:px-0">
          <div>
            <span className="text-purple-600 font-semibold tracking-wide text-sm uppercase">
              About Me
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
              Student, Builder, & Detail-Oriented Developer.
            </h2>
          </div>

          <div className="prose prose-lg text-gray-600">
            <p>
              I am currently a student in the{" "}
              <strong>
                New Media Design and Web Development
              </strong>{" "}
              program. My journey sits at the intersection of
              logic and creativity—I love writing clean,
              efficient code just as much as I love crafting
              intuitive user interfaces.
            </p>
            <p>
              Unlike typical students, I don't just complete
              assignments; I build products. From a full-stack
              literary platform (Mihraaq) to custom CSS layout
              engines (Almaza Kitchen), I constantly push myself
              to learn industry-standard tools like{" "}
              <strong>Next.js</strong> and{" "}
              <strong>TypeScript</strong> beyond the curriculum.
            </p>
            <p>
              I am eager to bring my work ethic and technical
              curiosity to an internship where I can contribute
              to real-world projects and grow alongside a
              professional team.
            </p>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-gray-900 font-semibold border-b-2 border-emerald-500 hover:text-emerald-600 transition-colors pb-1"
          >
            <FileText size={18} /> Download My Resume
          </a>
        </div>

        {/* Skills Grid */}
        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <Cpu className="text-emerald-500" /> Technical
            Arsenal
          </h3>

          <div className="space-y-8">
            {/* Group 1 */}
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Core & Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.core.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-medium shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Group 2 */}
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Frameworks & Libraries
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-medium shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Group 3 */}
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Design & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.tools
                  .concat(skills.design)
                  .map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-medium shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}