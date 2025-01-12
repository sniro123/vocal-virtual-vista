import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white" aria-label="אודות הסטודיו">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 animate-fade-in">
            <img
              src="/lovable-uploads/ac85240f-a851-4587-92d3-615681b56c01.png"
              alt="שניר - מורה לפיתוח קול בסטודיו רוז"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <article className="w-full md:w-1/2 space-y-6 animate-slide-in">
            <h1 className="text-4xl font-bold text-primary">פיתוח קול בדרך חדשה</h1>
            <p className="text-secondary text-lg leading-relaxed">
              שלום! קוראים לי שניר ואני מורה לפיתוח קול.
              
              במהלך שנות לימודי במכללת רימון נתקלתי בהמון זמרים שפנו אליי ואמרו שהם מרגישים תקועים מבחינה ווקאלית, ושהם לא רואים התקדמות משמעותית בפיתוח קול שהם נמצאים בו כרגע, זה מאוד הפתיע אותי כי בשיעורים שלי אני חווה שיפור ניכר בקול שלי כל שיעור, לקחתי על עצמי משימה להבין ולחקור לעומק את השיטה בה אני לומד ומלמד, ואיך היא שונה משאר השיטות.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;