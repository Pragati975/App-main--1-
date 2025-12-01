"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

/* -------------------------
   Public images (put these in public/assets/)
   ------------------------- */
const HERO = "/assets/hero-bg.jpg";
const SURVEILLANCE = "/assets/surveillance.jpg";
const AI_SYSTEM = "/assets/ai-system.jpg";
const COMMAND_CENTER = "/assets/command-center.jpg";

/* -------------------------
   Inline SVG icon components
   ------------------------- */
const Shield = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2l7 3v6c0 5-3.582 9.74-7 11-3.418-1.26-7-6-7-11V5l7-3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const Brain = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 3v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M8 4a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M16 4a4 4 0 014 4v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M7 15a5 5 0 0110 0v2H7v-2z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);
const Satellite = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M21 3l-6 6M3 21l6-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
    <circle cx="16" cy="16" r="1.5" fill="currentColor"/>
  </svg>
);
const Lock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="4" y="11" width="16" height="9" rx="2" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M8 11V8a4 4 0 118 0v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);
const AlertTriangle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M12 9v4M12 17h.01" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);
const Target = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
);

/* -------------------------
   Small CTA Button component
   ------------------------- */
const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "solid" | "outline"; size?: "lg" | "md" }
> = ({ children, variant = "solid", size = "md", ...props }) => {
  const base = "rounded-2xl font-bold transition-all duration-200 inline-flex items-center justify-center";
  const sizes: Record<string, string> = { md: "px-6 py-3 text-base", lg: "px-8 py-6 text-lg" };
  const solid = "bg-primary text-primary-foreground hover:bg-primary/90";
  const outline = "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground";
  return (
    <button className={`${base} ${sizes[size]} ${variant === "solid" ? solid : outline}`} {...props}>
      {children}
    </button>
  );
};

/* -------------------------
   Motion variants & helpers
   ------------------------- */
const heroInnerVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay } },
});

/* -------------------------
   Main page (export)
   ------------------------- */
export default function Index() {
  // scroll-based opacity (like useTransform(scrollYProgress, [0,0.2], [1,0]))
  const { scrollY } = useScroll();
  // useScroll returns scrollYMotionValue in framer v8+ as useScroll returns { scrollY, scrollYProgress } — still use useTransform on scrollYProgress:
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0], { clamp: true });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <HeroSection opacity={opacity} />

      <ProblemSection />
      <MissionSection />
      <MapSection />
      <FeaturesSection />
      <TechnologySection />
      <CTASection />

      {/* Global CSS (colors, helper keyframes) */}
      <style jsx global>{`
        :root {
          --bg: #0b1020;
          --card: #071022;
          --foreground: #e6eef8;
          --muted: #9fb0c8;
          --primary: #22c55e;
          --primary-foreground: white;
          --alert: #fb7185;
          --accent: #34d399;
        }

        .bg-background { background-color: var(--bg); }
        .bg-card { background-color: var(--card); }
        .text-foreground { color: var(--foreground); }
        .text-muted-foreground { color: var(--muted); }
        .text-primary { color: var(--primary); }
        .text-alert { color: var(--alert); }
        .text-accent { color: var(--accent); }
        .bg-primary { background-color: var(--primary); }
        .text-primary-foreground { color: var(--primary-foreground); }
        .border-primary { border-color: rgba(34,197,94,0.6); }

        .hero-text { font-size: 6rem; line-height: 0.95; letter-spacing: -0.02em; font-weight: 800; }
        @media (max-width: 768px) { .hero-text { font-size: 3.2rem; } }

        .dot-pattern {
          background-image: radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 18px 18px;
          mix-blend-mode: overlay;
        }

        @keyframes floatDot {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(16px); opacity: 0.7; }
          100% { transform: translateY(0); opacity: 1; }
        }

        .animate-dot { animation: floatDot 1.6s infinite ease-in-out; }

        .alert-badge { background: rgba(251,113,133,0.08); color: var(--alert); padding: 6px 12px; border-radius: 999px; font-weight: 700; letter-spacing: .08em; display:inline-block; }
        .feature-card { background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); padding: 1.5rem; border-radius: 1rem; border: 1px solid rgba(255,255,255,0.03); }
      `}</style>
    </div>
  );
}

/* -------------------------
   Hero Section (uses Framer Motion heavily)
   ------------------------- */
