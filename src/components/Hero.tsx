import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Shine
            </span>{" "}
            Brighter,{" "}
            <span className="bg-gradient-growth bg-clip-text text-transparent">
              Grow
            </span>{" "}
            Stronger
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl leading-relaxed">
            Unlock your potential and accelerate your success with our proven growth strategies. 
            Transform your goals into achievements with personalized guidance and expert insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="default" size="lg" className="text-lg px-8 py-6">
              Start Your Journey
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary rounded-full animate-pulse opacity-60"></div>
      <div className="absolute bottom-1/3 right-1/6 w-6 h-6 bg-accent rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
      <div className="absolute top-1/2 right-1/8 w-2 h-2 bg-secondary rounded-full animate-pulse opacity-80 animation-delay-2000"></div>
    </section>
  );
};

export default Hero;