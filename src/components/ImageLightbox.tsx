import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

interface ImageLightboxProps {
  src: string;
  alt: string;
  className?: string;
}

export function ImageLightbox({ src, alt, className = "" }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = () => setIsOpen(true);
  const closeLightbox = () => setIsOpen(false);

  return (
    <>
      {/* Thumbnail with zoom indicator */}
      <div className="relative group cursor-zoom-in" onClick={openLightbox}>
        <img src={src} alt={alt} className={className} />
        
        {/* Zoom overlay indicator */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-3 shadow-lg transform group-hover:scale-110">
            <ZoomIn className="w-6 h-6 text-gray-900" />
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-8 md:right-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-3 transition-all hover:scale-110 z-10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image container */}
          <div 
            className="relative max-w-7xl max-h-[90vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={src} 
              alt={alt} 
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Helper text */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            Click anywhere to close
          </div>
        </div>
      )}
    </>
  );
}
