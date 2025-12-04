import { Layout } from "@/components/layout/Layout";
import { Award, Users, Heart, Target, CheckCircle } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "We treat every patient with empathy, dignity, and respect, ensuring a supportive healing environment."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest standards in medical care, continuously improving our services and skills."
  },
  {
    icon: Users,
    title: "Patient-Centered",
    description: "Our patients are at the heart of everything we do. We listen, understand, and personalize care."
  },
  {
    icon: Target,
    title: "Innovation",
    description: "We embrace cutting-edge medical technology and modern treatment methods for better outcomes."
  }
];

const milestones = [
  { year: "1999", event: "Hospital Founded" },
  { year: "2005", event: "Expanded to 200 beds" },
  { year: "2010", event: "Launched Cardiac Center" },
  { year: "2015", event: "Achieved NABH Accreditation" },
  { year: "2020", event: "Opened Neuroscience Wing" },
  { year: "2024", event: "Serving 50,000+ patients annually" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Caring for Your Health Since 1999
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Jiju Hospital has been a pillar of healthcare excellence in the community for over 25 years. Our commitment to providing world-class medical services with a personal touch has made us one of the most trusted healthcare institutions in the region.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional, patient-centered healthcare that is accessible, affordable, and delivered with compassion. We are dedicated to healing, education, and research that improves the health and well-being of the communities we serve.
              </p>
            </div>
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <h2 className="font-display text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-primary-foreground/90 leading-relaxed">
                To be the leading healthcare provider in the region, recognized for clinical excellence, innovative treatments, and outstanding patient experiences. We envision a healthier community where quality healthcare is available to all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              What Drives Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card rounded-xl p-6 shadow-card animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Milestones
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center gap-4 mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} hidden md:block`}>
                    <div className="bg-card rounded-lg p-4 shadow-card inline-block">
                      <span className="font-display font-bold text-primary">{milestone.year}</span>
                      <p className="text-foreground">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="flex-1 md:hidden">
                    <div className="bg-card rounded-lg p-4 shadow-card">
                      <span className="font-display font-bold text-primary">{milestone.year}</span>
                      <p className="text-foreground">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