function HeroSection({ opacity }: { opacity: any }) {
  // in-view mounting for stagger
  const innerRef = useRef(null);
  const isIn = useInView(innerRef, { once: true, margin: "-120px" });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.02 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image src={HERO} alt="RAKSHAK Command Center" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(11,16,32,0.9)] via-[rgba(11,16,32,0.6)] to-[rgba(11,16,32,0.9)]" />
        </motion.div>
      </div>

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Hero Content */}
       <motion.div
        ref={innerRef}
        className="relative z-10 container mx-auto px-6 text-center"
        style={{ opacity }}
        initial="hidden"
        animate={isIn ? "show" : "hidden"}
        variants={{ show: {}, hidden: {} }}
      >
        <motion.div variants={heroInnerVariant} initial="hidden" animate={isIn ? "show" : "hidden"}>
          <div className="inline-block mb-6">
            <span className="alert-badge"></span>
          </div>
   
             <motion.h1
            className="hero-text font-display uppercase mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-[var(--primary)] to-foreground"
            variants={fadeInUp(0.1)}
          >
            RAKSHAK
          </motion.h1>

          <motion.h2
            className="section-title font-display uppercase mb-8 text-primary"
            variants={fadeInUp(0.25)}
          >
            The Security
            <br />
            India Needs
          </motion.h2>

          <motion.p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed" variants={fadeInUp(0.4)}>
            Indigenous AI-Integrated Ambush Prediction & Decision Support System
            <br />
            <span className="text-primary font-semibold">Securing Sensitive Zones for Atma-nirbhar Bharat</span>
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-16" variants={fadeInUp(0.6)}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-bold" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}>
              Explore System
            </Button>

            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-bold" onClick={() => alert("Docs (frontend demo)")}>
              View Documentation
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator (looping) */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4"></p>
          <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto flex items-start justify-center p-2">
            <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" animate={{ y: [0, 16, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* -------------------------
   ProblemSection (Framer animations)
   ------------------------- */
