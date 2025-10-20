interface TeamCardProps {
  name: string;
  role: string;
  description: string;
}

export function TeamCard({ name, role, description }: TeamCardProps) {
  return (
    <div className="bg-[#0f1729] rounded-lg p-6 border border-gray-800">
      <h3 className="text-white mb-1">{name}</h3>
      <div className="text-emerald-400 text-sm mb-3">{role}</div>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
