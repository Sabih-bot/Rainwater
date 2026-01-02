import { useState } from "react";
import { Lightbulb, ChevronRight, Droplet, Leaf, Home, Sparkles, AlertTriangle, CheckCircle2, Clock, Wrench } from "lucide-react";
import { Layout } from "@/components/Layout";

const tips = [
  {
    category: "Collection",
    icon: Droplet,
    items: [
      {
        title: "Clean your gutters regularly",
        detail: "Remove leaves and debris before rainy season to maximize water quality and flow. Clogged gutters can overflow and miss collection opportunities.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
      },
      {
        title: "Install a first-flush diverter",
        detail: "The first rain washes pollutants off your roof. Divert this water away from storage to ensure cleaner collected water.",
        image: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=400&q=80",
      },
      {
        title: "Use light-colored roofing",
        detail: "Light roofs stay cooler and produce better quality collected water with less bacterial growth.",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&q=80",
      },
      {
        title: "Install leaf guards on gutters",
        detail: "Mesh screens prevent large debris from entering your collection system, reducing maintenance.",
        image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=400&q=80",
      },
      {
        title: "Calculate your collection potential",
        detail: "Multiply your roof area by annual rainfall (in feet) by 0.623 to estimate gallons you can collect yearly.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
      },
    ],
  },
  {
    category: "Storage",
    icon: Home,
    items: [
      {
        title: "Keep tanks covered and dark",
        detail: "Prevents algae growth and mosquito breeding in your stored water. Opaque tanks work best.",
        image: "https://images.unsplash.com/photo-1585687433141-694e9d839d60?w=400&q=80",
      },
      {
        title: "Position tanks for gravity flow",
        detail: "Elevate tanks when possible to use gravity for water distribution, saving energy and providing pressure.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
      },
      {
        title: "Install overflow pipes properly",
        detail: "Direct overflow away from foundations to prevent structural damage and erosion.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
      },
      {
        title: "Use food-grade containers only",
        detail: "Ensure tanks are made from non-toxic, UV-resistant materials safe for water storage.",
        image: "https://images.unsplash.com/photo-1585687433141-694e9d839d60?w=400&q=80",
      },
      {
        title: "Consider underground storage",
        detail: "Underground cisterns maintain cooler temperatures, preventing bacterial growth and saving yard space.",
        image: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=400&q=80",
      },
    ],
  },
  {
    category: "Usage",
    icon: Sparkles,
    items: [
      {
        title: "Prioritize garden watering",
        detail: "Rainwater is excellent for plants - it's free of chlorine and naturally pH balanced for optimal growth.",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80",
      },
      {
        title: "Use for toilet flushing",
        detail: "Up to 30% of household water goes to toilets - a perfect use for harvested rain that doesn't require potability.",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&q=80",
      },
      {
        title: "Car washing and cleaning",
        detail: "Rainwater leaves fewer spots than tap water due to its low mineral content.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
      },
      {
        title: "Laundry (with filtration)",
        detail: "Filtered rainwater is excellent for laundry - soft water means less detergent needed.",
        image: "https://images.unsplash.com/photo-1585687433141-694e9d839d60?w=400&q=80",
      },
      {
        title: "Pond and water features",
        detail: "Rainwater is ideal for ornamental ponds and fountains - fish and plants thrive in chlorine-free water.",
        image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&q=80",
      },
    ],
  },
  {
    category: "Maintenance",
    icon: Leaf,
    items: [
      {
        title: "Inspect filters monthly",
        detail: "Clean or replace filters to maintain water quality and system efficiency throughout the year.",
        image: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=400&q=80",
      },
      {
        title: "Check for leaks regularly",
        detail: "Small leaks waste water and can cause damage over time. Inspect all connections quarterly.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
      },
      {
        title: "Flush tanks annually",
        detail: "Remove sediment buildup from the bottom of tanks once a year to maintain capacity and quality.",
        image: "https://images.unsplash.com/photo-1585687433141-694e9d839d60?w=400&q=80",
      },
      {
        title: "Winterize in cold climates",
        detail: "Drain above-ground components before freezing weather to prevent damage from ice expansion.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
      },
      {
        title: "Document maintenance activities",
        detail: "Keep a log of inspections, cleanings, and repairs to track system health over time.",
        image: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=400&q=80",
      },
    ],
  },
];

