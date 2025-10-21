import { X, Users, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState, useEffect, useRef } from "react";

interface EventStage {
  number: number;
  title: string;
  date: string;
  description: string;
  badge: string;
  badgeColor: string;
}

interface EventDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: {
    title: string;
    badge: string;
    badgeColor: string;
    description: string;
    teamSize: string;
    deadline: string;
    prize: string;
    stages: EventStage[];
  };
}

export function EventDetailModal({ isOpen, onClose, event }: EventDetailModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Restore scroll position when modal closes
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  // Prevent scroll propagation to background
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollTop, scrollHeight, clientHeight } = container;
    const isScrollingDown = e.deltaY > 0;
    const isAtTop = scrollTop === 0;
    const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 1;

    // Prevent scrolling the background when at boundaries
    if ((isAtTop && !isScrollingDown) || (isAtBottom && isScrollingDown)) {
      e.preventDefault();
    }
  };

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://formspree.io/f/mandgwaa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          event: event.title,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ fullName: "", email: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-[#0f1729] border border-gray-700 rounded-lg w-full max-w-6xl max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gray-700 flex-shrink-0">
          <h2 className="text-emerald-400">{event.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 overflow-hidden flex-1">
          {/* Left side - Event Details */}
          <div 
            ref={scrollContainerRef}
            onWheel={handleWheel}
            className="lg:col-span-2 space-y-6 overflow-y-auto pr-4 custom-scrollbar"
          >
            <div className="flex items-center gap-4">
              <span className={`${event.badgeColor} text-black px-3 py-1 rounded text-xs uppercase`}>
                {event.badge}
              </span>
            </div>

            <div>
              <h3 className="text-white mb-3">Event Overview:</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {event.description}
              </p>
            </div>

            <div>
              <h3 className="text-white mb-4">Stages & Timelines:</h3>
              <div className="space-y-4">
                {event.stages.map((stage) => (
                  <div key={stage.number} className="border-l-2 border-emerald-500 pl-4">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-black text-sm flex-shrink-0">
                        {stage.number}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white">{stage.title}</h4>
                        <div className="text-emerald-400 text-sm mb-2">{stage.date}</div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-2">
                          {stage.description}
                        </p>
                        <span className={`${stage.badgeColor} text-black px-2 py-1 rounded text-xs uppercase`}>
                          {stage.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Registration Form */}
          <div className="lg:col-span-1 overflow-y-auto custom-scrollbar">
            <div className="bg-[#1a2332] rounded-lg p-6 sticky top-0">
              <div className="text-center mb-6">
                <div className="text-emerald-400 mb-2">{event.prize}</div>
                <div className="text-gray-400 text-sm">{event.prize.includes("₹") ? "Prizes Worth" : ""}</div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span className="text-gray-400">Team Size</span>
                  <span className="ml-auto text-white">{event.teamSize}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span className="text-gray-400">Deadline</span>
                  <span className="ml-auto text-red-400">{event.deadline}</span>
                </div>
              </div>

              <h3 className="text-white mb-4">Register Now</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  required
                  className="bg-[#0f1729] border-gray-700 text-white placeholder:text-gray-500"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-[#0f1729] border-gray-700 text-white placeholder:text-gray-500"
                />

                {submitStatus === "success" && (
                  <div className="text-emerald-400 text-sm text-center">
                    Registration successful! We'll contact you soon.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="text-red-400 text-sm text-center">
                    Something went wrong. Please try again.
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-black"
                >
                  {isSubmitting ? "SUBMITTING..." : "REGISTER NOW"}
                </Button>
              </form>

            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0f1729;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #10b981;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #059669;
        }
      `}</style>
    </div>
  );
}
