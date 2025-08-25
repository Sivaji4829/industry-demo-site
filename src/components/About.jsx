import React, { useState, useEffect, useRef } from "react";

// The Section component must be able to forward a ref.
// We'll use React.forwardRef to allow this.
const Section = React.forwardRef(({ id, className, children }, ref) => (
  <section ref={ref} id={id} className={`py-20 md:py-28 ${className}`}>
    <div className="container mx-auto px-6">
      {children}
    </div>
  </section>
));


const About = () => {
  const [inView, setInView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  // Observer for entry animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Effect for parallax scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // Calculate progress: 0 when top of section hits top of viewport, 1 when bottom hits top.
        const progress = -rect.top / (rect.height - window.innerHeight);
        setScrollProgress(Math.max(0, Math.min(1, progress)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate parallax offsets based on scroll progress
  const parallaxOffset1 = (scrollProgress - 0.5) * 100; // Moves up to 100px
  const parallaxOffset2 = (scrollProgress - 0.5) * 60;  // Moves up to 60px

  return (
    <Section ref={sectionRef} id="about" className="overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content with Glassmorphism and Entry Animation */}
        <div 
          className={inView ? 'animate-fadeInUp animation-delay-200' : 'initial-hidden'}
        >
          <div className="glass-card p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Zenith Steel</h2>
            <p className="text-[var(--brand-light-text)] mb-4">
              We specialize in pre-engineered buildings (PEB), structural steel fabrication,
              and turnkey industrial infrastructure. From design to installation, we bring
              precision engineering and reliable delivery.
            </p>
            <p className="text-[var(--brand-light-text)]">
              Our culture is built on safety, sustainability, and continuous innovation—
              partnering with clients to execute complex projects at scale.
            </p>
          </div>
        </div>

        {/* Image with 3D Entrance Animation */}
        <div 
          className={inView ? 'animate-rotateIn3D animation-delay-400' : 'initial-hidden'}
        >
          <div
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Parallax Wrapper for Pattern 1 */}
            <div
              className="absolute w-48 h-48 -top-12 -left-16 transition-transform duration-500 ease-out"
              style={{ transform: `translateY(${parallaxOffset1}px)` }}
            >
              <img 
                src="http://googleusercontent.com/file_content/3"
                alt="Floating decorative pattern"
                className="w-full h-full blur-xl opacity-50 animate-pulseAndFloat"
                style={{ animationDelay: '0s' }}
              />
            </div>
            
            {/* Parallax Wrapper for Pattern 2 */}
            <div
              className="absolute w-56 h-56 -bottom-12 -right-12 transition-transform duration-500 ease-out"
              style={{ transform: `translateY(${parallaxOffset2}px)` }}
            >
              <img 
                src="http://googleusercontent.com/file_content/2"
                alt="Floating decorative pattern"
                className="w-full h-full blur-xl opacity-50 animate-pulseAndFloat"
                style={{ animationDelay: '2s' }}
              />
            </div>

            {/* Main Image and Overlay */}
            <img
              src="/logos/about.png"
              className="relative z-10 w-full h-full object-cover"
              alt="Industrial fabrication"
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x450/e2e8f0/4b5563?text=Zenith+Steel'; }}
            />
            <div className="relative z-10 absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
          </div>
        </div>

      </div>
    </Section>
  );
};

export default About;
