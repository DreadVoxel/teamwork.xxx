import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Decorative gradient */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Find Your Person?
            </h2>
            <p className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Join thousands of singles who have found meaningful connections through Amore. 
              Your perfect match might be just a click away.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/profiles" className="gap-2">
                Start Browsing
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
