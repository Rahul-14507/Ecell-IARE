import { Header } from "./components/Header";
import { EventCard } from "./components/EventCard";
import { TeamCard } from "./components/TeamCard";
import { Footer } from "./components/Footer";
import { TerminalLoader } from "./components/TerminalLoader";
import { EventDetailModal } from "./components/EventDetailModal";
import { Button } from "./components/ui/button";
import { useState } from "react";

// Event data structure
const allEvents = [
  {
    id: 1,
    category: "Hackathons",
    badge: "HACKATHON",
    badgeColor: "bg-red-500",
    title: "CodeNova: The Startup Hackathon",
    description: "Join Digital at the cutting-edge gathering where top entrepreneurs meet to push boundaries, and network with fellow innovators.",
    date: "Oct 25-26, 2025",
    fullDescription: "This is the detailed description of CodeNova. Participants must form teams of 1-4 and come prepared with their laptops. Food and snacks will be provided on campus. Mentors from successful startups will be present to guide the teams through the development process. The focus is on rapid prototyping and business viability.",
    teamSize: "1 - 4 Members",
    deadline: "2 days left",
    prize: "₹50,000 + Incubation Slot",
    stages: [
      {
        number: 1,
        title: "Idea Submission (Round 1)",
        date: "Oct 28",
        description: "Initial concept pitches are submitted online. No coding required for this round. Only a concise problem statement and proposed solution are needed.",
        badge: "FREE",
        badgeColor: "bg-emerald-500"
      },
      {
        number: 2,
        title: "Prototype Development (Round 2)",
        date: "Nov 10-11",
        description: "24-hour physical hackathon on campus for selected teams. Must submit a functional prototype by the end of the event.",
        badge: "PAID/REGISTRATION REQUIRED",
        badgeColor: "bg-orange-500"
      },
      {
        number: 3,
        title: "Final Pitch & Demo",
        date: "Nov 15",
        description: "Top 5 teams present their solutions to a panel of investors and industry experts. Winner receives funding and incubation support.",
        badge: "INVITATION ONLY",
        badgeColor: "bg-purple-500"
      }
    ]
  },
  {
    id: 2,
    category: "Workshops",
    badge: "WORKSHOP",
    badgeColor: "bg-orange-500",
    title: "The Art of the Pitch Deck",
    description: "A hands-on session to guide you on preparing a pitch deck for investors. Build credibility, gain and polish your pitch. See you there!",
    date: "Nov 5, 2025",
    fullDescription: "Learn from a successful venture capitalist how to create compelling pitch decks that capture investor attention. This workshop covers storytelling, financial projections, market analysis, and presentation techniques. Bring your laptop and your idea!",
    teamSize: "Individual",
    deadline: "18 days left",
    prize: "Certificate + Mentorship",
    stages: [
      {
        number: 1,
        title: "Workshop Registration",
        date: "Oct 20",
        description: "Register for the workshop and receive preparation materials. Limited seats available - first come, first served.",
        badge: "OPEN NOW",
        badgeColor: "bg-emerald-500"
      },
      {
        number: 2,
        title: "Live Workshop Session",
        date: "Nov 5",
        description: "Full-day interactive workshop with hands-on exercises. Learn pitch deck fundamentals and get real-time feedback.",
        badge: "IN-PERSON",
        badgeColor: "bg-blue-500"
      },
      {
        number: 3,
        title: "Pitch Practice & Feedback",
        date: "Nov 12",
        description: "Optional follow-up session where participants can present their pitch decks and receive personalized feedback.",
        badge: "OPTIONAL",
        badgeColor: "bg-gray-500"
      }
    ]
  },
  {
    id: 3,
    category: "Hackathons",
    badge: "HACKATHON",
    badgeColor: "bg-red-500",
    title: "Founders' Conclave 2025",
    description: "Meet the giants of the startup world. A full day of keynote speeches, panel discussions, and networking with top entrepreneurs and investors.",
    date: "Dec 10, 2025",
    fullDescription: "An exclusive gathering of startup founders, investors, and industry leaders. Features keynote speeches from successful entrepreneurs, panel discussions on current trends, and extensive networking opportunities. Perfect for aspiring entrepreneurs and early-stage founders.",
    teamSize: "Open to All",
    deadline: "53 days left",
    prize: "Networking + Knowledge",
    stages: [
      {
        number: 1,
        title: "Early Bird Registration",
        date: "Oct 20 - Nov 15",
        description: "Register early to secure your spot and get access to exclusive pre-event materials and networking platform.",
        badge: "₹500",
        badgeColor: "bg-emerald-500"
      },
      {
        number: 2,
        title: "Main Event Day",
        date: "Dec 10",
        description: "Full-day conference with keynotes, panels, startup showcase, and networking sessions. Breakfast, lunch, and refreshments included.",
        badge: "ALL DAY EVENT",
        badgeColor: "bg-purple-500"
      },
      {
        number: 3,
        title: "Post-Event Networking",
        date: "Dec 10 Evening",
        description: "Informal networking dinner with speakers and attendees. Great opportunity to build meaningful connections.",
        badge: "VIP ONLY",
        badgeColor: "bg-orange-500"
      }
    ]
  },
  {
    id: 4,
    category: "Workshops",
    badge: "WORKSHOP",
    badgeColor: "bg-orange-500",
    title: "Product Management Fundamentals",
    description: "Learn the essentials of product management from industry experts. Understand user research, roadmapping, and agile methodologies.",
    date: "Nov 20, 2025",
    fullDescription: "A comprehensive workshop on product management covering the entire product lifecycle. Topics include user research, feature prioritization, roadmap planning, working with engineering teams, and measuring success.",
    teamSize: "Individual",
    deadline: "33 days left",
    prize: "Certificate + Career Guide",
    stages: [
      {
        number: 1,
        title: "Registration & Pre-work",
        date: "Nov 1",
        description: "Complete registration and receive pre-workshop reading materials to maximize learning during the session.",
        badge: "FREE",
        badgeColor: "bg-emerald-500"
      },
      {
        number: 2,
        title: "Workshop Day",
        date: "Nov 20",
        description: "Interactive full-day workshop with case studies, group exercises, and real-world examples from successful products.",
        badge: "HYBRID MODE",
        badgeColor: "bg-blue-500"
      }
    ]
  },
  {
    id: 5,
    category: "Others",
    badge: "NETWORKING",
    badgeColor: "bg-cyan-500",
    title: "Startup Mixer & Demo Day",
    description: "Casual networking event where student startups showcase their projects. Meet co-founders, find team members, or discover investment opportunities.",
    date: "Nov 15, 2025",
    fullDescription: "A relaxed evening event bringing together the startup community. Student teams will demo their projects, followed by open networking with free food and drinks. Great for finding co-founders, team members, or just learning what others are building.",
    teamSize: "Open to All",
    deadline: "28 days left",
    prize: "Free Food & Networking",
    stages: [
      {
        number: 1,
        title: "RSVP & Demo Submission",
        date: "Nov 1",
        description: "Register to attend and optionally submit your project for the demo showcase. Demo slots are limited.",
        badge: "FREE",
        badgeColor: "bg-emerald-500"
      },
      {
        number: 2,
        title: "Mixer Event",
        date: "Nov 15",
        description: "Evening event with startup demos, networking sessions, and refreshments. Casual dress code.",
        badge: "EVENING EVENT",
        badgeColor: "bg-purple-500"
      }
    ]
  },
  {
    id: 6,
    category: "Others",
    badge: "COMPETITION",
    badgeColor: "bg-yellow-500",
    title: "Business Plan Competition",
    description: "Submit your business plan and compete for seed funding. Judges include successful entrepreneurs and angel investors.",
    date: "Dec 5, 2025",
    fullDescription: "Annual business plan competition open to all students. Submit a comprehensive business plan for your startup idea. Top 10 teams will pitch to a panel of judges. Winners receive seed funding and mentorship.",
    teamSize: "1 - 5 Members",
    deadline: "48 days left",
    prize: "₹1,00,000 Seed Funding",
    stages: [
      {
        number: 1,
        title: "Business Plan Submission",
        date: "Nov 15",
        description: "Submit a detailed business plan including market analysis, financial projections, and go-to-market strategy.",
        badge: "DOCUMENT REQUIRED",
        badgeColor: "bg-orange-500"
      },
      {
        number: 2,
        title: "Shortlist Announcement",
        date: "Nov 25",
        description: "Top 10 teams will be selected based on their business plans and invited to the final pitch round.",
        badge: "EVALUATION",
        badgeColor: "bg-blue-500"
      },
      {
        number: 3,
        title: "Final Pitch Day",
        date: "Dec 5",
        description: "Selected teams present their business plans to judges. 15-minute pitch followed by Q&A.",
        badge: "LIVE PITCH",
        badgeColor: "bg-red-500"
      }
    ]
  }
];

