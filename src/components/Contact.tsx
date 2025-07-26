import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Start Growing?
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Take the first step towards your transformation. Let's discuss how we can help you achieve your goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">📧</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Email Us</h4>
                  <p className="text-foreground/70">hello@shineingrowth.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-growth rounded-full flex items-center justify-center">
                  <span className="text-secondary-foreground font-bold">📞</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Call Us</h4>
                  <p className="text-foreground/70">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-success rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Visit Us</h4>
                  <p className="text-foreground/70">123 Growth Street<br />Success City, SC 12345</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="p-8 bg-card/80 backdrop-blur border-primary/10 shadow-elegant">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input placeholder="How can we help you grow?" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell us about your goals and how we can support your growth journey..."
                  rows={4}
                />
              </div>
              
              <Button variant="default" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;