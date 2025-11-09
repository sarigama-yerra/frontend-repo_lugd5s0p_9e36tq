import { ShieldCheck, MapPin, Bot, CalendarCheck, Activity } from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: 'Symptom-Based Prediction',
    desc: 'Enter your symptoms to get likely diseases with confidence, plus medicines, diet, and exercise tips.'
  },
  {
    icon: Bot,
    title: 'AI Health Chatbot',
    desc: 'Ask health questions and get context-aware responses powered by medical datasets.'
  },
  {
    icon: ShieldCheck,
    title: 'Report Analyzer',
    desc: 'Upload PDFs or text reports. We summarize and flag abnormal values like glucose or cholesterol.'
  },
  {
    icon: CalendarCheck,
    title: 'Appointment Booking',
    desc: 'Choose a doctor, pick a slot, and receive confirmations via email or SMS.'
  },
  {
    icon: MapPin,
    title: 'Nearby Hospitals',
    desc: 'Find hospitals around you with distance, directions, and filters for 24x7 and telemedicine.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="modules" className="bg-white">
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center">Everything you need for smarter care</h2>
        <p className="text-gray-600 text-center mt-3 max-w-2xl mx-auto">A modern healthcare assistant that connects predictions, insights, and bookings in one experience.</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <f.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