const waterUsageData = [
  { use: "Garden & Lawn Irrigation", quality: "Any", icon: "🌱", gallons: "50-100/day" },
  { use: "Toilet Flushing", quality: "Filtered", icon: "🚽", gallons: "1.6/flush" },
  { use: "Laundry (cold wash)", quality: "Filtered", icon: "👕", gallons: "15-30/load" },
  { use: "Car Washing", quality: "Basic filtered", icon: "🚗", gallons: "50-100/wash" },
  { use: "Pond/Water Features", quality: "Any", icon: "🏞️", gallons: "Varies" },
  { use: "Fire Protection Reserve", quality: "Any", icon: "🔥", gallons: "500+ stored" },
  { use: "Pressure Washing", quality: "Basic filtered", icon: "💨", gallons: "2-4/min" },
  { use: "Window Cleaning", quality: "Filtered", icon: "🪟", gallons: "1-2/window" },
];

const dosDonts = {
  dos: [
    "Do clean gutters at least twice a year",
    "Do use screens to keep out debris and insects",
    "Do test water quality periodically",
    "Do label pipes carrying rainwater",
    "Do maintain proper overflow systems",
    "Do keep tanks covered at all times",
    "Do consult local regulations before installing",
    "Do use appropriate filtration for intended use",
  ],
  donts: [
    "Don't drink unfiltered rainwater",
    "Don't use water from treated roof materials",
    "Don't let tanks overflow near foundations",
    "Don't mix rainwater with municipal supply",
    "Don't ignore leaks - fix them promptly",
    "Don't forget to winterize in cold climates",
    "Don't use contaminated first-flush water",
    "Don't store water in non-food-grade containers",
  ],
};

const maintenanceSchedule = [
  { task: "Inspect gutters and downspouts", frequency: "Monthly", icon: Clock },
  { task: "Clean filters and screens", frequency: "Monthly", icon: Wrench },
  { task: "Check tank levels and quality", frequency: "Monthly", icon: Droplet },
  { task: "Inspect for leaks", frequency: "Quarterly", icon: AlertTriangle },
  { task: "Clean first-flush diverter", frequency: "Quarterly", icon: Wrench },
  { task: "Flush sediment from tanks", frequency: "Annually", icon: Clock },
  { task: "Deep clean storage tanks", frequency: "Annually", icon: Sparkles },
  { task: "Inspect pump and valves", frequency: "Annually", icon: Wrench },
];

