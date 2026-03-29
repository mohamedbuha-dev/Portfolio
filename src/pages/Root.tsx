import { Outlet } from "react-router";
import { useEffect } from "react";
import { FloatingCodeSnippets } from "../components/FloatingCodeSnippets";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export function Root() {
  useEffect(() => {
    // Add meta description to the document head
    let metaDescription = document.querySelector('meta[name="description"]');
    
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    
    metaDescription.setAttribute(
      'content',
      'Portfolio of Mohamed Abuohagar, a student and developer in the New Media Design and Web Development program at BCIT, specializing in React and Next.js'
    );
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      <FloatingCodeSnippets />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}