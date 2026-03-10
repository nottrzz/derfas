import { useState } from 'react';
import { X } from 'lucide-react';

const images: { url: string; title: string; category?: string }[] = [
  { url: 'https://f.top4top.io/p_3721vtz4d1.jpeg', title: 'Ngomoon ngoding sambil liat moon', category: 'ngobar' },
  { url: 'https://e.top4top.io/p_37211b46v1.jpeg', title: 'Ngoding sama si bro di pinggir pantai', category: 'ngobar' },
  { url: 'https://f.top4top.io/p_3721m2tda2.jpeg', title: 'Gobarrrr lagiii', category: 'ngobar' },
  { url: 'https://g.top4top.io/p_3721cy4a43.jpeg', title: 'Gobarr sambil test cafe baru', category: 'ngobar' },
  { url: 'https://h.top4top.io/p_37218ovxy4.jpeg', title: 'Nongkrong ', category: 'nongkrong' },
  { url: 'https://k.top4top.io/p_3721be6pl7.jpeg', title: 'Nongkrong sambil menikmati es kelapa ', category: 'nongkrong' },
  { url: 'https://l.top4top.io/p_3721zifvv8.jpeg', title: 'Melihat sunset di pantai loang baloq ', category: 'nongkrong' },
  { url: 'https://a.top4top.io/p_37218shob9.jpeg', title: 'Ngopiii ketika kepala issing ', category: 'nongkrong' },
  { url: 'https://b.top4top.io/p_3721kbkqg10.jpeg', title: 'Tadarusan', category: 'nongkrong' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<null | { url: string; title: string }>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', 'ngobar', 'nongkrong', 'project', 'sharing'];
  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">
        <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
          Galeri Kegiatan
        </span>
      </h1>
      <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
        Dokumentasi berbagai momen seru bersama Derf4s.
      </p>

      {/* Filter kategori */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              filter === cat
                ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white'
                : 'bg-black/50 border border-red-500/30 text-gray-300 hover:bg-red-500/20'
            }`}
          >
            {cat === 'all' ? 'Semua' : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(img)}
            className="group relative rounded-2xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-orange-500 transition-all"
          >
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex items-end">
              <p className="text-white font-medium p-4 w-full text-center bg-gradient-to-r from-red-500/50 to-orange-500/50">
                {img.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-orange-500 transition"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white text-center mt-4 text-xl">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}