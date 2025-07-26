import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Empowering Your{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Growth Journey
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            At ShineingGrowth, we believe every individual and organization has unlimited potential. 
            Our mission is to unlock that potential through strategic guidance, proven methodologies, 
            and personalized support.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center bg-card/50 backdrop-blur border-primary/10 shadow-elegant">
            <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl text-primary-foreground font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Strategic Vision</h3>
            <p className="text-foreground/70">
              We help you develop a clear, actionable roadmap that aligns with your goals and accelerates your success.
            </p>
          </Card>
          
          <Card className="p-8 text-center bg-card/50 backdrop-blur border-primary/10 shadow-elegant">
            <div className="w-16 h-16 bg-gradient-growth rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl text-secondary-foreground font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Expert Guidance</h3>
            <p className="text-foreground/70">
              Our experienced team provides personalized coaching and mentorship to overcome challenges and maximize potential.
            </p>
          </Card>
          
          <Card className="p-8 text-center bg-card/50 backdrop-blur border-primary/10 shadow-elegant">
            <div className="w-16 h-16 bg-gradient-success rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl text-primary-foreground font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Measurable Results</h3>
            <p className="text-foreground/70">
              We focus on delivering tangible outcomes that drive real growth and sustainable success in your endeavors.
            </p>
          </Card>
        </div>
        
        <div className="text-center">
          <Button variant="default" size="lg">
            Discover Our Approach
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;