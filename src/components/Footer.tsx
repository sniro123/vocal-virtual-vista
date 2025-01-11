import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "ההודעה נשלחה!",
      description: "נחזור אליך בהקדם האפשרי.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">בואו נתחבר</h3>
            <p className="text-lg leading-relaxed">
              בין אם יש לכם שאלות לגבי אימון קולי, ברצונכם לקבוע שיעור,
              או פשוט לשוחח על מוזיקה, אני כאן כדי לעזור! אתם מוזמנים ליצור
              קשר דרך כל אחד מהערוצים הבאים.
            </p>
            <div className="space-y-2">
              <p>אימייל: your.email@example.com</p>
              <p>טלפון: 123-456-7890</p>
              <p>כתובת: רחוב המוזיקה 123, עיר המנגינה</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
            <Input
              placeholder="השם שלך"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <Input
              type="email"
              placeholder="האימייל שלך"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <Textarea
              placeholder="ההודעה שלך"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[150px]"
            />
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
              שלח הודעה
            </Button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;