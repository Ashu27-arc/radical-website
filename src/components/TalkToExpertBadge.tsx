interface TalkToExpertBadgeProps {
  className?: string;
  onClick?: () => void;
}

export default function TalkToExpertBadge({ className = "", onClick }: TalkToExpertBadgeProps) {
  return (
    <div 
      className={`bg-blue-600 text-white px-4 py-2 rounded-lg z-10 cursor-pointer hover:bg-blue-700 transition-colors ${className}`}
      onClick={onClick}
    >
      <span className="text-sm">Talk To An Expert</span>
    </div>
  );
}