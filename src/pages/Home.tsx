import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { 
  Heart, 
  Brain, 
  Bone, 
  Baby, 
  Eye, 
  Stethoscope,
  Clock,
  Award,
  Users,
  Shield,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/hero-hospital.jpg";

const departments = [
  { icon: Heart, name: "Cardiology", description: "Heart & cardiovascular care" },
  { icon: Brain, name: "Neurology", description: "Brain & nervous system" },
  { icon: Bone, name: "Orthopedics", description: "Bones & joint surgery" },
  { icon: Baby, name: "Pediatrics", description: "Children's healthcare" },
  { icon: Eye, name: "Ophthalmology", description: "Eye care & surgery" },
  { icon: Stethoscope, name: "General Medicine", description: "Primary healthcare" },
];

const stats = [
  { icon: Users, value: "50,000+", label: "Patients Treated" },
  { icon: Award, value: "100+", label: "Expert Doctors" },
  { icon: Clock, value: "24/7", label: "Emergency Care" },
  { icon: Shield, value: "New", label: "Modern Facility" },
];

const features = [
  "State-of-the-art medical equipment",
  "Experienced & caring medical staff",
  "Affordable treatment packages",
  "24/7 emergency services",
  "Modern diagnostic facilities",
  "Patient-centered care approach",
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Jiju Hospital - Modern Healthcare Facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>
        
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-6 animate-fade-up">
              Welcome to Jiju Hospital
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Your Health, Our{" "}
              <span className="text-primary">Priority</span>
            </h1>
            <p className="text-lg md:text-xl text-background/80 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Experience world-class healthcare with compassionate service. Our expert team is dedicated to providing you with the best medical care using advanced technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button asChild size="xl" variant="hero">
                <Link to="/contact">
                  Book Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="hero-outline">
                <Link to="/departments">
                  Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center text-primary-foreground animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="h-10 w-10 mx-auto mb-3 opacity-80" />
                <div className="font-display text-3xl md:text-4xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Excellence in Healthcare Since 2024
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                At Jiju Hospital, we combine cutting-edge medical technology with compassionate care. Our team of experienced doctors and healthcare professionals are committed to providing personalized treatment for every patient.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                  {[Award, Heart, Users, Shield].map((Icon, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-xl bg-card shadow-card flex items-center justify-center animate-fade-up"
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      <Icon className="h-12 w-12 text-primary" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Departments
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Specialized Medical Care
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive healthcare services across multiple specialties, ensuring you receive expert care for all your medical needs.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Link
                key={dept.name}
                to="/departments"
                className="group bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-primary-light flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <dept.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {dept.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {dept.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" variant="outline">
              <Link to="/departments">
                View All Departments
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need Medical Assistance?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Our dedicated team is here to help you 24/7. Book an appointment or reach out to us for any medical inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl" variant="hero-outline">
              <Link to="/contact">Book Appointment</Link>
            </Button>
            <Button asChild size="xl" className="bg-background text-primary hover:bg-background/90">
              <a href="tel:+91274478974">Call: +91 274 478 974</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
