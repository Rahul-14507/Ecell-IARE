import { Calendar, ArrowRight } from "lucide-react";

interface EventCardProps {
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  date: string;
  onClick?: () => void;
}

export function EventCard({ badge, badgeColor, title, description, date, onClick }: EventCardProps) {
  return (
    <div 
      className="bg-[#0f1729] rounded-lg p-6 border border-gray-800 hover:border-emerald-500/50 transition-all cursor-pointer"
      onClick={onClick}
    >
      <div className="mb-4">
        <span className={`${badgeColor} text-black px-3 py-1 rounded text-xs uppercase`}>
          {badge}
        </span>
      </div>
      <h3 className="text-white mb-3">{title}</h3>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-emerald-400 text-sm">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
        <button 
          className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 text-sm transition-colors"
        >
          VIEW DETAILS
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
