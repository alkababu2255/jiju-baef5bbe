import { Layout } from "@/components/layout/Layout";

export default function Terms() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container max-w-4xl">
          <h1 className="font-display text-4xl font-bold text-foreground mb-8">
            Terms & Conditions
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg mb-6">
              Last updated: December 2024
            </p>
            
            <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the services provided by Jiju Hospital, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our services.
            </p>
            
            <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
              2. Medical Services
            </h2>
            <p>
              Our medical services are provided by qualified healthcare professionals. Treatment recommendations are based on professional medical judgment and individual patient needs. Patients have the right to seek second opinions.
            </p>
            
            <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
              3. Appointments & Cancellations
            </h2>
            <p>
              Appointments should be made in advance. We request at least 24 hours notice for cancellations. Repeated no-shows may result in scheduling restrictions.
            </p>
            
            <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
              4. Payment Terms
            </h2>
            <p>
              Payment is expected at the time of service unless prior arrangements have been made. We accept various payment methods including cash, credit/debit cards, and insurance where applicable.
            </p>
            
            <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
              5. Patient Responsibilities
            </h2>
            <p>
              Patients are expected to provide accurate medical history, follow treatment plans, and treat staff with respect. Patients should inform us of any changes in their condition.
            </p>
            
            <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
              6. Limitation of Liability
            </h2>
            <p>
              While we strive to provide the highest quality care, medical outcomes cannot be guaranteed. The hospital is not liable for outcomes that are beyond reasonable medical control.
            </p>
            
            <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
              7. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of updated terms.
            </p>
            
            <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
              8. Contact Information
            </h2>
            <p>
              For questions about these terms, please contact us at:<br />
              Email: legal@jijuhospital.com<br />
              Phone: +91 274 478 974
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
