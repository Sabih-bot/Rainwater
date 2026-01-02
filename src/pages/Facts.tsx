import { Droplet, Cloud, Leaf, Globe, Recycle, Waves, TrendingUp, MapPin, Calendar, Lightbulb } from "lucide-react";
import { Layout } from "@/components/Layout";

const facts = [
  {
    icon: Globe,
    title: "Global Water Crisis",
    fact: "By 2025, two-thirds of the world's population may face water shortages. Rainwater harvesting is part of the solution.",
  },
  {
    icon: Droplet,
    title: "Roof Collection Potential",
    fact: "1 inch of rain on a 1,000 sq ft roof yields approximately 600 gallons of water.",
  },
  {
    icon: Cloud,
    title: "Annual Rainfall",
    fact: "The average home in a moderate climate can collect 30,000-50,000 gallons of rainwater annually.",
  },
  {
    icon: Leaf,
    title: "Plant-Friendly",
    fact: "Rainwater is naturally soft and pH-balanced, making it ideal for plants and gardens.",
  },
  {
    icon: Recycle,
    title: "Reduces Runoff",
    fact: "Rainwater harvesting can reduce stormwater runoff by up to 70%, preventing erosion and pollution.",
  },
  {
    icon: Waves,
    title: "Groundwater Recharge",
    fact: "Properly managed rainwater systems help recharge aquifers and maintain groundwater levels.",
  },
  {
    icon: TrendingUp,
    title: "Growing Adoption",
    fact: "Residential rainwater harvesting adoption has increased by 45% year-over-year globally.",
  },
  {
    icon: MapPin,
    title: "Ancient Practice",
    fact: "Rainwater harvesting dates back 4,000 years to ancient civilizations in India, Rome, and the Middle East.",
  },
  {
    icon: Calendar,
    title: "Quick Payback",
    fact: "Most residential systems pay for themselves within 2-5 years through water bill savings.",
  },
];

const methods = [
  {
    title: "Rooftop Collection",
    description: "The most common method where rain falls on roofs and is channeled through gutters to storage tanks.",
    steps: ["Install gutters and downspouts", "Add leaf guards and filters", "Connect to storage tank", "Include overflow management"],
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
  },
  {
    title: "Surface Runoff Harvesting",
    description: "Collecting water from ground surfaces like driveways, patios, and landscaped areas.",
    steps: ["Grade surfaces toward collection points", "Install permeable materials", "Create swales and channels", "Direct to underground storage"],
    image: "https://images.unsplash.com/photo-1468421870903-4df1664ac249?w=600&q=80",
  },
  {
    title: "Fog Collection",
    description: "In coastal or mountainous areas, special mesh nets capture water droplets from fog.",
    steps: ["Install mesh collectors perpendicular to wind", "Position at optimal heights", "Channel collected water to storage", "Maintain mesh cleanliness"],
    image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=600&q=80",
  },
  {
    title: "Check Dams",
    description: "Small barriers built across drainage channels to slow runoff and promote groundwater recharge.",
    steps: ["Identify suitable drainage channels", "Construct barriers with local materials", "Create silt traps upstream", "Monitor and maintain regularly"],
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80",
  },
  {
    title: "Contour Farming",
    description: "Agricultural technique that creates ridges along contours to capture and retain rainwater in soil.",
    steps: ["Survey land contours", "Create ridges along contour lines", "Plant crops between ridges", "Maintain ridge integrity"],
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80",
  },
  {
    title: "Percolation Pits",
    description: "Excavated pits filled with gravel that allow rainwater to slowly seep into the ground.",
    steps: ["Excavate pit near collection area", "Line with geotextile fabric", "Fill with gravel layers", "Connect to roof drainage"],
    image: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=600&q=80",
  },
];

const waterCycleSteps = [
  { step: "1", title: "Evaporation", desc: "Water evaporates from oceans, lakes, and land surfaces", icon: Cloud },
  { step: "2", title: "Condensation", desc: "Water vapor rises and cools, forming clouds", icon: Cloud },
  { step: "3", title: "Precipitation", desc: "Rain, snow, or hail falls to the earth's surface", icon: Droplet },
  { step: "4", title: "Collection", desc: "Water flows into streams, rivers, lakes, and oceans", icon: Waves },
];

const harvestingCycle = [
  { step: "1", title: "Collection", desc: "Rain falls on catchment surfaces", icon: Cloud },
  { step: "2", title: "Conveyance", desc: "Water flows through gutters and pipes", icon: Waves },
  { step: "3", title: "Filtration", desc: "Debris and contaminants removed", icon: Recycle },
  { step: "4", title: "Storage", desc: "Clean water stored for later use", icon: Droplet },
];

