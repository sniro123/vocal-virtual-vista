import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Let's Connect</h3>
            <p className="text-lg leading-relaxed">
              Whether you have questions about vocal coaching, want to book a lesson,
              or just want to chat about music, I'm here to help! Feel free to reach
              out through any of the following channels.
            </p>
            <div className="space-y-2">
              <p>Email: your.email@example.com</p>
              <p>Phone: (123) 456-7890</p>
              <p>Address: 123 Music Street, Melody City, MC 12345</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
            <Input
              placeholder="Your Name"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <Input
              type="email"
              placeholder="Your Email"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <Textarea
              placeholder="Your Message"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[150px]"
            />
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;