import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { SmtpClient } from "https://deno.land/x/smtp@v0.13.0/mod.ts";

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
    console.log('Received submission:', { name, phone, message });

    const client = new SmtpClient();

    await client.connectTLS({
      hostname: "smtp.gmail.com",
      port: 465,
      username: Deno.env.get("GMAIL_USER")!,
      password: Deno.env.get("GMAIL_APP_PASSWORD")!,
    });

    const emailContent = `
      New Contact Form Submission:
      
      Name: ${name}
      Phone: ${phone}
      Message: ${message}
      Submitted at: ${new Date().toLocaleString()}
    `;

    await client.send({
      from: Deno.env.get("GMAIL_USER")!,
      to: Deno.env.get("GMAIL_USER")!,
      subject: "New Contact Form Submission",
      content: emailContent,
    });

    await client.close();

    return new Response(
      JSON.stringify({ message: "Notification sent successfully" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error in notify-submission function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});