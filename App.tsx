
import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Settings, 
  Globe, 
  Layout, 
  Mail, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Star, 
  Database, 
  Code2, 
  Zap, 
  CheckCircle2,
  Menu,
  X,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

// --- Components ---

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Impact', href: '#impact' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-brand-teal p-1.5 rounded-lg">
            <Database className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">Edward Burns</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-brand-teal transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-brand-navy text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-teal transition-all">
            Start a Project
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full border-b shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-brand-navy text-white px-5 py-3 rounded-xl text-center font-semibold">
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-brand-surface">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-brand-teal text-xs font-bold uppercase tracking-wider mb-6">
            <Zap className="w-3 h-3" />
            5+ Years Experience
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6">
            Data Catalyst & <span className="text-gradient">Automation Architect</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
            I bridge the gap between raw data and commercial strategy. From bespoke enterprise spreadsheets to high-scale automation frameworks, I deliver measurable growth.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#services" className="bg-brand-navy text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-brand-teal transition-all shadow-lg shadow-navy-200">
              View My Services <ArrowRight className="w-5 h-5" />
            </a>
            <div className="flex items-center gap-4 px-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/${i+10}/40/40`} className="w-10 h-10 rounded-full border-2 border-white" alt="Client" />
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold">4.9/5 Rating</p>
                <p className="text-slate-500">Across 300+ Projects</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-brand-teal/20 blur-[100px] rounded-full"></div>
          <div className="relative glass-card rounded-3xl p-4 overflow-hidden shadow-2xl rotate-1">
             <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800" 
              alt="Edward Burns Presenting" 
              className="rounded-2xl w-full object-cover h-[500px]"
            />
            <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">LATEST IMPACT</p>
                  <p className="font-bold text-lg text-brand-navy">85% Workload Reduction</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 italic">"Engineered CRM workflows that slashed manual management time at MoneyNext."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Impact: React.FC = () => {
  const stats = [
    { label: '$150k+', sub: 'Revenue uplift generated', icon: <Zap className="text-orange-500" /> },
    { label: '85%', sub: 'Efficiency gain in workflows', icon: <Settings className="text-blue-500" /> },
    { label: '300+', sub: 'Successful projects delivered', icon: <CheckCircle2 className="text-green-500" /> },
    { label: '250+', sub: 'Global clients worldwide', icon: <Globe className="text-purple-500" /> },
  ];

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:border-brand-teal transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-extrabold text-brand-navy mb-1">{stat.label}</h3>
              <p className="text-slate-500 font-medium">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Bespoke Spreadsheet Services",
      desc: "Advanced Excel and Google Sheets solutions with custom VBA/AppScript, intricate modeling, and executive-ready dashboards.",
      icon: <Database className="w-8 h-8" />,
      features: ["Certified MS Office Specialist", "Custom VBA/API integrations", "Financial & Operational Dashboards"]
    },
    {
      title: "Workflow Automation",
      desc: "End-to-end CRM and outreach systems using Zapier, HubSpot, and Python to eliminate manual drudgery.",
      icon: <Zap className="w-8 h-8" />,
      features: ["Python-led automation", "90% Reduction in manual labor", "ETL pipeline development"]
    },
    {
      title: "Spreadsheet to Web App",
      desc: "Transforming clunky tracking sheets into robust, API-linked web applications for better scaling and UI/UX.",
      icon: <Layout className="w-8 h-8" />,
      features: ["Full-stack scalability", "Secure data infrastructure", "Seamless user interfaces"]
    },
    {
      title: "Data Visualization & Strategy",
      desc: "Turning abstract numbers into decision-ready visuals via Power BI, Looker, and Tableau.",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Predictive modeling", "Real-time KPI tracking", "Executive summary design"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-surface relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">High-Impact Technical Strategy</h2>
          <p className="text-lg text-slate-600">Bridging the gap between raw data and commercial strategy with verified results.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div key={i} className="glass-card p-10 rounded-[2.5rem] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-brand-teal/10 rounded-2xl flex items-center justify-center text-brand-teal mb-8">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">{service.desc}</p>
              <ul className="space-y-3">
                {service.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-teal" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio: React.FC = () => {
  const caseStudies = [
    {
      client: "AffluentCo",
      challenge: "Needed an automation framework for a network of 100+ digital agencies.",
      outcome: "£200,000+ in additional revenue generated.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      client: "MoneyNext",
      challenge: "Managing 90,000+ prospect records with manual campaign workflows.",
      outcome: "85% reduction in manual workload via Python/Zapier.",
      img: "https://images.unsplash.com/photo-1551288049-bbbda5366f7a?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-4">Scalable Automation Case Studies</h2>
            <p className="text-lg text-slate-600">Engineered solutions for the data-driven enterprise, backed by global brands.</p>
          </div>
          <div className="flex items-center gap-8 grayscale opacity-60">
            <span className="font-bold text-slate-400">TRUSTED BY</span>
            <span className="font-black text-xl">BMW</span>
            <span className="font-black text-xl">MACY'S</span>
            <span className="font-black text-xl">BMO</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {caseStudies.map((caseStudy, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative rounded-[2rem] overflow-hidden mb-8 aspect-video shadow-lg">
                <img src={caseStudy.img} alt={caseStudy.client} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <span className="bg-brand-accent text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Featured Case Study</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-teal transition-colors flex items-center gap-2">
                {caseStudy.client} <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-slate-500 mb-6 line-clamp-2 leading-relaxed">{caseStudy.challenge}</p>
              <div className="p-6 bg-green-50 rounded-2xl border border-green-100 flex items-center gap-4">
                <div className="p-2 bg-green-500 rounded-lg text-white">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <p className="font-bold text-green-700">{caseStudy.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials: React.FC = () => {
  const reviews = [
    { text: "Ed is the absolute best... a diamond in the rough.", author: "lukesorber", loc: "US" },
    { text: "Top quality work... One of my most trusted sellers.", author: "damien_leach", loc: "US" },
    { text: "Ed impresses with his meticulous approach... UI/UX skills are art.", author: "ellekay_bpt", loc: "Canada" },
    { text: "Ed is someone who solves problems. Meticulous and highly skilled.", author: "woohoopub", loc: "Thailand" }
  ];

  return (
    <section id="testimonials" className="py-24 bg-brand-navy text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-teal/5 rounded-full blur-[120px] -mr-64"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-1 text-orange-400 mb-4">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" className="w-6 h-6" />)}
          </div>
          <h2 className="text-4xl font-bold mb-4">Trusted by 250+ Clients Worldwide</h2>
          <p className="text-teal-400 font-mono">Average Satisfaction Rating: 4.9/5</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2rem] hover:bg-white/10 transition-colors">
              <p className="text-xl italic mb-8 font-light text-slate-300">"{rev.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-teal/20 rounded-full flex items-center justify-center font-bold text-brand-teal">
                  {rev.author[0].toUpperCase()}
                </div>
                <div>
                  <p className="font-bold text-lg">{rev.author}</p>
                  <p className="text-sm text-slate-500">{rev.loc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStack: React.FC = () => {
  const techs = [
    { name: 'Python', category: 'Backend' },
    { name: 'SQL', category: 'Database' },
    { name: 'React', category: 'Web App' },
    { name: 'VBA', category: 'Excel' },
    { name: 'HubSpot', category: 'CRM' },
    { name: 'Power BI', category: 'BI' },
    { name: 'OpenAI API', category: 'AI' },
    { name: 'Zapier', category: 'Automation' },
  ];

  return (
    <section className="py-20 bg-brand-surface border-y border-slate-200">
      <div className="container mx-auto px-6 overflow-hidden">
        <div className="flex flex-wrap justify-center gap-4 md:gap-12 items-center opacity-70">
           {techs.map((tech, i) => (
             <div key={i} className="flex flex-col items-center group">
               <span className="font-mono text-sm text-slate-400 group-hover:text-brand-teal transition-colors mb-1">{tech.category}</span>
               <span className="font-bold text-lg md:text-2xl tracking-tighter text-brand-navy">{tech.name}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-brand-navy rounded-[3rem] p-12 lg:p-20 text-white relative shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Mail className="w-64 h-64 text-white" />
          </div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-8">Ready to Transform Your Infrastructure?</h2>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                Available for enterprise consulting and bespoke automation projects. Let's build a data ecosystem that drives measurable ROI.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-brand-teal">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Email</p>
                    <p className="text-xl font-medium">edwardburns210@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-brand-teal">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/edburns2" className="text-xl font-medium hover:text-brand-teal">/in/edburns2</a>
                  </div>
                </div>
              </div>
            </div>

            <form className="bg-white/5 backdrop-blur-xl p-8 lg:p-12 rounded-[2.5rem] border border-white/10 space-y-6 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400">Name</label>
                  <input type="text" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-teal transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400">Email</label>
                  <input type="email" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-teal transition-all" placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400">Project Type</label>
                <select className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-teal transition-all text-slate-400 appearance-none">
                  <option className="bg-brand-navy">Spreadsheet Automation</option>
                  <option className="bg-brand-navy">Web App Development</option>
                  <option className="bg-brand-navy">Workflow Optimization</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400">Message</label>
                <textarea className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 h-32 outline-none focus:border-brand-teal transition-all" placeholder="Tell me about your project..."></textarea>
              </div>
              <button className="w-full bg-brand-teal hover:bg-teal-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-teal-500/20">
                Send Project Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-brand-surface border-t border-slate-200">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="bg-brand-teal p-1.5 rounded-lg">
            <Database className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight">Edward Burns</span>
        </div>
        <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Edward Burns. Data Analyst & Automation Specialist.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-slate-400 hover:text-brand-navy transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="#" className="text-slate-400 hover:text-brand-navy transition-colors"><Github className="w-5 h-5" /></a>
          <a href="#" className="text-slate-400 hover:text-brand-navy transition-colors"><Mail className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Impact />
      <TechStack />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
