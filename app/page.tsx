'use client';
import { useEffect, useState } from 'react';
import { ArrowRight, Globe, Shield, Clock, Zap, CheckCircle, Users, Phone } from 'lucide-react';
import Aurora from '@/components/Aurora';


interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-white/5 backdrop-blur-sm border border-slate-200/10 rounded-xl p-6 hover:bg-white/8 transition-all duration-300">
    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-5 h-5 text-white" />
    </div>
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
  </div>
);

export default function NooriAIWebsite() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Aurora Background - More subtle blue tones */}
      <div className="fixed inset-0 z-0 opacity-30">
        <Aurora 
          colorStops={["#1e40af", "#3b82f6", "#1e40af"]}
          blend={0.3}
          amplitude={0.7}
          speed={0.3}
        />
      </div>
      
      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-6 py-6">
          <nav className="flex justify-between items-center max-w-6xl mx-auto">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold">Noori AI</span>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors duration-200 text-sm font-medium">
              Request Demo
            </button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="inline-block bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 px-4 py-2 rounded-full text-sm mb-12 text-slate-300">
              Medical AI Translation Platform
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="text-white">
                Real-Time Medical
              </span>
              <br />
              <span className="text-blue-400">
                Translation
              </span>
            </h1>
            
            <p className="text-lg text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              HIPAA-compliant, offline AI interpreter designed specifically for clinical settings. 
              Accurate medical terminology translation available 24/7.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
                <span>Start Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-slate-600 hover:border-slate-500 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-slate-300 text-sm">Always Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">Offline</div>
              <div className="text-slate-300 text-sm">No Internet Required</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">HIPAA</div>
              <div className="text-slate-300 text-sm">Compliant & Secure</div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Built for Healthcare
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Every feature designed specifically for medical environments and patient safety
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                icon={Shield}
                title="HIPAA Compliant"
                description="Fully secure and compliant with healthcare privacy regulations."
              />
              <FeatureCard
                icon={Clock}
                title="24/7 Availability"
                description="Instant access for emergency situations and after-hours care."
              />
              <FeatureCard
                icon={Zap}
                title="Offline Capable"
                description="Works without internet connection in any environment."
              />
              <FeatureCard
                icon={Users}
                title="Medical Training"
                description="Specialized on medical datasets for accurate terminology."
              />
              <FeatureCard
                icon={CheckCircle}
                title="Verification System"
                description="Built-in transcription confirmation for accuracy."
              />
              <FeatureCard
                icon={Globe}
                title="Bidirectional"
                description="Real-time two-way communication support."
              />
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
                Solving Language Barriers in Healthcare
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-slate-300">Current Challenges</h3>
                  <div className="space-y-3 text-slate-400 text-sm">
                    <div>• Limited interpreter availability</div>
                    <div>• High operational costs</div>
                    <div>• Scheduling delays</div>
                    <div>• Emergency communication risks</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-slate-300">Our Solution</h3>
                  <div className="space-y-3 text-slate-400 text-sm">
                    <div>• Instant medical translation</div>
                    <div>• Cost-effective annual subscription</div>
                    <div>• No scheduling required</div>
                    <div>• Reliable offline functionality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Improve Patient Communication?
            </h2>
            <p className="text-lg text-slate-300 mb-10">
              Join healthcare institutions already using Noori AI for better patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
                <span>Request Pilot Study</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-slate-600 hover:border-slate-500 px-8 py-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Schedule Demo</span>
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-12 border-t border-slate-700/50">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold">Noori AI</span>
            </div>
            <div className="text-slate-400 text-sm">
              © 2024 Noori AI. Medical translation technology.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}