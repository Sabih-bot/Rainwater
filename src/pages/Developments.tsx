import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Calendar, TrendingUp, Newspaper, Globe, Lightbulb, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";

const developments = [
  {
    id: 1,
    title: "Smart Rainwater Systems with AI Integration",
    date: "November 2024",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    summary: "New AI-powered systems can predict rainfall patterns and automatically adjust collection and distribution strategies for optimal water harvesting.",
    link: "#",
  },
  {
    id: 2,
    title: "Breakthrough in Low-Cost Filtration Technology",
    date: "October 2024",
    category: "Research",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
    summary: "Researchers have developed a new membrane technology that can purify rainwater to drinking standards at a fraction of traditional costs.",
    link: "#",
  },
  {
    id: 3,
    title: "Government Incentives for Rainwater Harvesting",
    date: "September 2024",
    category: "Policy",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    summary: "Several states have announced new tax credits and rebates for homeowners and businesses installing rainwater harvesting systems.",
    link: "#",
  },
  {
    id: 4,
    title: "Urban Rainwater Networks: City-Wide Collection Systems",
    date: "August 2024",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
    summary: "Major cities are implementing integrated rainwater collection networks that harvest water from public buildings and spaces for municipal use.",
    link: "#",
  },
  {
    id: 5,
    title: "Modular Underground Storage Solutions",
    date: "July 2024",
    category: "Products",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    summary: "New modular underground tank systems allow for flexible installation and easy expansion as water needs grow.",
    link: "#",
  },
];

const additionalNews = [
  {
    id: 6,
    title: "Solar-Powered Pumping Systems Gain Popularity",
    date: "June 2024",
    category: "Products",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    summary: "Combining solar power with rainwater harvesting creates truly off-grid water solutions for remote areas and eco-conscious homeowners.",
    link: "#",
  },
  {
    id: 7,
    title: "Climate Change Driving Adoption in New Regions",
    date: "May 2024",
    category: "Research",
    image: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=800&q=80",
    summary: "Areas previously with reliable water supplies are now adopting rainwater harvesting as weather patterns become less predictable.",
    link: "#",
  },
  {
    id: 8,
    title: "New Building Codes Mandate Rainwater Systems",
    date: "April 2024",
    category: "Policy",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    summary: "Progressive municipalities are requiring rainwater harvesting in new construction as part of sustainable building requirements.",
    link: "#",
  },
  {
    id: 9,
    title: "Nanotechnology Improves Water Quality Monitoring",
    date: "March 2024",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
    summary: "New nano-sensors provide real-time water quality data, alerting system owners to contamination before it becomes a problem.",
    link: "#",
  },
  {
    id: 10,
    title: "Community Shared Rainwater Systems Emerge",
    date: "February 2024",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=800&q=80",
    summary: "Neighborhoods are pooling resources to build shared collection and storage systems, reducing per-household costs significantly.",
    link: "#",
  },
  {
    id: 11,
    title: "Drought-Resistant Landscaping Integration",
    date: "January 2024",
    category: "Products",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    summary: "New integrated systems combine xeriscaping with targeted rainwater irrigation for maximum water efficiency in landscaping.",
    link: "#",
  },
];

const trends = [
  { title: "Residential adoption up 45% YoY", icon: TrendingUp },
  { title: "Commercial systems growing 60%", icon: TrendingUp },
  { title: "Smart monitoring adoption doubles", icon: TrendingUp },
];

const innovations = [
  {
    title: "Self-Cleaning Filters",
    description: "Automated filters that clean themselves using water pressure, reducing maintenance to near zero.",
    status: "Available Now",
  },
  {
    title: "Atmospheric Water Generators",
    description: "Devices that extract water from air humidity, supplementing rainwater collection in dry periods.",
    status: "Emerging",
  },
  {
    title: "Graphene Filtration",
    description: "Ultra-thin graphene membranes that filter contaminants at the molecular level with minimal pressure.",
    status: "Research Phase",
  },
  {
    title: "AI-Optimized Distribution",
    description: "Machine learning systems that predict usage patterns and optimize water distribution automatically.",
    status: "Available Now",
  },
  {
    title: "Biodegradable Storage",
    description: "Eco-friendly tanks made from biodegradable materials that naturally decompose after useful life.",
    status: "Development",
  },
  {
    title: "Fog Harvesting Nets",
    description: "Advanced mesh materials that can capture water from fog in coastal and mountainous regions.",
    status: "Available Now",
  },
];

