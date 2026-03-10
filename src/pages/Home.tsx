import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, Trophy, Gamepad2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-20">
      <section className="h-[30vh] flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-6xl md:text-7xl font-bold mb-4">
          <span className="text-gradient">DERF4S</span>
        </h1>
        <p className="text-2xl md:text-3xl text-orange-500 font-light tracking-wider">
          FROM DERF4S TO MASTAH
        </p>
        <div className="mt-8 h-1 w-24 mx-auto bg-gradient-to-r from-red-500 to-orange-500 rounded-full" />
      </section>

      {/* Section 2: About Singkat */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4 text-white">
            Group <span className="text-red-500">#</span>Digital Kreatif
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            DERF4S adalah wadah para kreator, developer, dan tech enthusiast untuk 
            berkolaborasi, belajar, dan bermain. Dari pemula sampai mastah, semua 
            punya tempat di sini.
          </p>
          <Link 
            to="/about" 
            className="inline-flex items-center gap-2 mt-6 text-red-500 hover:text-orange-500 transition"
          >
            Kenali lebih lanjut <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-red-500/10 p-6 rounded-2xl border border-red-500/30">
            <Users className="text-red-500 mb-2" size={32} />
            <div className="text-2xl font-bold text-white">100+</div>
            <div className="text-gray-400">Member</div>
          </div>
          <div className="bg-orange-500/10 p-6 rounded-2xl border border-orange-500/30">
            <Calendar className="text-orange-500 mb-2" size={32} />
            <div className="text-2xl font-bold text-white">5+</div>
            <div className="text-gray-400">Kegiatan</div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-white">Keseruan Yang Bakal Mu Dapetin </span>
          <span className="text-red-500">di DERF4S</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Trophy className="text-red-500" size={32} />}
            title="Workshop Eksklusif"
            description="Belajar langsung dari mastah dengan materi terkini dan praktik."
          />
          <FeatureCard 
            icon={<Users className="text-orange-500" size={32} />}
            title="Networking"
            description="Temukan teman seperjuangan dan kolaborasi untuk project."
          />
          <FeatureCard 
            icon={<Gamepad2 className="text-red-500" size={32} />}
            title="Game Corner"
            description="Bermain game seru bareng anggota dan asah otak."
          />
        </div>
      </section>

      {/* yg pnting ni sec game dh */}
      <section className="text-center py-10 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-3xl border border-red-500/30">
        <Gamepad2 size={48} className="mx-auto text-orange-500 mb-4" />
        <h2 className="text-3xl font-bold mb-2">Main Yuk!</h2>
        <p className="text-gray-400 mb-6">Coba game yang suka dimainin member derf4s, ajakin baturmu duell</p>
        <Link 
          to="/game" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:from-red-700 hover:to-orange-700 transition shadow-lg"
        >
          Mulai Game <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-black/50 border border-red-500/20 rounded-2xl p-6 hover:border-orange-500/50 transition group">
      <div className="mb-4 group-hover:scale-110 transition">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}