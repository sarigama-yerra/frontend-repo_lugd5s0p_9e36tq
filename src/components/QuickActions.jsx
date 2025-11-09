import { Stethoscope, FileText, Bot, MapPin, Calendar } from 'lucide-react';

const actions = [
  { label: 'Predict Disease', icon: Stethoscope, href: '/predict' },
  { label: 'Analyze Report', icon: FileText, href: '/report-analysis' },
  { label: 'Chat with AI', icon: Bot, href: '/chatbot' },
  { label: 'Find Hospitals', icon: MapPin, href: '/hospitals' },
  { label: 'Book Appointment', icon: Calendar, href: '/appointment' },
];

export default function QuickActions() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Quick actions</h2>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700">View all</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {actions.map((a) => (
            <a key={a.label} href={a.href} className="group rounded-xl bg-white p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <a.icon size={20} />
              </div>
              <span className="text-gray-800 group-hover:text-blue-700 text-sm font-medium">{a.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
