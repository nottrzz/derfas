import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  image: string;
}

export default function Hero({ title, subtitle, ctaText, ctaLink, image }: HeroProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden mb-12 min-h-[500px] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-900/80 to-pink-900/70" />
      
      <div className="relative max-w-4xl mx-auto text-center py-16 px-4 sm:py-24">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-xl sm:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <Link 
          to={ctaLink} 
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-600/30 transition border border-white/20 group"
        >
          {ctaText}
          <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </div>
  );
}