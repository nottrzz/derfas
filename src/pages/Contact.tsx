import { useState } from 'react';
import { Send, Mail, Phone, Instagram, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const WHATSAPP_NUMBER = '6281779802449'; 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!formData.name || !formData.email || !formData.message) {
      alert('Harap isi semua field!');
      setIsSubmitting(false);
      return;
    }
    const message = `Halo DERF4S! 👋%0A%0A` +
      `*Nama:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Pesan:*%0A${formData.message.replace(/\n/g, '%0A')}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Hubungi Kami
          </span>
        </h1>
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-red-500 to-orange-500 rounded-full" />
        <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
          Punya pertanyaan, ide, atau ingin gabung? Kami siap mendengar!
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3 bg-black/50 border border-red-500/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-white mb-6">Kirim Pesan</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-red-500/30 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-600"
                placeholder="Masukkan nama"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-red-500/30 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-600"
                placeholder="contoh@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Pesan <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-red-500/30 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-600 resize-none"
                placeholder="Tulis pesanmu..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-orange-700 transition flex items-center justify-center gap-2 group disabled:opacity-50"
            >
              {isSubmitting ? 'Mengirim...' : 'Kirim'}
              <Send size={18} className="group-hover:translate-x-1 transition" />
            </button>
          </form>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="bg-black/50 border border-orange-500/30 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-4">Informasi Kontak</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <Mail className="text-red-500" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white">derf4s@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-500/20 rounded-lg">
                  <Phone className="text-orange-500" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <p className="text-white">+62 83151888009</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <Instagram className="text-red-500" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Instagram</p>
                  <p className="text-white">@derf4s</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-500/20 rounded-lg">
                  <MapPin className="text-orange-500" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Lokasi</p>
                  <p className="text-white">Lombok NTB</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <Clock className="text-red-500" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Jam Operasional</p>
                  <p className="text-white">Senin - Jumat, 09:00 - 21:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/50 border border-red-500/30 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white mb-3">Lokasi Sekretariat</h3>
            <p className="text-gray-400 mb-2">Batu-Belek, Pringgabaya, Indonesia</p>
            <div className="h-32 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center border border-dashed border-red-500/50">
              <p className="text-gray-500 text-sm">belum adaa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}