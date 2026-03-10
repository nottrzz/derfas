interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function Card({ title, description, icon }: CardProps) {
  return (
    <div className="glass p-6 rounded-2xl hover-glow transition-all duration-300 hover:-translate-y-2 group">
      {icon && <div className="text-indigo-400 mb-4 group-hover:scale-110 transition">{icon}</div>}
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
}