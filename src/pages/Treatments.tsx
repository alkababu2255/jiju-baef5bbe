import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Star } from "lucide-react";

const treatments = [
  {
    name: "Health Checkup Packages",
    description: "Comprehensive preventive health screening packages for all age groups.",
    packages: [
      { name: "Basic Health Checkup", price: "₹1,999", features: ["Blood Tests", "Urine Analysis", "ECG", "Doctor Consultation"] },
      { name: "Executive Health Checkup", price: "₹4,999", features: ["Complete Blood Panel", "Cardiac Screening", "Liver & Kidney Function", "Chest X-Ray", "Specialist Consultation"] },
      { name: "Master Health Checkup", price: "₹9,999", features: ["All Executive Tests", "MRI/CT Scan", "Cardiac Stress Test", "Bone Density", "Comprehensive Report"] }
    ]
  },
  {
    name: "Cardiac Care Packages",
    description: "Specialized heart care packages from screening to treatment.",
    packages: [
      { name: "Cardiac Screening", price: "₹3,499", features: ["ECG", "2D Echo", "Lipid Profile", "TMT", "Cardiologist Consultation"] },
      { name: "Angiography Package", price: "₹25,000", features: ["Complete Cardiac Workup", "Angiography Procedure", "2-Day Hospital Stay", "Medications", "Follow-up Care"] }
    ]
  },
  {
    name: "Orthopedic Packages",
    description: "Joint care and surgical packages with comprehensive support.",
    packages: [
      { name: "Knee Replacement", price: "₹1,50,000", features: ["Surgery & Implant", "5-Day Hospital Stay", "Physiotherapy", "Medications", "Follow-up Visits"] },
      { name: "Hip Replacement", price: "₹1,75,000", features: ["Surgery & Implant", "7-Day Hospital Stay", "Rehabilitation", "All Medications", "3-Month Follow-up"] }
    ]
  },
  {
    name: "Maternity Packages",
    description: "Complete care for expectant mothers from prenatal to postnatal.",
    packages: [
      { name: "Normal Delivery", price: "₹35,000", features: ["Delivery Charges", "3-Day Stay", "Baby Care", "Vaccination", "Lactation Support"] },
      { name: "C-Section Package", price: "₹60,000", features: ["Surgery Charges", "5-Day Stay", "Complete Baby Care", "All Medications", "Follow-up Visits"] }
    ]
  }
];

export default function Treatments() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Treatment & Packages
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Affordable Healthcare Packages
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe quality healthcare should be accessible to all. Our treatment packages are designed to provide comprehensive care at transparent, affordable prices.
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20">
        <div className="container">
          {treatments.map((category, categoryIndex) => (
            <div key={category.name} className="mb-16 last:mb-0">
              <div className="mb-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {category.name}
                </h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.packages.map((pkg, index) => (
                  <div
                    key={pkg.name}
                    className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50 animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {index === 1 && (
                      <div className="flex items-center gap-1 text-accent mb-2">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-xs font-medium">Most Popular</span>
                      </div>
                    )}
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {pkg.name}
                    </h3>
                    <div className="mb-4">
                      <span className="font-display text-3xl font-bold text-primary">
                        {pkg.price}
                      </span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full" variant={index === 1 ? "default" : "outline"}>
                      <Link to="/contact">Book Now</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-card">
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              Important Information
            </h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• All package prices are indicative and may vary based on individual requirements.</li>
              <li>• Additional investigations or procedures may be recommended based on clinical findings.</li>
              <li>• Prices include room charges, nursing care, and standard medications.</li>
              <li>• Special implants or devices may incur additional charges.</li>
              <li>• Contact us for customized packages based on your specific needs.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-hero">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Need a Custom Package?
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            We can create personalized treatment packages based on your specific healthcare needs.
          </p>
          <Button asChild size="lg" variant="hero-outline">
            <Link to="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
