import Spline from '@splinetool/react-spline';
import { ArrowRight, Stethoscope } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[90vh] overflow-hidden bg-[#0B1220]">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay to improve text contrast (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B1220]/30 via-[#0B1220]/60 to-[#0B1220]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-[80vh]">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/15 mb-6">
            <Stethoscope size={18} />
            <span className="text-sm">AI Healthcare Assistant</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            Predict. Analyze. Book. Your Health, Powered by AI.
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/80">
            Get disease predictions from symptoms, analyze medical reports, chat with an AI doctor assistant, find nearby hospitals, and book appointments — all in one secure platform.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#modules"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors text-white px-6 py-3 font-medium"
            >
              Explore Features <ArrowRight size={18} />
            </a>
            <a
              href="#book"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white px-6 py-3 font-medium"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
