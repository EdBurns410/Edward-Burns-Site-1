
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
  ChevronRight,
  ChevronDown,
  Clock,
  Shield,
  MessageSquare
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
    { name: 'Process', href: '#process' },
    { name: 'Work', href: '#portfolio' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-brand-teal p-1.5 rounded-lg shadow-lg shadow-teal-500/20">
            <Database className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-brand-navy">Edward Burns</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-brand-teal transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-brand-navy text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-teal transition-all shadow-lg hover:shadow-teal-500/30">
            Start a Project
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-navy" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full border-b shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-brand-navy">
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-brand-navy text-white px-5 py-4 rounded-xl text-center font-bold">
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
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100 text-brand-teal text-xs font-bold uppercase tracking-wider mb-8 border border-teal-200">
            <Zap className="w-3 h-3" />
            Accepting New Clients for Q4
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-brand-navy">
            Turn Messy Data Into <span className="text-gradient">Revenue Engines</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
            Stop wrestling with spreadsheets. I build bespoke data tools, automated workflows, and custom web apps that eliminate busywork and clarify your strategy.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#contact" className="bg-brand-navy text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-brand-teal transition-all shadow-xl shadow-navy-900/10 hover:-translate-y-1">
              Build My Solution <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#portfolio" className="bg-white text-brand-navy border border-slate-200 px-8 py-4 rounded-xl font-bold hover:border-brand-teal hover:text-brand-teal transition-all">
              View Case Studies
            </a>
          </div>
          
          <div className="flex items-center gap-4 px-2">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://picsum.photos/seed/${i+25}/40/40`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="Client" />
              ))}
            </div>
            <div className="text-sm">
              <div className="flex text-brand-accent mb-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 font-medium"><span className="font-bold text-brand-navy">4.9/5 Rating</span> from 300+ clients</p>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-teal/10 blur-[100px] rounded-full"></div>
          
          <div className="relative">
            {/* Main Image Card */}
            <div className="glass-card rounded-3xl p-3 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
               <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                alt="Dashboard Example" 
                className="rounded-2xl w-full object-cover h-[550px]"
              />
            </div>

            {/* Floating Badge 1 */}
            <div className="absolute -left-8 top-20 glass-card p-4 rounded-2xl shadow-xl animate-in slide-in-from-left duration-1000">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg text-green-600">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Time Saved</p>
                  <p className="font-bold text-brand-navy">20hrs / Week</p>
                </div>
              </div>
            </div>

            {/* Floating Badge 2 */}
            <div className="absolute -right-8 bottom-32 glass-card p-4 rounded-2xl shadow-xl animate-in slide-in-from-right duration-1000 delay-200">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Revenue Impact</p>
                  <p className="font-bold text-brand-navy">+15% YoY Growth</p>
                </div>
              </div>
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
    <section id="impact" className="py-20 bg-white border-b border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-extrabold text-brand-navy mb-2 tracking-tight">{stat.label}</h3>
              <p className="text-slate-500 font-medium text-sm">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Discovery & Audit",
      desc: "We dive deep into your current data chaos. I identify bottlenecks, manual drudgery, and lost revenue opportunities.",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      step: "02",
      title: "Architecture",
      desc: "I design a scalable data model. Whether it's a supercharged spreadsheet or a custom web app, we plan for growth.",
      icon: <Layout className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Rapid Build",
      desc: "Using agile sprints, I build your solution. You get regular updates and prototypes to ensure it fits your needs perfectly.",
      icon: <Code2 className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Launch & Train",
      desc: "Deployment isn't the end. I ensure your team is trained, the system is stable, and the ROI starts flowing immediately.",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <section id="process" className="py-24 bg-brand-surface">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-brand-teal font-bold tracking-wider text-sm uppercase mb-2 block">How It Works</span>
          <h2 className="text-4xl font-bold text-brand-navy mb-4">From Chaos to Clarity in 4 Steps</h2>
          <p className="text-slate-600 text-lg">My proven process ensures we solve the right problems without unnecessary complexity.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>
          
          {steps.map((s, i) => (
            <div key={i} className="relative bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-brand-navy text-white rounded-2xl flex items-center justify-center text-xl font-bold mb-6 border-4 border-white shadow-lg">
                {s.icon}
              </div>
              <span className="text-6xl font-black text-slate-100 absolute top-4 right-4 -z-0 select-none">{s.step}</span>
              <h3 className="text-xl font-bold mb-3 relative z-10">{s.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed relative z-10">{s.desc}</p>
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
      title: "Bespoke Spreadsheet Systems",
      desc: "Push Excel and Google Sheets to their absolute limits. I build custom VBA/AppScript automations, complex financial models, and dashboards that feel like software.",
      icon: <Database className="w-8 h-8" />,
      tags: ["Advanced Modeling", "VBA & AppScript", "Dashboards"]
    },
    {
      title: "Workflow Automation",
      desc: "Connect your apps and eliminate manual data entry. I build invisible bridges between your CRM, Email, and Project tools using Python, Zapier, and Make.",
      icon: <Zap className="w-8 h-8" />,
      tags: ["API Integration", "Zapier/Make", "Python Scripts"]
    },
    {
      title: "Custom Web Applications",
      desc: "Outgrown your spreadsheet? I convert clunky sheets into secure, scalable, and mobile-friendly React web applications with proper databases.",
      icon: <Globe className="w-8 h-8" />,
      tags: ["React & Node.js", "SaaS Development", "Secure Portals"]
    },
    {
      title: "BI & Data Strategy",
      desc: "Stop guessing. I turn your raw data into interactive Power BI or Looker dashboards that reveal exactly where your business is making (or losing) money.",
      icon: <BarChart3 className="w-8 h-8" />,
      tags: ["Power BI", "Tableau", "Forecasting"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-teal font-bold tracking-wider text-sm uppercase mb-2 block">My Expertise</span>
            <h2 className="text-4xl font-bold mb-4 text-brand-navy">Technical Precision, Commercial Focus</h2>
            <p className="text-lg text-slate-600">I don't just write code; I build tools that improve your bottom line.</p>
          </div>
          <a href="#contact" className="hidden md:flex items-center gap-2 text-brand-teal font-bold hover:gap-3 transition-all">
            Discuss Your Needs <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div key={i} className="group p-10 rounded-[2.5rem] border border-slate-100 bg-brand-surface hover:bg-white hover:shadow-xl hover:border-brand-teal/30 transition-all duration-300">
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-teal shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-brand-teal text-white p-2 rounded-full">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-navy">{service.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed h-20">{service.desc}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wide rounded-full group-hover:bg-teal-50 group-hover:text-brand-teal transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
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
      type: "Automation Architecture",
      challenge: "Needed to unify data from 100+ digital agencies into a single reporting engine.",
      solution: "Built a Python-based ETL pipeline feeding into a custom Data Studio dashboard.",
      outcome: "£200,000+ added revenue identified in first quarter.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      client: "MoneyNext",
      type: "CRM Optimization",
      challenge: "Sales team was drowning in manual data entry for 90,000+ records.",
      solution: "Implemented bi-directional sync between HubSpot and custom SQL database.",
      outcome: "85% reduction in manual admin time.",
      img: "https://images.unsplash.com/photo-1551288049-bbbda5366f7a?auto=format&fit=crop&q=80&w=800"
    },
    {
      client: "LogisticsOne",
      type: "Web Application",
      challenge: "Legacy Excel sheets were crashing due to inventory volume (50k+ SKUs).",
      solution: "Migrated data to a React/Node.js web app with real-time inventory tracking.",
      outcome: "Zero downtime & instant multi-user access.",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-brand-navy text-white relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-teal/10 blur-[150px]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-brand-teal font-bold tracking-wider text-sm uppercase mb-2 block">Case Studies</span>
            <h2 className="text-4xl font-bold mb-4">Real Results, Not Just Code</h2>
            <p className="text-lg text-slate-400">See how I've solved complex data challenges for diverse industries.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, i) => (
            <div key={i} className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img src={caseStudy.img} alt={caseStudy.client} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-brand-navy/50"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-brand-teal text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">{caseStudy.type}</span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-teal transition-colors">
                  {caseStudy.client}
                </h3>
                <div className="space-y-4 mb-6 flex-1">
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase mb-1">Challenge</p>
                    <p className="text-slate-300 text-sm">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase mb-1">Solution</p>
                    <p className="text-slate-300 text-sm">{caseStudy.solution}</p>
                  </div>
                </div>
                <div className="pt-6 border-t border-white/10 mt-auto">
                   <div className="flex items-center gap-3">
                     <div className="p-1.5 bg-green-500/20 rounded-full text-green-400">
                       <BarChart3 className="w-4 h-4" />
                     </div>
                     <p className="font-bold text-green-400 text-sm">{caseStudy.outcome}</p>
                   </div>
                </div>
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
    { text: "Ed is the absolute best... a diamond in the rough.", author: "lukesorber", loc: "USA" },
    { text: "Top quality work... One of my most trusted sellers.", author: "damien_leach", loc: "USA" },
    { text: "Ed impresses with his meticulous approach... UI/UX skills are art.", author: "ellekay_bpt", loc: "Canada" },
    { text: "Ed is someone who solves problems. Meticulous and highly skilled.", author: "woohoopub", loc: "Thailand" }
  ];

  return (
    <section id="testimonials" className="py-24 bg-brand-surface overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-1 text-orange-500 mb-4">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" className="w-6 h-6" />)}
          </div>
          <h2 className="text-4xl font-bold mb-4 text-brand-navy">Trusted by 250+ Clients</h2>
          <p className="text-slate-600">Maintaining a 5-star reputation on global platforms.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 relative">
              <div className="absolute top-10 right-10 opacity-10">
                <MessageSquare className="w-16 h-16 text-brand-teal" />
              </div>
              <p className="text-xl italic mb-8 font-light text-slate-700 relative z-10">"{rev.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-navy text-white rounded-full flex items-center justify-center font-bold">
                  {rev.author[0].toUpperCase()}
                </div>
                <div>
                  <p className="font-bold text-lg text-brand-navy">{rev.author}</p>
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

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Can you fix my existing mess of spreadsheets?",
      a: "Absolutely. I specialize in auditing and repairing broken, slow, or error-prone spreadsheets. I can often optimize calculation speeds by 10x and add safeguards to prevent future breakage."
    },
    {
      q: "Do I need to pay for a subscription for your tools?",
      a: "Typically, no. If I build a solution within your Google or Microsoft ecosystem, you own it. If we build a custom web app, there may be minor hosting costs (usually <$20/mo), but no expensive per-user licensing fees."
    },
    {
      q: "What happens if I need changes later?",
      a: "I offer a 30-day support window after every project to fix any bugs. For ongoing updates, we can agree on an hourly rate or a monthly retainer package."
    },
    {
      q: "My data is sensitive. How do you handle security?",
      a: "I adhere to strict data privacy standards. I can sign NDAs, and I build systems that keep your data within your own cloud environment whenever possible."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-brand-navy">Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
              <button 
                className="w-full flex justify-between items-center p-6 text-left bg-slate-50 hover:bg-slate-100 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-bold text-lg text-brand-navy pr-8">{faq.q}</span>
                {openIndex === i ? <ChevronDown className="rotate-180 transition-transform" /> : <ChevronDown className="transition-transform" />}
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 pt-0 bg-slate-50 text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-surface relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-brand-navy rounded-[3rem] p-12 lg:p-20 text-white relative shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5">
            <Mail className="w-96 h-96 text-white" />
          </div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-green-500/30">
                ● Currently Accepting New Clients
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Infrastructure?</h2>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                Available for enterprise consulting and bespoke automation projects. Fill out the form, and I'll get back to you within 24 hours.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Email</p>
                    <p className="text-xl font-medium">edwardburns210@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/edburns2" className="text-xl font-medium hover:text-brand-teal transition-colors">/in/edburns2</a>
                  </div>
                </div>
              </div>
            </div>

            <form className="bg-white/5 backdrop-blur-xl p-8 lg:p-10 rounded-[2.5rem] border border-white/10 space-y-5 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-2">Name</label>
                  <input type="text" className="w-full bg-brand-navy/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-teal focus:bg-brand-navy/80 transition-all text-white placeholder:text-slate-600" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-2">Email</label>
                  <input type="email" className="w-full bg-brand-navy/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-teal focus:bg-brand-navy/80 transition-all text-white placeholder:text-slate-600" placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-2">Project Type</label>
                <div className="relative">
                  <select className="w-full bg-brand-navy/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-teal transition-all text-white appearance-none cursor-pointer">
                    <option className="bg-brand-navy text-slate-300">Spreadsheet Automation</option>
                    <option className="bg-brand-navy text-slate-300">Web App Development</option>
                    <option className="bg-brand-navy text-slate-300">Workflow Optimization</option>
                    <option className="bg-brand-navy text-slate-300">Other / Consulting</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none w-4 h-4" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-2">Message</label>
                <textarea className="w-full bg-brand-navy/50 border border-white/10 rounded-xl px-4 py-3 h-32 outline-none focus:border-brand-teal focus:bg-brand-navy/80 transition-all text-white placeholder:text-slate-600 resize-none" placeholder="Tell me about your data challenges..."></textarea>
              </div>
              <button className="w-full bg-brand-teal hover:bg-teal-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-teal-500/20 flex justify-center items-center gap-2 group">
                Send Project Inquiry <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
    <footer className="py-12 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <div className="bg-brand-teal p-1.5 rounded-lg">
              <Database className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight text-brand-navy">Edward Burns</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-brand-navy transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-brand-navy transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-brand-navy transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Edward Burns. All rights reserved.</p>
          <p>London, UK • Available Globally</p>
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
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
