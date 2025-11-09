export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">MediAI</h3>
            <p className="text-gray-600 mt-2 text-sm">An AI-powered healthcare assistant to predict diseases, analyze reports, chat with a health bot, and book appointments.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Explore</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a className="hover:text-blue-600" href="/predict">Prediction</a></li>
              <li><a className="hover:text-blue-600" href="/report-analysis">Report Analysis</a></li>
              <li><a className="hover:text-blue-600" href="/chatbot">Chatbot</a></li>
              <li><a className="hover:text-blue-600" href="/appointment">Appointment</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Medical Disclaimer</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-100 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} MediAI. All rights reserved.</p>
          <p>Built with care — not a substitute for professional advice.</p>
        </div>
      </div>
    </footer>
  );
}