const upcomingEvents = [
  { name: "International Rainwater Harvesting Conference", date: "March 15-17, 2025", location: "Austin, TX" },
  { name: "Sustainable Water Summit", date: "April 8-10, 2025", location: "Portland, OR" },
  { name: "Smart Water Systems Expo", date: "May 22-24, 2025", location: "San Diego, CA" },
  { name: "Green Building & Water Conference", date: "June 5-7, 2025", location: "Chicago, IL" },
];

const statistics = [
  { label: "Global Market Size", value: "$1.2B", change: "+12% YoY" },
  { label: "US Installations", value: "2.3M", change: "+18% YoY" },
  { label: "Water Saved Annually", value: "50B gal", change: "+15% YoY" },
  { label: "CO2 Offset", value: "8M tons", change: "+20% YoY" },
];

const Developments = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % developments.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % developments.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + developments.length) % developments.length);
    setIsAutoPlaying(false);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="py-20 bg-gradient-hero">
        <div className="section-container text-center">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Latest Developments
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Stay updated with the newest innovations, research, and news in rainwater harvesting technology.
          </p>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-8 bg-card border-b border-border">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-display text-2xl lg:text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-foreground font-medium">{stat.label}</p>
                <p className="text-xs text-leaf">{stat.change}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8">
            Featured Updates
          </h2>

          <div className="relative">
            {/* Carousel */}
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {developments.map((item) => (
                  <div key={item.id} className="w-full flex-shrink-0">
                    <div className="relative h-[400px] md:h-[500px]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                            {item.category}
                          </span>
                          <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                            <Calendar className="h-4 w-4" />
                            {item.date}
                          </div>
                        </div>
                        <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                          {item.title}
                        </h3>
                        <p className="text-primary-foreground/80 mb-6 max-w-2xl">
                          {item.summary}
                        </p>
                        <Button variant="hero" size="lg" asChild>
                          <a href={item.link}>
                            Read More
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-card/80 backdrop-blur-sm shadow-lg hover:bg-card transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-foreground" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-card/80 backdrop-blur-sm shadow-lg hover:bg-card transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-foreground" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {developments.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index
                      ? "bg-primary w-8"
                      : "bg-muted hover:bg-primary/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trends */}
      <section className="py-12 bg-muted">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-6">
            {trends.map((trend, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-card rounded-xl shadow-sm">
                <div className="p-3 rounded-lg bg-leaf/20">
                  <trend.icon className="h-6 w-6 text-leaf" />
                </div>
                <span className="font-medium text-foreground">{trend.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Updates Grid */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8">
            All Updates
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...developments, ...additionalNews].map((item) => (
              <article key={item.id} className="card-elevated overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    {item.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {item.summary}
                  </p>
                  <a
                    href={item.link}
                    className="inline-flex items-center gap-1 mt-4 text-primary text-sm font-medium hover:underline"
                  >
                    Read more
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Innovations Section */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb className="h-8 w-8 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Emerging Innovations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {innovations.map((item, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    item.status === "Available Now" ? "bg-leaf/20 text-leaf" :
                    item.status === "Emerging" ? "bg-water/20 text-water" :
                    "bg-muted text-muted-foreground"
                  }`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="h-8 w-8 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Upcoming Events
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="card-elevated p-6 flex items-center gap-6">
                <div className="text-center shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{event.name}</h3>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                  <p className="text-sm text-primary">{event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <h2 className="font-display text-2xl font-bold text-foreground text-center mb-8">
            Additional Resources
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Newspaper, title: "Research Papers", desc: "Academic studies and publications" },
              { icon: Globe, title: "Industry Reports", desc: "Market analysis and forecasts" },
              { icon: Award, title: "Best Practices", desc: "Guidelines and standards" },
              { icon: Lightbulb, title: "Case Studies", desc: "Real-world implementations" },
            ].map((resource, index) => (
              <div key={index} className="bg-card rounded-xl p-6 text-center">
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4">
                  <resource.icon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{resource.title}</h3>
                <p className="text-sm text-muted-foreground">{resource.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-hero">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
            Stay Informed
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Get the latest rainwater harvesting news, innovations, and tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
            />
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Developments;