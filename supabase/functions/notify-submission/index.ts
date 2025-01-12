import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";

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
    
    // Input validation
    if (!name || !phone || !message) {
      console.error('Missing required fields:', { name, phone, message });
      throw new Error('Missing required fields');
    }

    console.log('Starting email process with credentials:', {
      username: Deno.env.get("GMAIL_USER"),
      hasPassword: !!Deno.env.get("GMAIL_APP_PASSWORD"),
    });

    const client = new SmtpClient();

    try {
      console.log('Connecting to SMTP server...');
      await client.connectTLS({
        hostname: "smtp.gmail.com",
        port: 465,
        username: Deno.env.get("GMAIL_USER"),
        password: Deno.env.get("GMAIL_APP_PASSWORD"),
      });
      console.log('Successfully connected to SMTP server');

      const emailContent = `
        New Contact Form Submission:
        
        Name: ${name}
        Phone: ${phone}
        Message: ${message}
        
        Submitted at: ${new Date().toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' })}
      `;

      console.log('Sending email...');
      await client.send({
        from: Deno.env.get("GMAIL_USER")!,
        to: Deno.env.get("GMAIL_USER")!,
        subject: "התקבלה פנייה חדשה - סטודיו לפיתוח קול",
        content: emailContent,
      });
      console.log('Email sent successfully');

    } catch (smtpError) {
      console.error('SMTP Error:', smtpError);
      throw smtpError;
    } finally {
      console.log('Closing SMTP connection...');
      await client.close();
      console.log('SMTP connection closed');
    }

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