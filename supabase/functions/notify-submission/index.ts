import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const BREVO_API_KEY = Deno.env.get("BREVO_API_KEY");

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, message } = await req.json();
    
    if (!name || !phone || !message) {
      console.error('Missing required fields:', { name, phone, message });
      throw new Error('Missing required fields');
    }

    console.log('Preparing to send email via Brevo:', { name, phone });

    const emailContent = `
פנייה חדשה התקבלה:

שם: ${name}
טלפון: ${phone}
הודעה: ${message}

נשלח בתאריך: ${new Date().toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' })}
    `.trim();

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY!,
      },
      body: JSON.stringify({
        sender: {
          name: "Rose Vocal Studio",
          email: "Snir.roz1@gmail.com"
        },
        to: [{
          email: "Snir.roz1@gmail.com",
          name: "Rose Vocal Studio"
        }],
        subject: "פנייה חדשה - סטודיו לפיתוח קול",
        htmlContent: emailContent.replace(/\n/g, '<br>')
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Brevo API error:', errorData);
      throw new Error(`Brevo API error: ${errorData}`);
    }

    const data = await response.json();
    console.log('Email sent successfully:', data);

    return new Response(
      JSON.stringify({ message: "Email notification sent successfully" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Function error:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: 'Check the function logs for more information'
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});