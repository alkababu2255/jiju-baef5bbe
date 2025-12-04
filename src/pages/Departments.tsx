import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Brain, 
  Bone, 
  Baby, 
  Eye, 
  Stethoscope,
  Activity,
  Syringe,
  Scan,
  Pill,
  ArrowRight
} from "lucide-react";

const departments = [
  {
    icon: Heart,
    name: "Cardiology",
    description: "Comprehensive heart care including diagnostics, interventional procedures, and cardiac rehabilitation.",
    services: ["ECG & Echocardiography", "Angioplasty", "Pacemaker Implantation", "Heart Failure Management"]
  },
  {
    icon: Brain,
    name: "Neurology",
    description: "Expert care for brain and nervous system disorders with advanced diagnostic and treatment options.",
    services: ["EEG & EMG", "Stroke Treatment", "Epilepsy Management", "Headache Clinic"]
  },
  {
    icon: Bone,
    name: "Orthopedics",
    description: "Complete bone and joint care from sports injuries to complex joint replacements.",
    services: ["Joint Replacement", "Arthroscopy", "Spine Surgery", "Trauma Care"]
  },
  {
    icon: Baby,
    name: "Pediatrics",
    description: "Child-focused healthcare delivered by specialists who understand the unique needs of children.",
    services: ["Vaccination", "Growth Monitoring", "Pediatric Emergency", "Neonatal Care"]
  },
  {
    icon: Eye,
    name: "Ophthalmology",
    description: "Advanced eye care services from routine exams to complex surgical procedures.",
    services: ["Cataract Surgery", "Glaucoma Treatment", "Retina Services", "LASIK"]
  },
  {
    icon: Stethoscope,
    name: "General Medicine",
    description: "Primary care services for all ages, managing chronic conditions and preventive healthcare.",
    services: ["Health Checkups", "Diabetes Care", "Hypertension Management", "Preventive Care"]
  },
  {
    icon: Activity,
    name: "Pulmonology",
    description: "Specialized care for respiratory conditions and lung diseases.",
    services: ["Asthma Care", "COPD Management", "Sleep Studies", "Pulmonary Rehab"]
  },
  {
    icon: Syringe,
    name: "Gastroenterology",
    description: "Comprehensive digestive system care with advanced endoscopic procedures.",
    services: ["Endoscopy", "Colonoscopy", "Liver Care", "IBD Management"]
  },
  {
    icon: Scan,
    name: "Radiology",
    description: "State-of-the-art imaging services for accurate diagnosis and treatment planning.",
    services: ["CT Scan", "MRI", "Ultrasound", "X-Ray"]
  },
  {
    icon: Pill,
    name: "Oncology",
    description: "Compassionate cancer care with multidisciplinary treatment approaches.",
    services: ["Chemotherapy", "Radiation Therapy", "Surgical Oncology", "Palliative Care"]
  }
];

export default function Departments() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Departments
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Specialized Medical Care Under One Roof
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Jiju Hospital offers comprehensive healthcare services across multiple specialties. Our departments are equipped with modern facilities and staffed by experienced specialists dedicated to your well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <div
                key={dept.name}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0">
                    <dept.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {dept.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {dept.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {dept.services.map((service) => (
                        <span
                          key={service}
                          className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
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
            Need Help Choosing the Right Department?
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Our patient care team can help guide you to the right specialist for your needs.
          </p>
          <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90">
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
