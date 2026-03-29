import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { useState } from "react";
import profileImage from "figma:asset/profileImage.png";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xgopaobp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            Have a project in mind? Let's work together to create something amazing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Profile & Info */}
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

              <p className="text-gray-600 leading-relaxed mb-6">
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
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-xl text-white">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-medium text-gray-900 hover:text-emerald-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium text-gray-900">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                  <AlertCircle className="w-4 h-4" />
                  Something went wrong. Please try again or email directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className={`w-full px-6 py-4 text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2 ${
                  status === "success" 
                    ? "bg-emerald-500 cursor-not-allowed" 
                    : status === "submitting"
                    ? "bg-gray-400 cursor-wait"
                    : "bg-gradient-to-r from-emerald-500 to-purple-600 hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                {status === "success" ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Message Sent Successfully!
                  </>
                ) : status === "submitting" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}