function ProblemSection() {
  const ref = useRef(null);
  const isIn = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section ref={ref} className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(34,197,94,0.03)] to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={isIn ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto">
          <h2 className="section-title font-display uppercase text-center mb-12">The <span className="text-primary">Challenge</span></h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={isIn ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="feature-card">
              <div className="w-12 h-12 text-alert mb-4"><AlertTriangle className="w-full h-full" /></div>
              <h3 className="text-2xl font-bold mb-3">Critical Security Gaps</h3>
              <p className="text-muted-foreground">Recent incidents at Pahalgam and other sensitive regions expose vulnerabilities due to complex terrain, dense forest cover, and limited communication infrastructure.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={isIn ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="feature-card">
              <div className="w-12 h-12 text-primary mb-4"><Target className="w-full h-full" /></div>
              <h3 className="text-2xl font-bold mb-3">Need for Indigenous Solution</h3>
              <p className="text-muted-foreground">While India has advanced satellite data (ISRO) and surveillance hardware (DRDO & BEL), no indigenous automated ambush prediction system exists.</p>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={isIn ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.6 }} className="text-center">
            <p className="text-xl text-foreground font-medium">RAKSHAK addresses this critical need with cutting-edge AI technology and indigenous innovation.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------
   Mission Section & Card
   ------------------------- */
function MissionSection() {
  const missions = [
    { image: SURVEILLANCE, title: "Advanced Surveillance", description: "Multi-modal data integration from ISRO satellites, DRDO hardware, and ground sensors for comprehensive threat detection.", icon: Satellite, delay: 0.2 },
    { image: AI_SYSTEM, title: "Agentic AI Authentication", description: "Intelligent AI agents validate and authenticate data streams, generating real-time ambush risk scores with unprecedented accuracy.", icon: Brain, delay: 0.4 },
    { image: COMMAND_CENTER, title: "Decision Support System", description: "Spatial knowledge graph-based system with human-in-loop processing for enhanced situational awareness and rapid response.", icon: Shield, delay: 0.6 },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title font-display uppercase text-center mb-16">Core <span className="text-primary">Capabilities</span></motion.h2>

        <div className="space-y-32">
          {missions.map((m, i) => (
            <MissionCard key={i} image={m.image} title={m.title} description={m.description} Icon={m.icon} delay={m.delay} reverse={i % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MissionCard({ image, title, description, Icon, delay, reverse }: any) {
  const ref = useRef(null);
  const isIn = useInView(ref, { once: true, margin: "-120px" });

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 80 }} animate={isIn ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay }} className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? "md:flex-row-reverse" : ""}`}>
      <div className={`relative ${reverse ? "md:order-2" : ""}`}>
        <div className="relative overflow-hidden rounded-lg shadow-2xl">
          <Image src={image} alt={title} width={1400} height={900} className="w-full h-[400px] object-cover transition-transform duration-700 hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,16,32,0.8)] to-transparent" />
        </div>

        <motion.div initial={{ scale: 0 }} animate={isIn ? { scale: 1 } : {}} transition={{ duration: 0.5, delay: delay + 0.3 }} className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-xl animate-pulse-glow">
          <Icon className="w-12 h-12 text-primary-foreground" />
        </motion.div>
      </div>

      <div className={reverse ? "md:order-1" : ""}>
        <motion.h3 initial={{ opacity: 0, x: reverse ? 50 : -50 }} animate={isIn ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: delay + 0.2 }} className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase">{title}</motion.h3>

        <motion.p initial={{ opacity: 0, x: reverse ? 50 : -50 }} animate={isIn ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: delay + 0.4 }} className="text-lg text-muted-foreground leading-relaxed">{description}</motion.p>
      </div>
    </motion.div>
  );
}

/* -------------------------
   Map Section
   ------------------------- */
function MapSection() {
  const ref = useRef(null);
  const isIn = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(251,113,133,0.05)] to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isIn ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-12">
          <h2 className="section-title font-display uppercase mb-6">Threat <span className="text-alert">Intelligence</span></h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Real-time monitoring of red alert zones and critical border regions with AI-powered threat assessment.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={isIn ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="relative h-[600px] rounded-lg overflow-hidden border-2 border-[rgba(34,197,94,0.15)] shadow-2xl">
          <div className="w-full h-full bg-gradient-to-br from-[rgba(159,176,200,0.2)] to-[rgba(11,16,32,0.02)] flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 text-primary mx-auto mb-6 animate-pulse">
                <Shield className="w-full h-full" />
              </div>
              <p className="text-2xl font-display uppercase text-primary mb-2">Interactive Threat Map</p>
              <p className="text-muted-foreground">India-Pakistan Border | Red Alert Zones | Live Monitoring</p>
              <p className="text-sm text-muted-foreground mt-4">(Map integration: Mapbox GL JS with real-time data overlay)</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isIn ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="feature-card text-center"><div className="text-3xl font-bold text-alert mb-2">24/7</div><p className="text-muted-foreground">Continuous Monitoring</p></div>
          <div className="feature-card text-center"><div className="text-3xl font-bold text-primary mb-2">98.7%</div><p className="text-muted-foreground">Prediction Accuracy</p></div>
          <div className="feature-card text-center"><div className="text-3xl font-bold text-accent mb-2">&lt;2s</div><p className="text-muted-foreground">Response Time</p></div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------
   Features Section
   ------------------------- */
function FeaturesSection() {
  const features = [
    { icon: Brain, title: "Multi-Modal AI Integration", description: "Seamless integration of satellite imagery, ground sensors, and intelligence data through advanced AI processing.", color: "text-primary" },
    { icon: Shield, title: "Agentic Data Authentication", description: "Intelligent AI agents verify and validate all data sources, ensuring reliability and eliminating false positives.", color: "text-primary" },
    { icon: Target, title: "Risk Score Generation", description: "Real-time ambush risk assessment with predictive analytics and threat level classification.", color: "text-alert" },
    { icon: Satellite, title: "Spatial Knowledge Graph", description: "Advanced graph-theoretic approach for constraint-based decision support and situational awareness.", color: "text-primary" },
    { icon: Lock, title: "Human-in-Loop Processing", description: "Combines AI automation with human expertise for critical decision-making scenarios.", color: "text-accent" },
    { icon: AlertTriangle, title: "Real-Time Alerts", description: "Instant notification system for high-risk situations with automated response protocols.", color: "text-alert" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title font-display uppercase text-center mb-16">
          System <span className="text-primary">Features</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <FeatureCard key={idx} icon={f.icon} title={f.title} description={f.description} color={f.color} delay={idx * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, description, color, delay }: any) {
  const ref = useRef(null);
  const isIn = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isIn ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }} className="feature-card group">
      <div className={`${color} mb-4 w-16 h-16`}><Icon className="w-full h-full" /></div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}

/* -------------------------
   Technology Section
   ------------------------- */
function TechnologySection() {
  const ref = useRef(null);
  const isIn = useInView(ref, { once: true });
  const technologies = [
    "ISRO Satellite Data Integration",
    "DRDO Surveillance Hardware",
    "BEL Communication Systems",
    "Machine Learning & Deep Learning",
    "Graph Neural Networks",
    "Natural Language Processing",
    "Computer Vision & Image Analysis",
    "Real-Time Data Processing",
    "Geospatial Intelligence (GEOINT)",
    "Predictive Analytics",
  ];

  return (
    <section ref={ref} className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(34,197,94,0.05)] to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isIn ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="section-title font-display uppercase text-center mb-16">
          Technology <span className="text-primary">Stack</span>
        </motion.h2>

        <motion.div initial={{ opacity: 0 }} animate={isIn ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {technologies.map((tech, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} animate={isIn ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.4, delay: 0.1 * i }} className="bg-background border border-[rgba(255,255,255,0.03)] rounded-lg px-6 py-4 text-center font-medium hover:border-primary hover:shadow-lg transition-all duration-300">
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------
   CTA Section
   ------------------------- */
function CTASection() {
  const ref = useRef(null);
  const isIn = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-[rgba(34,197,94,0.12)] via-transparent to-transparent relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <motion.div initial={{ opacity: 0, y: 50 }} animate={isIn ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-display font-bold uppercase mb-6">Join the Mission</h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">Building an indigenous defense ecosystem for a secure and self-reliant India</p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-xl font-bold" onClick={() => alert("Get Started (demo)")}>Get Started</Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-7 text-xl font-bold" onClick={() => alert("Contact Team (demo)")}>Contact Team</Button>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={isIn ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="mt-16 text-sm text-muted-foreground">
          <p>Smart India Hackathon 2025 | Problem Statement ID: SIH25135</p>
          <p className="mt-2">Theme: Smart Automation for Atma-nirbhar Bharat</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
