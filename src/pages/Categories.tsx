import { Link } from "react-router-dom";
import { Home, Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";

const categories = [
  {
    id: "residential",
    title: "Residential",
    icon: Home,
    description: "Perfect solutions for homes, apartments, and small buildings to harvest and utilize rainwater efficiently.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    features: [
      "Rooftop collection systems",
      "Underground storage tanks",
      "Rain barrels & containers",
      "Gravity-fed irrigation",
      "First flush diverters",
      "Household filtration systems",
    ],
    products: [
      { name: "Rain Barrel System", desc: "50-100 gallon capacity for small gardens" },
      { name: "Underground Cistern", desc: "1000+ gallon storage for whole-house use" },
      { name: "Gutter Filters", desc: "Keeps debris out of your collection system" },
      { name: "Drip Irrigation Kit", desc: "Efficient water delivery to plants" },
    ],
  },
  {
    id: "commercial",
    title: "Commercial",
    icon: Building2,
    description: "Large-scale rainwater harvesting solutions for businesses, industries, and agricultural applications.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    features: [
      "Large capacity storage systems",
      "Industrial filtration units",
      "Automated pumping systems",
      "Smart monitoring technology",
      "Cooling tower makeup water",
      "Landscape irrigation systems",
    ],
    products: [
      { name: "Commercial Storage Tanks", desc: "10,000+ gallon modular systems" },
      { name: "Smart Monitoring System", desc: "Real-time water level and quality tracking" },
      { name: "Industrial Pumps", desc: "High-capacity water distribution" },
      { name: "Treatment Systems", desc: "Multi-stage filtration for various uses" },
    ],
  },
];

const Categories = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-20 bg-gradient-hero">
        <div className="section-container text-center">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Our Categories
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Explore rainwater harvesting solutions tailored for both residential and commercial applications.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-background">
        <div className="section-container space-y-20">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
            >
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-primary-foreground/20 backdrop-blur-sm">
                      <category.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <span className="font-display text-2xl font-bold text-primary-foreground">
                      {category.title}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 space-y-6">
                <h2 className="font-display text-3xl font-bold text-foreground">
                  {category.title} Solutions
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {category.description}
                </p>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {category.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Products Preview */}
                <div className="space-y-3 pt-4">
                  <h4 className="font-semibold text-foreground">Featured Products:</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {category.products.map((product, i) => (
                      <div key={i} className="p-4 rounded-xl bg-muted">
                        <p className="font-medium text-foreground text-sm">{product.name}</p>
                        <p className="text-muted-foreground text-xs mt-1">{product.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="hero" size="lg" asChild>
                  <Link to="/products">
                    View All Products
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Categories;
