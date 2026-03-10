import { Instagram, Music2, Phone } from 'lucide-react';

interface MemberCardProps {
  name: string;
  role: string;
  image: string;
  instagram?: string;
  tiktok?: string;
  whatsapp?: string;
}

export default function MemberCard({ name, role, image, instagram, tiktok, whatsapp }: MemberCardProps) {
  return (
    <div className="group relative bg-black/50 border border-red-500/30 rounded-2xl overflow-hidden hover:border-orange-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]">
      {/* Image Container */}
      <div className="relative overflow-hidden h-64">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-orange-500 text-sm mb-3">{role}</p>

        {/* Social Icons */}
        <div className="flex items-center gap-3 pt-2 border-t border-red-500/30">
          {instagram && (
            <a
              href={`https://instagram.com/${instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition transform hover:scale-110"
              aria-label={`Instagram ${name}`}
            >
              <Instagram size={18} />
            </a>
          )}
          {tiktok && (
            <a
              href={`https://tiktok.com/@${tiktok}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition transform hover:scale-110"
              aria-label={`TikTok ${name}`}
            >
              <Music2 size={18} />
            </a>
          )}
          {whatsapp && (
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition transform hover:scale-110"
              aria-label={`WhatsApp ${name}`}
            >
              <Phone size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}