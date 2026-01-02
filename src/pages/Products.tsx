import { useState } from "react";
import { ChevronDown, ChevronUp, Star, ShoppingCart, Zap, Shield, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";

const products = [
  {
    id: 1,
    name: "Rain Barrel Collection System",
    category: "residential",
    image: "https://images.unsplash.com/photo-1585687433141-694e9d839d60?w=600&q=80",
    description: "Perfect entry-level solution for home gardens. Easy to install and maintain.",
    price: "$149",
    rating: 4.8,
    reviews: 234,
    features: ["50-100 gallon capacity", "UV resistant", "Child-safe lid", "Overflow valve"],
    steps: [
      "Position the barrel under a downspout",
      "Install a diverter to direct water into the barrel",
      "Connect an overflow hose to prevent flooding",
      "Attach a spigot at the bottom for easy access",
      "Use a screen on top to keep debris and mosquitoes out",
    ],
  },
  {
    id: 2,
    name: "Underground Cistern System",
    category: "residential",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    description: "Large capacity underground storage for whole-house rainwater utilization.",
    price: "$2,499",
    rating: 4.9,
    reviews: 89,
    features: ["1000-5000 gallon capacity", "Space-saving design", "Temperature stable", "Long lifespan"],
    steps: [
      "Conduct a site assessment and obtain permits",
      "Excavate the installation area",
      "Install the cistern with proper bedding",
      "Connect roof gutters through first-flush diverters",
      "Install pump and filtration systems",
      "Connect to household plumbing for non-potable uses",
    ],
  },
  {
    id: 3,
    name: "Commercial Storage Tank System",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    description: "Modular high-capacity tanks for industrial and commercial applications.",
    price: "$8,999",
    rating: 4.9,
    reviews: 45,
    features: ["10,000+ gallon capacity", "Modular design", "Industrial grade", "Custom configurations"],
    steps: [
      "Assess water collection potential and storage needs",
      "Design tank configuration for available space",
      "Prepare foundation with proper load-bearing capacity",
      "Install tanks with interconnecting pipework",
      "Add level sensors and overflow management",
      "Connect to distribution pumps and filtration",
    ],
  },
  {
    id: 4,
    name: "Smart Monitoring System",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    description: "IoT-enabled monitoring for real-time tracking of water levels and quality.",
    price: "$599",
    rating: 4.6,
    reviews: 128,
    features: ["Real-time monitoring", "Mobile app", "Automated alerts", "Data analytics"],
    steps: [
      "Install water level sensors in storage tanks",
      "Mount water quality probes (pH, turbidity)",
      "Connect sensors to the central hub",
      "Configure wireless connectivity",
      "Set up dashboard and mobile alerts",
      "Program automation triggers for pumps and valves",
    ],
  },
];

const benefits = [
  {
    icon: Droplet,
    title: "Save Water",
    description: "Reduce municipal water usage by up to 50%",
  },
  {
    icon: Zap,
    title: "Save Money",
    description: "Lower your monthly water bills significantly",
  },
  {
    icon: Shield,
    title: "Reliable Supply",
    description: "Independent water source for any situation",
  },
];

const Products = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <Layout>
      {/* Header */}
      <section className="py-20 bg-gradient-hero">
        <div className="section-container text-center">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Products & Techniques
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Explore our comprehensive range of rainwater harvesting products with detailed implementation guides.
          </p>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-8 bg-card border-b border-border">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 justify-center">
                <div className="p-2 rounded-lg bg-primary/10">
                  <benefit.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{benefit.title}</p>
                  <p className="text-xs text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product) => (
              <div key={product.id} className="card-elevated overflow-hidden group">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 px-2 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground capitalize">
                    {product.category === "both" ? "Universal" : product.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {product.name}
                    </h3>
                    <span className="font-bold text-primary text-lg">{product.price}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-water text-water" />
                      <span className="text-sm font-medium text-foreground">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Implementation Steps */}
                  <button
                    onClick={() => setExpandedId(expandedId === product.id ? null : product.id)}
                    className="w-full flex items-center justify-between p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                  >
                    <span className="font-medium text-sm text-foreground">
                      Implementation Steps
                    </span>
                    {expandedId === product.id ? (
                      <ChevronUp className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    )}
                  </button>

                  {expandedId === product.id && (
                    <div className="mt-4 space-y-2 animate-fade-up">
                      {product.steps.map((step, i) => (
                        <div key={i} className="flex gap-3 p-2">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
                            {i + 1}
                          </span>
                          <span className="text-sm text-muted-foreground">{step}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <Button className="w-full mt-4" variant="outline">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-4">
            Solution Comparison
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Compare different rainwater harvesting solutions to find the perfect fit for your needs.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="p-4 text-left font-medium">Feature</th>
                  <th className="p-4 text-center font-medium">Rain Barrel</th>
                  <th className="p-4 text-center font-medium">Underground Cistern</th>
                  <th className="p-4 text-center font-medium">Commercial Tank</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Capacity", "50-100 gal", "1,000-5,000 gal", "10,000+ gal"],
                  ["Cost", "$", "$$$", "$$$$"],
                  ["Installation", "DIY", "Professional", "Professional"],
                  ["Space Required", "Minimal", "Underground", "Large area"],
                  ["Best For", "Gardens", "Whole-house", "Industrial"],
                  ["Maintenance", "Low", "Medium", "Medium-High"],
                  ["Lifespan", "10-15 years", "25+ years", "30+ years"],
                  ["ROI Period", "1-2 years", "5-7 years", "3-5 years"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-muted/50" : ""}>
                    {row.map((cell, j) => (
                      <td key={j} className={`p-4 ${j === 0 ? "font-medium text-foreground" : "text-center text-muted-foreground"}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-4">
            Installation Process
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Our systematic approach ensures a smooth installation experience.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Site Assessment", desc: "Evaluate your property's collection potential and storage options." },
              { step: "2", title: "System Design", desc: "Create a custom design based on your water needs and budget." },
              { step: "3", title: "Professional Install", desc: "Certified technicians install your system with precision." },
              { step: "4", title: "Testing & Training", desc: "Complete system testing and user training for optimal use." },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary flex items-center justify-center mb-4">
                  <span className="font-display text-2xl font-bold text-primary-foreground">{item.step}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "How much water can I collect from my roof?", a: "For every inch of rain that falls on 1,000 square feet of roof, you can collect approximately 600 gallons of water. The average home can collect 30,000-50,000 gallons annually." },
              { q: "Is rainwater safe for drinking?", a: "With proper filtration and treatment (including UV sterilization), rainwater can be made safe for drinking. However, many people use it for non-potable purposes like irrigation and toilet flushing." },
              { q: "How long do rainwater systems last?", a: "Quality rain barrels last 10-15 years, while underground cisterns and commercial tanks can last 25-30+ years with proper maintenance." },
              { q: "Do I need permits for rainwater harvesting?", a: "Regulations vary by location. Most residential rain barrels don't require permits, but larger systems may need approval. We help navigate local requirements." },
              { q: "What maintenance is required?", a: "Basic maintenance includes cleaning gutters seasonally, inspecting filters monthly, and flushing tanks annually. Smart systems alert you when maintenance is needed." },
            ].map((faq, i) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;