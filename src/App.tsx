import { useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { 
  Briefcase, 
  LineChart, 
  FileText, 
  MessageSquare, 
  ArrowRight,
  Star
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [, setClickCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleLogoClick = () => {
    setClickCount((prev) => {
      const newCount = prev + 1;
      if (newCount === 5) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
        return 0;
      }
      return newCount;
    });
  };

  return (
    <>
      {showConfetti && <Confetti recycle={false} numberOfPieces={500} />}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer select-none"
            onClick={handleLogoClick}
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <img src="/image.png" alt="HireFlow AI Logo" className="w-full h-full object-cover rounded-lg" />
            </div>
            <span className="font-bold text-lg tracking-tight">HireFlow AI</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/70">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-foreground/70 hover:text-white transition-colors hidden sm:block">
              Login
            </button>
            <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-white/90 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 text-sm font-medium text-primary mb-8">
          <Star className="w-4 h-4" />
          <span>Introducing AI Interview Coach 2.0</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
          Stop Guessing Your Way Into a Job.
        </h1>
        <p className="text-lg md:text-xl text-foreground/60 mb-10 max-w-2xl mx-auto leading-relaxed">
          Track applications, improve your resume, and prepare for interviews with AI-powered insights built for students and fresh graduates.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group">
            Get Started Free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto glass border border-white/10 px-8 py-3 rounded-full font-medium hover:bg-white/5 transition-all">
            View Demo
          </button>
        </div>
      </motion.div>
    </section>
  );
};

const DashboardPreview = () => {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="rounded-2xl border border-white/10 bg-[#111] overflow-hidden shadow-2xl relative"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-50" />
        
        {/* Browser Header */}
        <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2 bg-[#0a0a0a]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {/* Applications Tracked */}
          <div className="glass p-6 rounded-xl border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/20 rounded-lg text-primary">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white/90">Applications Tracked</h3>
            </div>
            <div className="text-4xl font-bold mb-2">42</div>
            <div className="text-sm text-green-400 flex items-center gap-1">
              <LineChart className="w-4 h-4" />
              +12 this week
            </div>
          </div>

          {/* Resume Score */}
          <div className="glass p-6 rounded-xl border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white/90">Resume Score</h3>
            </div>
            <div className="text-4xl font-bold mb-2 text-purple-400">85/100</div>
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
              <div className="bg-purple-500 w-[85%] h-full rounded-full" />
            </div>
            <div className="mt-2 text-xs text-white/50">Top 15% of candidates</div>
          </div>

          {/* Interview Readiness */}
          <div className="glass p-6 rounded-xl border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white/90">Interview Readiness</h3>
            </div>
            <div className="text-4xl font-bold mb-2 text-green-400">High</div>
            <div className="text-sm text-white/60">Ready for Google SWE round</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Briefcase className="w-6 h-6 text-primary" />,
      title: "Application Tracker",
      description: "Keep all your applications in one place. Track statuses, deadlines, and follow-ups automatically."
    },
    {
      icon: <FileText className="w-6 h-6 text-purple-400" />,
      title: "Resume Analyzer",
      description: "Get instant AI feedback on your resume. Optimize keywords to pass ATS filters every time."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-green-400" />,
      title: "Interview Coach",
      description: "Practice with our AI interviewer. Receive real-time feedback on your answers, tone, and pacing."
    }
  ];

  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Everything you need to land the offer.</h2>
        <p className="text-foreground/60 text-lg">Powerful tools designed specifically for the modern job hunt.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 rounded-2xl glass border border-white/5 hover:border-white/10 transition-colors group cursor-default"
          >
            <div className="mb-6 p-3 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-foreground/60 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Build Your Profile",
      description: "Upload your current resume and tell us your target roles."
    },
    {
      number: "02",
      title: "Track & Optimize",
      description: "Add applications to your board and let AI tailor your resume."
    },
    {
      number: "03",
      title: "Ace the Interview",
      description: "Practice mock interviews tailored to the specific role and company."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">How it works</h2>
        <p className="text-foreground/60 text-lg">From application to offer in three simple steps.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 relative">
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="relative flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 rounded-full bg-[#111] border border-white/10 flex items-center justify-center font-mono font-bold text-lg mb-6 z-10">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
            <p className="text-foreground/60">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass rounded-3xl p-12 border border-white/10 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-primary/5" />
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to launch your career?</h2>
          <p className="text-lg text-foreground/60 mb-8 max-w-xl mx-auto">
            Join thousands of students who have already landed their dream jobs using HireFlow AI.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all text-lg">
            Start Your Free Trial
          </button>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <img src="/image.png" alt="HireFlow AI Logo" className="w-5 h-5 object-contain rounded-sm" />
          <span className="font-semibold">HireFlow AI</span>
        </div>
        <div className="text-foreground/40 text-sm text-center md:text-left">
          © {new Date().getFullYear()} HireFlow AI. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm text-foreground/60">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

// --- App ---

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <DashboardPreview />
        <Features />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
