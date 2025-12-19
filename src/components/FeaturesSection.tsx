import { Shield, Heart, Calendar, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified Profiles",
    description: "Every profile goes through our verification process to ensure you're connecting with real, genuine people.",
  },
  {
    icon: Heart,
    title: "Meaningful Matches",
    description: "Our thoughtful approach focuses on compatibility, values, and genuine connection rather than superficial metrics.",
  },
  {
    icon: Calendar,
    title: "Easy Scheduling",
    description: "Request dates and schedule meetups seamlessly through our respectful and user-friendly booking system.",
  },
  {
    icon: MessageCircle,
    title: "Safe Communication",
    description: "Connect through our secure platform with privacy controls that put you in charge of your interactions.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose Amore?
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            We've built a platform that prioritizes safety, authenticity, and meaningful connections.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 bg-card rounded-2xl border border-border shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl primary-gradient flex items-center justify-center mb-6 shadow-soft group-hover:shadow-glow transition-all duration-500">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