export default function App() {
  const [activeFilter, setActiveFilter] = useState("Upcoming Events");
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<typeof allEvents[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filters = ["Upcoming Events", "Workshops", "Hackathons", "Others"];

  const handleFilterChange = (filter: string) => {
    if (filter === activeFilter) return;
    
    setShowContent(false);
    setIsLoading(true);
    setActiveFilter(filter);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowContent(true);
  };

  const handleEventClick = (event: typeof allEvents[0]) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const filteredEvents = activeFilter === "Upcoming Events" 
    ? allEvents 
    : allEvents.filter(event => event.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#060b16] text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-6xl mb-4">
            Upcoming E-Cell Initiatives
          </h1>
          <p className="text-gray-400 mb-8">
            // BOOTSTRAPPING VENTURES, STARTUP ACCELERATION, AND IDEA VALIDATION...
          </p>
          
          <div className="flex flex-wrap gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-6 py-2 text-sm transition-all ${
                  activeFilter === filter
                    ? "bg-transparent text-emerald-400 border-b-2 border-emerald-500"
                    : "bg-transparent text-gray-400 border-b-2 border-transparent hover:text-gray-300"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {isLoading && (
            <TerminalLoader 
              category={activeFilter} 
              onComplete={handleLoadingComplete} 
            />
          )}

          {showContent && !isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  badge={event.badge}
                  badgeColor={event.badgeColor}
                  title={event.title}
                  description={event.description}
                  date={event.date}
                  onClick={() => handleEventClick(event)}
                />
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-emerald-400 text-2xl mb-6">
            // ABOUT E-CELL
          </h2>
          <p className="text-gray-300 max-w-4xl leading-relaxed">
            The Entrepreneurship Cell is dedicated to fostering an innovative ecosystem within the college. We believe every 
            student has the potential to be a job creator, not just a job seeker. We provide mentorship, workshops, 
            and opportunities necessary to cultivate ideas and launch successful startups.
          </p>
        </div>
      </section>
      
      {/* Team Directory */}
      <section id="team" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-emerald-400 text-2xl mb-8">
            // CORE TEAM DIRECTORY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TeamCard
              name="Simeen Ali"
              role="President"
              description="Leads the E-Cell vision and strategy, fostering an entrepreneurial ecosystem and driving innovation across campus."
            />
            <TeamCard
              name="Rex Rayan"
              role="Vice President"
              description="Supports strategic initiatives and manages key partnerships to expand E-Cell's impact and reach."
            />
            <TeamCard
              name="Devansh"
              role="CR Lead"
              description="Coordinates community relations and ensures seamless communication across all E-Cell activities and events."
            />
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-emerald-400 text-2xl mb-8">
            // CONTACT & SUPPORT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0f1729] rounded-lg p-6 border border-gray-800">
              <div className="mb-2 text-gray-400 text-sm">Email</div>
              <a 
                href="mailto:ecell.support@ecelliare.edu"
                className="text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                ecell.support@ecelliare.edu
              </a>
              <div className="mt-4 mb-2 text-gray-400 text-sm">Office</div>
              <p className="text-white">Innovation Center, Ground Floor</p>
            </div>
            <div className="bg-[#0f1729] rounded-lg p-6 border border-gray-800">
              <p className="text-gray-300 mb-4">
                For general enquiries, partnership opportunities, or mentorship questions, don't hesitate:
              </p>
              <Button 
                className="bg-emerald-500 hover:bg-emerald-600 text-black w-full"
                onClick={() => window.open('https://forms.gle/TQJSeBbfUaGmBdDt7', '_blank')}
              >
                SEND US A MESSAGE (via Google Form)
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />

      {selectedEvent && (
        <EventDetailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          event={{
            title: selectedEvent.title,
            badge: selectedEvent.badge,
            badgeColor: selectedEvent.badgeColor,
            description: selectedEvent.fullDescription,
            teamSize: selectedEvent.teamSize,
            deadline: selectedEvent.deadline,
            prize: selectedEvent.prize,
            stages: selectedEvent.stages
          }}
        />
      )}
    </div>
  );
}
