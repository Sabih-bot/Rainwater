import { Link } from "react-router-dom";
import { ArrowRight, Droplet, Leaf, CloudRain, Building2, Users, Award, Shield, Target, CheckCircle2, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import heroImage from "@/assets/hero-rainwater.jpg";

const features = [
  {
    icon: CloudRain,
    title: "Water Conservation",
    description: "Reduce water bills and conserve precious natural resources through efficient rainwater collection.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Contribute to environmental sustainability by reducing runoff and promoting groundwater recharge.",
  },
  {
    icon: Droplet,
    title: "High Quality Water",
    description: "Rainwater is naturally soft and free of chemicals, perfect for gardens and various household uses.",
  },
  {
    icon: Building2,
    title: "Versatile Solutions",
    description: "From small residential setups to large commercial systems, solutions for every need.",
  },
  {
    icon: Shield,
    title: "Drought Protection",
    description: "Build resilience against water shortages and droughts with a reliable backup water supply.",
  },
  {
    icon: Target,
    title: "Cost Effective",
    description: "Long-term savings on water bills with a system that pays for itself within a few years.",
  },
];

const stats = [
  { value: "30%", label: "Reduction in water bills" },
  { value: "50K", label: "Gallons saved annually" },
  { value: "100+", label: "Successful installations" },
  { value: "24/7", label: "Expert support" },
];

const benefits = [
  {
    title: "Environmental Benefits",
    items: [
      "Reduces stormwater runoff and erosion",
      "Decreases demand on municipal water supplies",
      "Helps recharge groundwater aquifers",
      "Reduces energy used for water treatment and distribution",
    ],
  },
  {
    title: "Economic Benefits",
    items: [
      "Lower monthly water bills",
      "Potential tax incentives and rebates",
      "Increases property value",
      "Reduces landscaping maintenance costs",
    ],
  },
  {
    title: "Practical Benefits",
    items: [
      "Provides backup water during shortages",
      "Better for plants than chlorinated water",
      "Reduces wear on water softeners",
      "Independent water source for emergencies",
    ],
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner, California",
    quote: "Installing a rainwater harvesting system was one of the best decisions we made. Our garden has never looked better, and we've cut our water bills by 40%.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Farm Owner, Texas",
    quote: "The commercial system has transformed how we manage water on our farm. We're now self-sufficient during the dry seasons.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Business Owner, Oregon",
    quote: "Our office building now harvests rainwater for all landscaping needs. It's great for our sustainability goals and our budget.",
    rating: 5,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "We assess your property, water needs, and budget to recommend the perfect solution.",
  },
  {
    step: "02",
    title: "Design",
    description: "Our experts create a customized system design optimized for your specific requirements.",
  },
  {
    step: "03",
    title: "Installation",
    description: "Professional installation by certified technicians ensures optimal performance.",
  },
  {
    step: "04",
    title: "Maintenance",
    description: "Ongoing support and maintenance keeps your system running efficiently for years.",
  },
];

const partners = [
  { name: "EPA WaterSense", desc: "Certified Partner" },
  { name: "Green Building Council", desc: "Member" },
  { name: "Rainwater Alliance", desc: "Founding Member" },
  { name: "Sustainable Water", desc: "Gold Certified" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Rainwater harvesting system in a lush garden"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative section-container py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm text-primary-foreground mb-6 animate-fade-up">
              <Droplet className="h-4 w-4 text-water-light animate-droplet" />
              <span className="text-sm font-medium">Sustainable Water Solutions</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up stagger-1">
              Harvest Rain,{" "}
              <span className="text-water-light">Nurture Life</span>
            </h1>
            
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed animate-fade-up stagger-2">
              Discover the art and science of rainwater harvesting. From reducing water bills to promoting environmental sustainability, 
              learn how every drop counts in building a greener tomorrow.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-up stagger-3">
              <Button variant="hero" size="xl" asChild>
                <Link to="/categories">
                  Explore Solutions
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
                <Link to="/contact">
                  Get In Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 right-10 hidden lg:block animate-float">
          <div className="p-6 rounded-2xl glass-effect backdrop-blur-md bg-card/90 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <CloudRain className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">1 inch</p>
                <p className="text-sm text-muted-foreground">of rain = 600 gallons/1000 sq ft</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">About Rainwater Harvesting</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-6">
                The Ancient Practice Made Modern
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Rainwater harvesting is the collection and storage of rain for reuse before it reaches the aquifer. 
                This centuries-old practice has been revolutionized with modern technology, making it more efficient 
                and accessible than ever before.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From ancient civilizations in the Indus Valley to modern smart homes, humans have always recognized 
                the value of capturing nature's gift. Today, with growing water scarcity concerns and rising utility 
                costs, rainwater harvesting has become an essential component of sustainable living.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Reduce water bills by up to 50%",
                  "Eco-friendly and sustainable",
                  "Low maintenance systems",
                  "Government incentives available",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1468421870903-4df1664ac249?w=800&q=80"
                alt="Modern rainwater harvesting system"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-8 -left-8 p-6 bg-card rounded-2xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-leaf/20">
                    <Users className="h-8 w-8 text-leaf" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">10K+</p>
                    <p className="text-sm text-muted-foreground">Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Features</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
              Why Choose Rainwater Harvesting?
            </h2>
            <p className="text-muted-foreground text-lg">
              Rainwater harvesting offers numerous benefits for both the environment and your wallet.
              Here's why more people are making the switch to sustainable water solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-elevated p-6 text-center group"
              >
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Benefits</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
              Comprehensive Benefits
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover the wide-ranging advantages of implementing a rainwater harvesting system.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card-elevated p-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-6 pb-4 border-b border-border">
                  {benefit.title}
                </h3>
                <ul className="space-y-4">
                  {benefit.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
              How We Work
            </h2>
            <p className="text-muted-foreground text-lg">
              From initial consultation to ongoing maintenance, we guide you through every step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="card-elevated p-6 text-center h-full">
                  <span className="font-display text-5xl font-bold text-primary/20">{item.step}</span>
                  <h3 className="font-display text-xl font-semibold text-foreground mt-4 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground text-lg">
              Hear from homeowners and businesses who have transformed their water management.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-elevated p-8">
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-water text-water" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <p className="text-center text-muted-foreground mb-8">Trusted by industry leaders</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-xl">
                <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                <p className="font-semibold text-foreground text-sm">{partner.name}</p>
                <p className="text-xs text-muted-foreground">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="section-container">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-hero p-12 lg:p-16">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
            
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
                  Ready to Start Saving Water?
                </h2>
                <p className="text-primary-foreground/80 text-lg max-w-xl">
                  Join thousands of eco-conscious homeowners and businesses who are making a difference with rainwater harvesting.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
                  <Link to="/categories">
                    View Categories
                  </Link>
                </Button>
                <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;