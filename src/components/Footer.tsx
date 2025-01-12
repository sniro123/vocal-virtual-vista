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
            <h3 className="text-2xl font-bold">צרו קשר</h3>
            <p className="text-lg leading-relaxed">
              אני זמין לכל שאלה או בקשה שיש לכם.
              <br />
              אם אתם רוצים לקבוע שיעור, מלאו את הפרטים ואחזור אליכם בהקדם!
              <br />
              מוזמנים גם לשלוח מייל או הודעת וואטסאפ.
            </p>
            <div className="space-y-2">
              <p>כתובת: נטעים 67, הוד השרון</p>
              <p>אימייל: Snir.roz1@gmail.com</p>
              <p>טלפון: 050-507-2867</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
            <Input
              placeholder="השם שלך"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <Input
              type="tel"
              placeholder="מספר הטלפון שלך"
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