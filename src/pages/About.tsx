import { Users, Calendar, MapPin, Target, Eye, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Header dengan gradien merah-oranye */}
      <div className="h-[30vh] flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Tentang DERF4S
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Komunitas kreatif yang mewadahi para penggiat derf4s dari berbagai penjuru.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Grid 2 kolom untuk deskripsi dan statistik */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Kolom besar untuk cerita */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-black/40 border border-red-500/20 rounded-2xl p-6 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2">
              <Heart className="text-red-500" size={24} /> 
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Cerita Kami</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Komunitas DERF4S lahir dari kegelisahan sekelompok anak muda yang ingin 
              menciptakan ruang aman untuk berekspresi dan belajar. Berawal dari membuat group derf4s di whatsapp yang isinya 5 orang, kini kami telah berkembang menjadi lebih dari 100 anggota aktif 
              yang tersebar di berbagai kota di Indonesia.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-black/40 border border-orange-500/20 rounded-2xl p-6 backdrop-blur-sm">
              <Target className="text-orange-500 mb-3" size={32} />
              <h3 className="text-xl font-semibold text-white mb-2">Visi</h3>
              <p className="text-gray-400">
                Menjadi ekosistem kreatif terdepan yang inklusif dan mendukung setiap anggota mencapai potensi terbaiknya.
              </p>
            </div>
            <div className="bg-black/40 border border-red-500/20 rounded-2xl p-6 backdrop-blur-sm">
              <Eye className="text-red-500 mb-3" size={32} />
              <h3 className="text-xl font-semibold text-white mb-2">Misi</h3>
              <p className="text-gray-400">
                Mengadakan kegiatan dan kolaborasi project untuk mengembangkan skill dan jaringan.
              </p>
            </div>
          </div>
        </div>

        {/* Kolom statistik dengan icon */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl p-6 text-center glow-red">
            <Users className="mx-auto text-red-500 mb-2" size={40} />
            <div className="text-4xl font-bold text-white">100+</div>
            <div className="text-gray-400">Anggota Aktif</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-2xl p-6 text-center glow-orange">
            <Calendar className="mx-auto text-orange-500 mb-2" size={40} />
            <div className="text-4xl font-bold text-white">5+</div>
            <div className="text-gray-400">Kegiatan</div>
          </div>
          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl p-6 text-center">
            <MapPin className="mx-auto text-red-500 mb-2" size={40} />
            <div className="text-4xl font-bold text-white">3</div>
            <div className="text-gray-400">Kota</div>
          </div>
        </div>
      </div>

      {/* <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Yang Udah Kita Lakuin
          </span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { tahun: '2020', event: 'Founding Meeting' },
            { tahun: '2021', event: 'Workshop Design Pertama' },
            { tahun: '2022', event: 'Kopi Darat Nasional' },
            { tahun: '2023', event: 'Kolaborasi Project' },
          ].map((item, i) => (
            <div key={i} className="bg-black/40 border border-red-500/20 rounded-xl p-4 text-center">
              <div className="text-xl font-bold text-red-500">{item.tahun}</div>
              <div className="text-gray-300">{item.event}</div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Call to action gabung */}
      <div className="mt-16 text-center">
        <p className="text-gray-400 mb-4">Tertarik gabung? Yuk, jadi bagian dari DERF4S!</p>
        <a 
          href="/contact" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:from-red-700 hover:to-orange-700 transition shadow-lg"
        >
          Gabung Sekarang
        </a>
      </div>
    </div>
  );
}