const statistics = [
  { stat: "2.2 Billion", desc: "People lack access to safe drinking water globally" },
  { stat: "70%", desc: "Of Earth's surface is water, but only 2.5% is fresh water" },
  { stat: "80%", desc: "Of wastewater globally is discharged without treatment" },
  { stat: "$260 Billion", desc: "Annual economic value of water supply and sanitation" },
];

const quickFacts = [
  "A family of four uses approximately 400 gallons of water per day",
  "Toilets account for nearly 30% of indoor water use",
  "A dripping faucet wastes over 3,000 gallons per year",
  "Gardens use 50% more water with sprinklers vs drip irrigation",
  "Rainwater is free of salts, minerals, and chlorine",
  "One inch of rain on a 2,000 sq ft roof = 1,200 gallons",
  "A mature tree can absorb over 100 gallons of water per day",
  "Xeriscaping can reduce landscape water use by 50-75%",
];

const Facts = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-20 bg-gradient-hero">
        <div className="section-container text-center">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Facts & Methods
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Discover the science behind rainwater harvesting and learn about effective collection methods.
          </p>
        </div>
      </section>

      {/* Global Statistics */}
      <section className="py-16 bg-card">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((item, index) => (
              <div key={index} className="text-center">
                <p className="font-display text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {item.stat}
                </p>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-4">
            Key Facts About Rainwater Harvesting
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Understanding these facts helps appreciate the importance and potential of rainwater harvesting.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facts.map((item, index) => (
              <div key={index} className="card-elevated p-6 text-center">
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.fact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Facts Banner */}
      <section className="py-12 bg-primary">
        <div className="section-container">
          <h3 className="font-display text-xl font-bold text-primary-foreground text-center mb-8">
            <Lightbulb className="h-6 w-6 inline-block mr-2" />
            Quick Water Facts
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickFacts.map((fact, index) => (
              <div key={index} className="p-4 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
                <p className="text-primary-foreground text-sm">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Water Cycle */}
      <section className="py-20 bg-muted">
        <div className="section-container">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-4">
            The Natural Water Cycle
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Understanding the water cycle helps us appreciate how rainwater harvesting fits into nature's system.
          </p>

          <div className="relative max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {waterCycleSteps.map((item, i) => (
                <div key={i} className="text-center">
                  <div className="relative mb-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-water flex items-center justify-center">
                      <item.icon className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {item.step}
                    </span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rainwater Harvesting Cycle */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-4">
            The Rainwater Harvesting Cycle
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A simple four-step process turns rainfall into a valuable resource.
          </p>

          <div className="relative max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {harvestingCycle.map((item, i) => (
                <div key={i} className="text-center">
                  <div className="relative mb-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-primary flex items-center justify-center">
                      <item.icon className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-water flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {item.step}
                    </span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="py-20 bg-muted">
        <div className="section-container">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-4">
            Harvesting Methods
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Different methods suit different environments and water needs. Choose the right approach for your situation.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methods.map((method, index) => (
              <div key={index} className="card-elevated overflow-hidden">
                <img
                  src={method.image}
                  alt={method.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {method.description}
                  </p>
                  <div className="space-y-2">
                    {method.steps.map((step, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
                          {i + 1}
                        </span>
                        <span className="text-sm text-foreground">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Environmental Impact
              </h2>
              <p className="text-muted-foreground mb-6">
                Rainwater harvesting has far-reaching environmental benefits that extend beyond individual properties.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Reduced Flooding", desc: "Capturing rainwater reduces the volume of stormwater runoff, decreasing flood risks." },
                  { title: "Less Erosion", desc: "Slowing runoff prevents soil erosion and protects waterways from sedimentation." },
                  { title: "Lower Energy Use", desc: "Using rainwater reduces energy needed for municipal water treatment and pumping." },
                  { title: "Healthier Ecosystems", desc: "Reducing runoff means fewer pollutants reaching rivers, lakes, and oceans." },
                  { title: "Groundwater Recharge", desc: "Some systems direct overflow to percolation areas, replenishing aquifers." },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
                alt="Environmental impact"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Did You Know */}
      <section className="py-16 bg-gradient-hero">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-8">
            Did You Know?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Singapore", fact: "Collects 30% of its water from rainfall using advanced harvesting systems." },
              { title: "Australia", fact: "Over 26% of households have rainwater tanks, the highest rate globally." },
              { title: "India", fact: "Has mandated rainwater harvesting in many states to address water scarcity." },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-primary-foreground/10 rounded-xl backdrop-blur-sm">
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">{item.title}</h3>
                <p className="text-primary-foreground/80 text-sm">{item.fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Facts;