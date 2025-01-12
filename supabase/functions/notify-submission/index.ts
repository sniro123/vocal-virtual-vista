import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, message } = await req.json();
    
    if (!name || !phone || !message) {
      console.error('Missing required fields:', { name, phone, message });
      throw new Error('Missing required fields');
    }

    const username = Deno.env.get("GMAIL_USER");
    const password = Deno.env.get("GMAIL_APP_PASSWORD");

    if (!username || !password) {
      throw new Error('Missing SMTP credentials');
    }

    console.log('Preparing to send email with credentials:', {
      username,
      hasPassword: !!password,
    });

    const emailContent = `
New Contact Form Submission:

Name: ${name}
Phone: ${phone}
Message: ${message}

Submitted at: ${new Date().toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' })}
    `.trim();

    const emailData = {
      from: username,
      to: username,
      subject: "התקבלה פנייה חדשה - סטודיו לפיתוח קול",
      text: emailContent,
    };

    console.log('Sending email...');

    const response = await fetch('https://smtp.gmail.com/smtp/v1/send', {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + btoa(`${username}:${password}`),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('SMTP Error:', errorText);
      throw new Error(`SMTP Error: ${errorText}`);
    }

    console.log('Email sent successfully');

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