import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const doctors = [
  {
    name: "Dr. Ramesh Kumar",
    specialty: "Cardiology",
    experience: "25+ years",
    education: "MBBS, MD, DM (Cardiology)",
    description: "Chief Cardiologist specializing in interventional cardiology and heart failure management."
  },
  {
    name: "Dr. Priya Sharma",
    specialty: "Neurology",
    experience: "20+ years",
    education: "MBBS, MD, DM (Neurology)",
    description: "Expert in stroke management and epilepsy treatment with extensive research experience."
  },
  {
    name: "Dr. Anil Mehta",
    specialty: "Orthopedics",
    experience: "18+ years",
    education: "MBBS, MS (Ortho), MCh",
    description: "Renowned for joint replacement surgeries and sports medicine."
  },
  {
    name: "Dr. Sunita Patel",
    specialty: "Pediatrics",
    experience: "15+ years",
    education: "MBBS, MD (Pediatrics)",
    description: "Dedicated pediatrician with expertise in neonatal care and childhood development."
  },
  {
    name: "Dr. Vijay Singh",
    specialty: "Ophthalmology",
    experience: "22+ years",
    education: "MBBS, MS (Ophthalmology)",
    description: "Specialist in cataract and refractive surgeries with thousands of successful procedures."
  },
  {
    name: "Dr. Meera Reddy",
    specialty: "General Medicine",
    experience: "12+ years",
    education: "MBBS, MD (Medicine)",
    description: "Expert in managing chronic diseases and preventive healthcare."
  },
  {
    name: "Dr. Arjun Nair",
    specialty: "Pulmonology",
    experience: "16+ years",
    education: "MBBS, MD, DM (Pulmonology)",
    description: "Specialist in respiratory diseases and critical care medicine."
  },
  {
    name: "Dr. Kavita Joshi",
    specialty: "Gastroenterology",
    experience: "14+ years",
    education: "MBBS, MD, DM (Gastro)",
    description: "Expert in digestive disorders and advanced endoscopic procedures."
  }
];

export default function Doctors() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Doctors
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Meet Our Expert Medical Team
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our doctors are highly qualified professionals with years of experience in their respective fields. They are committed to providing compassionate, patient-centered care.
            </p>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doctor, index) => (
              <div
                key={doctor.name}
                className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-display text-3xl font-bold text-primary">
                      {doctor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {doctor.specialty}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-1 mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {doctor.experience} Experience
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    {doctor.education}
                  </p>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {doctor.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Ready to Schedule Your Visit?
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Book an appointment with one of our specialists today.
          </p>
          <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90">
            <Link to="/contact">
              Book Appointment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
