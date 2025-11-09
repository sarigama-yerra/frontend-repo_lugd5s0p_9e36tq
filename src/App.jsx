import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import QuickActions from './components/QuickActions';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Hero />
      <QuickActions />
      <FeatureGrid />
      <Footer />
    </div>
  );
}

export default App;
