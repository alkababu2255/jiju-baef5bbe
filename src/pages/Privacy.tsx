import { Layout } from "@/components/layout/Layout";

export default function Privacy() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container max-w-4xl">
          <h1 className="font-display text-4xl font-bold text-foreground mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg mb-6">
              Last updated: December 2024
            </p>
            
            <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
              1. Information We Collect
            </h2>
            <p>
              We collect personal information necessary for providing healthcare services, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Name, contact details, and demographic information</li>
              <li>Medical history and health records</li>
              <li>Insurance and payment information</li>
              <li>Emergency contact details</li>
            </ul>
            
            <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
              2. How We Use Your Information
            </h2>
            <p>
              Your information is used to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Provide medical care and treatment</li>
              <li>Process appointments and billing</li>
              <li>Communicate about your healthcare</li>
              <li>Comply with legal requirements</li>
              <li>Improve our services</li>
            </ul>
            
            <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
              3. Information Protection
            </h2>
            <p>
              We implement appropriate security measures to protect your personal and medical information. Access is restricted to authorized personnel only. All staff are trained in confidentiality protocols.
            </p>
            
            <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
              4. Information Sharing
            </h2>
            <p>
              We do not sell your personal information. We may share information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Other healthcare providers for your treatment</li>
              <li>Insurance companies for claims processing</li>
              <li>Legal authorities when required by law</li>
            </ul>
            
            <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
              5. Your Rights
            </h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Access your medical records</li>
              <li>Request corrections to your information</li>
              <li>Know how your information is used</li>
              <li>File complaints about privacy violations</li>
            </ul>
            
            <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
              6. Cookies & Website Data
            </h2>
            <p>
              Our website may use cookies to improve user experience. You can control cookie settings through your browser preferences.
            </p>
            
            <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
              7. Contact Us
            </h2>
            <p>
              For privacy-related inquiries, contact our Privacy Officer:<br />
              Email: privacy@jijuhospital.com<br />
              Phone: +91 274 478 974
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
