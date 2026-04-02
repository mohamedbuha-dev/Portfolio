import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import profileImage from "figma:asset/profileImage.png";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mabuohagar1@my.bcit.ca",
      href: "mailto:mabuohagar1@my.bcit.ca?subject=Portfolio Inquiry"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 604 906 4109",
      href: "tel:+16049064109"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Vancouver, Canada",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/mohamedbuha-dev",
      color: "hover:text-gray-900"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohamedabuohagar",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <div style={{ paddingTop: "100px" }} className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Get In <span className="bg-gradient-to-r from-emerald-500 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm currently available for work. Let's connect!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {/* Profile Card */}
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-full blur-xl opacity-30"></div>
                  <img 
                    src={profileImage}
                    alt="Mohamed Abuohagar"
                    className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Mohamed Abuohagar</h2>
                <p className="text-gray-600 mb-4">Junior Front-End Developer & UI Specialist</p>
                <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-full"></div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 text-center">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white border border-gray-200 rounded-xl ${social.color} transition-all hover:shadow-md hover:-translate-y-1`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-3 gap-4">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-all flex flex-col items-center text-center"
                >
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-xl text-white mb-3">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 w-full flex flex-col justify-center">
                    <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="font-medium text-gray-900 hover:text-emerald-600 transition-colors text-sm break-all"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium text-gray-900 text-sm">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}