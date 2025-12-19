import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Heart, Calendar, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profiles } from "@/data/profiles";
import { useToast } from "@/hooks/use-toast";

const ProfileDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    preferredDate: "",
    message: "",
  });

  const profile = profiles.find((p) => p.id === id);

  if (!profile) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-3xl font-bold text-foreground mb-4">
              Profile Not Found
            </h1>
            <p className="font-body text-muted-foreground mb-8">
              The profile you're looking for doesn't exist.
            </p>
            <Button variant="hero" asChild>
              <Link to="/profiles">Back to Profiles</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Sent!",
      description: `Your date request to ${profile.name} has been submitted successfully.`,
    });
    setShowRequestForm(false);
    setFormData({ name: "", email: "", preferredDate: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 md:pt-24">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-6">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </div>

        {/* Profile Content */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Image Section */}
              <div className="relative">
                <div className="sticky top-28">
                  <div className="relative w-full max-w-[420px] mx-auto aspect-[3/4] rounded-3xl overflow-hidden bg-secondary shadow-elevated">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                          <span className="text-4xl text-muted-foreground">
                            {profile.name.charAt(0)}
                          </span>
                        </div>
                        <p className="text-muted-foreground">Photo placeholder</p>
                        <p className="text-muted-foreground/60 text-sm">420 × 560</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="py-4">
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Heart className="w-5 h-5" />
                  <span className="font-body text-sm font-medium">Verified Profile</span>
                </div>

                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
                  {profile.name}
                </h1>
                
                <p className="font-heading text-2xl text-muted-foreground mb-4">
                  {profile.age} years old
                </p>

                <div className="flex items-center gap-2 text-muted-foreground mb-8">
                  <MapPin className="w-5 h-5" />
                  <span className="font-body text-lg">{profile.location}</span>
                </div>

                {/* Tagline */}
                <div className="p-6 bg-secondary/50 rounded-2xl mb-8">
                  <p className="font-body text-lg text-foreground italic">
                    "{profile.tagline}"
                  </p>
                </div>

                {/* About */}
                <div className="mb-8">
                  <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                    About Me
                  </h2>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {profile.bio}
                  </p>
                </div>

                {/* Interests */}
                <div className="mb-10">
                  <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                    Interests
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {profile.interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full font-body text-sm font-medium"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  variant="hero"
                  size="xl"
                  className="w-full md:w-auto gap-2"
                  onClick={() => setShowRequestForm(true)}
                >
                  <Calendar className="w-5 h-5" />
                  Send Date Request
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Request Form Modal */}
      {showRequestForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-card rounded-3xl shadow-elevated p-8 animate-scale-in">
            <button
              onClick={() => setShowRequestForm(false)}
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full primary-gradient flex items-center justify-center">
                <Calendar className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                Request a Date
              </h2>
              <p className="font-body text-muted-foreground">
                Send a date request to {profile.name}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your name"
                  className="h-12 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-2">
                  Your Email
                </label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter your email"
                  className="h-12 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-2">
                  Preferred Date
                </label>
                <Input
                  type="date"
                  required
                  value={formData.preferredDate}
                  onChange={(e) =>
                    setFormData({ ...formData, preferredDate: e.target.value })
                  }
                  className="h-12 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Write a thoughtful message introducing yourself..."
                  className="min-h-[120px] rounded-xl resize-none"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send Request
              </Button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProfileDetails;
