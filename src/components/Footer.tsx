import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";

const Footer = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    try {
      console.log('Submitting form data:', { name, phone, message });
      
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{ name, phone, message }]);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      // Trigger the edge function to send email notification
      const { error: functionError } = await supabase.functions.invoke('notify-submission', {
        body: { name, phone, message },
      });

      if (functionError) {
        console.error('Edge function error:', functionError);
        // Don't throw here as the data is already saved
      }

      toast({
        title: "ההודעה נשלחה!",
        description: "נחזור אליך בהקדם האפשרי.",
      });
      
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "שגיאה בשליחת הטופס",
        description: "אנא נסה שוב מאוחר יותר.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              name="name"
              placeholder="השם שלך"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <Input
              name="phone"
              type="tel"
              placeholder="מספר הטלפון שלך"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <Textarea
              name="message"
              placeholder="ההודעה שלך"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[150px]"
            />
            <Button 
              type="submit" 
              className="w-full bg-accent hover:bg-accent/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "שולח..." : "שלח הודעה"}
            </Button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;