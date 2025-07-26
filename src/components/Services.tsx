import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Personal Development Coaching",
      description: "One-on-one coaching sessions to help you identify strengths, overcome limitations, and achieve personal excellence.",
      features: ["Individual Assessment", "Goal Setting", "Progress Tracking", "Mindset Development"],
      popular: false,
    },
    {
      title: "Business Growth Consulting",
      description: "Strategic consulting to scale your business, optimize operations, and maximize profitability.",
      features: ["Business Strategy", "Process Optimization", "Team Development", "Growth Planning"],
      popular: true,
    },
    {
      title: "Leadership Development",
      description: "Comprehensive leadership training to build confident, effective leaders who inspire and drive results.",
      features: ["Leadership Skills", "Team Management", "Communication", "Decision Making"],
      popular: false,
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-growth bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Tailored solutions designed to accelerate your growth and unlock your full potential.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`p-8 relative ${
                service.popular 
                  ? 'border-primary shadow-glow bg-gradient-to-b from-primary/5 to-primary/10' 
                  : 'bg-card/50 backdrop-blur border-border/50'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-hero text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={service.popular ? "default" : "outline"} 
                className="w-full"
              >
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;