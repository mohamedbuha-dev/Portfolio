import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    // خلفية رمادية فاتحة جداً ومريحة للعين مع خط علوي ناعم
    <footer id="contact" className="bg-gray-50 py-16 px-6 border-t border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* القسم الرئيسي: دعوة بسيطة للتواصل */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's work together.
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            Creating seamless web experiences. I'm always open to discussing new projects or opportunities.
          </p>
          
          {/* زر التواصل: بسيط، وعند الهوفر يأخذ ألوان الموقع */}
          <Link 
            to="/contact"
            className="group inline-flex items-center justify-center px-8 py-3 text-base font-medium transition-all duration-300 ease-in-out rounded-full border-2 border-gray-200 text-gray-700 hover:border-transparent hover:bg-gradient-to-r hover:from-emerald-500 hover:to-purple-600 hover:text-white hover:shadow-md hover:-translate-y-0.5"
          >
            Contact
          </Link>
        </div>

        {/* فاصل بسيط */}
        <div className="w-24 h-px bg-gray-200 mx-auto mb-10"></div>

        {/* القسم السفلي: الاسم وأيقونات التواصل */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* الاسم والوصف */}
          <div className="text-center md:text-left">
            <p className="font-bold text-gray-900 text-lg">Mohamed Abuohagar</p>
            <p className="text-gray-500 text-sm">Front-End Developer</p>
          </div>
          
          {/* أيقونات السوشيال ميديا: رمادية وتتلون عند الهوفر */}
          <div className="flex items-center gap-4">
            {[
              { icon: <Github size={20} />, href: "https://github.com/mohamedbuha-dev", label: "GitHub" },
              { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/mohamedabuohagar", label: "LinkedIn" },
              { icon: <Mail size={20} />, href: "mailto:mabuohagar1@my.bcit.ca?subject=Portfolio Inquiry", label: "Email" },
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href}
                aria-label={social.label}
                target={social.label !== "Email" ? "_blank" : undefined}
                rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                className="p-2 text-gray-400 transition-all duration-300 hover:text-emerald-600 hover:bg-emerald-50 rounded-full hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        {/* حقوق الملكية بسيطة في الأسفل */}
        <div className="mt-10 text-gray-400 text-xs">
          © {new Date().getFullYear()}. Made with focus on simplicity and detail.
        </div>

      </div>
    </footer>
  );
}