const Tips = () => {
  const [expandedTip, setExpandedTip] = useState<string | null>(null);

  return (
    <Layout>
      {/* Header */}
      <section className="py-20 bg-gradient-hero">
        <div className="section-container text-center">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Usage & Tips
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Maximize the benefits of your rainwater harvesting system with these practical tips and best practices.
          </p>
        </div>
      </section>

      {/* Tips by Category */}
      <section className="py-20 bg-background">
        <div className="section-container">
          {tips.map((category, catIndex) => (
            <div key={catIndex} className="mb-16 last:mb-0">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-primary/10">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  {category.category} Tips
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {category.items.map((tip, tipIndex) => {
                  const tipId = `${catIndex}-${tipIndex}`;
                  const isExpanded = expandedTip === tipId;

                  return (
                    <div
                      key={tipIndex}
                      className="card-elevated overflow-hidden cursor-pointer"
                      onClick={() => setExpandedTip(isExpanded ? null : tipId)}
                    >
                      <div className="relative h-32">
                        <img
                          src={tip.image}
                          alt={tip.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="flex items-center gap-2 text-primary-foreground">
                            <Lightbulb className="h-3 w-3" />
                            <span className="text-xs font-medium">Click to reveal</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-semibold text-foreground text-sm">
                            {tip.title}
                          </h3>
                          <ChevronRight
                            className={`h-4 w-4 text-muted-foreground transition-transform shrink-0 ${
                              isExpanded ? "rotate-90" : ""
                            }`}
                          />
                        </div>
                        
                        {isExpanded && (
                          <p className="mt-3 text-xs text-muted-foreground animate-fade-up">
                            {tip.detail}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="py-20 bg-muted">
        <div className="section-container">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Do's and Don'ts
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Do's */}
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
              <div className="p-4 bg-leaf">
                <h3 className="font-display text-xl font-semibold text-primary-foreground text-center flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-6 w-6" />
                  Do's
                </h3>
              </div>
              <div className="p-6 space-y-3">
                {dosDonts.dos.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-leaf shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Don'ts */}
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
              <div className="p-4 bg-destructive">
                <h3 className="font-display text-xl font-semibold text-primary-foreground text-center flex items-center justify-center gap-2">
                  <AlertTriangle className="h-6 w-6" />
                  Don'ts
                </h3>
              </div>
              <div className="p-6 space-y-3">
                {dosDonts.donts.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Schedule */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-4">
            Maintenance Schedule
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Keep your system running efficiently with this recommended maintenance schedule.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {maintenanceSchedule.map((item, index) => (
              <div key={index} className="card-elevated p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-water/20 text-water">
                    {item.frequency}
                  </span>
                </div>
                <p className="text-sm text-foreground font-medium">{item.task}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="py-20 bg-muted">
        <div className="section-container">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-4">
            Water Usage Quick Reference
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Common uses for harvested rainwater and their requirements.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 bg-primary">
                <h3 className="font-display text-xl font-semibold text-primary-foreground text-center">
                  Best Uses for Harvested Rainwater
                </h3>
              </div>
              <div className="divide-y divide-border">
                {waterUsageData.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <span className="font-medium text-foreground">{item.use}</span>
                        <p className="text-xs text-muted-foreground">{item.gallons}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                      {item.quality}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Tips */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Seasonal Tips
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { season: "Spring", color: "leaf", tips: ["Clean gutters after winter", "Inspect for winter damage", "Test pumps and valves", "Clear debris from filters"] },
              { season: "Summer", color: "water", tips: ["Monitor tank levels", "Check for algae growth", "Maximize collection opportunities", "Water gardens efficiently"] },
              { season: "Fall", color: "earth", tips: ["Clear falling leaves frequently", "Prepare for increased rainfall", "Check overflow systems", "Service pumps before winter"] },
              { season: "Winter", color: "primary", tips: ["Winterize above-ground components", "Insulate exposed pipes", "Drain barrels in freezing areas", "Check underground tanks monthly"] },
            ].map((item, index) => (
              <div key={index} className="card-elevated p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-4 pb-3 border-b border-border">
                  {item.season}
                </h3>
                <ul className="space-y-3">
                  {item.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="py-16 bg-gradient-hero">
        <div className="section-container">
          <h2 className="font-display text-3xl font-bold text-primary-foreground text-center mb-8">
            Pro Tips from Experts
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tip: "Install a water level indicator visible from outside the tank - it saves time and helps with planning.", expert: "John S., 15 years experience" },
              { tip: "Use a separate tank for the first 500 gallons if you want drinking water quality - it's the cleanest.", expert: "Maria L., Water Engineer" },
              { tip: "Connect multiple barrels in series for larger capacity without buying expensive big tanks.", expert: "David K., DIY Expert" },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-primary-foreground/10 rounded-xl backdrop-blur-sm">
                <p className="text-primary-foreground mb-4">"{item.tip}"</p>
                <p className="text-primary-foreground/70 text-sm">— {item.expert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tips;