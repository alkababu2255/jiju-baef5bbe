import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface AppointmentRequest {
  name: string;
  email: string;
  phone: string;
  department: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, department, message }: AppointmentRequest = await req.json();

    console.log("Received appointment request:", { name, email, phone, department, message });

    // Send email to the hospital
    const hospitalEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Jiju Hospital <onboarding@resend.dev>",
        to: ["alkababu2255@gmail.com"],
        subject: `New Appointment Request from ${name}`,
        html: `
          <h1>New Appointment Request</h1>
          <p><strong>Patient Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Department:</strong> ${department}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr>
          <p><em>This is a student project website - For educational purposes only</em></p>
        `,
      }),
    });

    if (!hospitalEmailResponse.ok) {
      const errorData = await hospitalEmailResponse.text();
      console.error("Failed to send hospital email:", errorData);
      throw new Error(`Failed to send email: ${errorData}`);
    }

    console.log("Hospital email sent successfully");

    // Send confirmation email to the patient if email provided
    if (email) {
      const patientEmailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Jiju Hospital <onboarding@resend.dev>",
          to: [email],
          subject: "Appointment Request Received - Jiju Hospital",
          html: `
            <h1>Thank you for your appointment request, ${name}!</h1>
            <p>We have received your appointment request for the <strong>${department || 'General'}</strong> department.</p>
            <p>Our team will contact you shortly at <strong>${phone}</strong> to confirm your appointment.</p>
            <br>
            <p>Best regards,<br>Jiju Hospital Team</p>
            <hr>
            <p><em>Note: This is a student project website created for educational purposes only.</em></p>
          `,
        }),
      });

      if (patientEmailResponse.ok) {
        console.log("Patient confirmation email sent successfully");
      } else {
        console.error("Failed to send patient email:", await patientEmailResponse.text());
      }
    }

    return new Response(
      JSON.stringify({ success: true, message: "Appointment request sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-appointment function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
