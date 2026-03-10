import { Instagram, MessageCircle } from 'lucide-react';

interface Member {
  name: string;
  role: string;
  image: string;
  instagram?: string;
  tiktok?: string;
  whatsapp?: string;
}

const members: Member[] = [
  { 
    name: 'Ochyyy', 
    role: 'Founder', 
    // image: 'https://c.top4top.io/p_37212zfea1.jpg',
    image: 'https://d.top4top.io/p_3721b8tir1.jpeg',
    instagram: '_rzmhr',
    whatsapp: '6281779802449'
  },
  { 
    name: 'My Bini', 
    role: 'Founder', 
    image: 'https://i.pinimg.com/736x/f1/22/7d/f1227d8e24b790e3b0454b89256969c2.jpg',
    instagram: '_rzmhr',
    whatsapp: '6281779802449'
  },
  { 
    name: 'Denzz', 
    role: 'Founder', 
    image: 'https://c.top4top.io/p_3721b9c5i1.jpeg',
    instagram: 'denzz',
    whatsapp: '6283113157395'
  },
  { 
    name: 'Ferrrr', 
    role: 'Founder', 
    image: 'https://i.pinimg.com/736x/1f/a7/7f/1fa77f299943becb856e6fb7e73481c6.jpg',
    instagram: '_denzz',
    whatsapp: '6281779802449'
  },
  { 
    name: 'All', 
    role: 'Founder', 
    image: 'https://i.pinimg.com/736x/dd/75/9b/dd759b033209e991272b486fad93dfb7.jpg',
    instagram: '_denzz',
    whatsapp: '6281779802449'
  },
  { 
    name: 'Evanzzz', 
    role: 'Founder', 
    image: 'https://i.pinimg.com/736x/dd/75/9b/dd759b033209e991272b486fad93dfb7.jpg',
    instagram: '_denzz',
    whatsapp: '6281779802449'
  },

];

export default function Members() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">
        <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
          Member Derf4s
        </span>
      </h1>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Mereka yang aktif berkontribusi dan siap berkolaborasi.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <div
            key={index}
            className="group bg-black/50 border border-red-500/30 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all hover:scale-105 duration-300"
          >
            {/* Foto dengan overlay */}
            <div className="relative overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end justify-center gap-4 p-4">
                {member.instagram && (
                  <a
                    href={`https://instagram.com/${member.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-red-500/80 rounded-full hover:bg-orange-500 transition"
                  >
                    <Instagram size={18} className="text-white" />
                  </a>
                )}
               
                {member.whatsapp && (
                  <a
                    href={`https://wa.me/${member.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-green-500/80 rounded-full hover:bg-green-600 transition"
                  >
                    <MessageCircle size={18} className="text-white" />
                  </a>
                )}
              </div>
            </div>
            {/* Info member */}
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-orange-500 text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}