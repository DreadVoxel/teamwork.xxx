import { useState, useMemo } from "react";
import { Search, MapPin, SlidersHorizontal } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProfileCard from "@/components/ProfileCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { profiles } from "@/data/profiles";

const Profiles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [ageRange, setAgeRange] = useState<[number, number]>([18, 50]);
  const [showFilters, setShowFilters] = useState(false);

  const locations = useMemo(() => {
    return [...new Set(profiles.map((p) => p.location))];
  }, []);

  const filteredProfiles = useMemo(() => {
    return profiles.filter((profile) => {
      const matchesSearch =
        profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLocation =
        !selectedLocation || profile.location === selectedLocation;
      const matchesAge =
        profile.age >= ageRange[0] && profile.age <= ageRange[1];
      return matchesSearch && matchesLocation && matchesAge;
    });
  }, [searchQuery, selectedLocation, ageRange]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 md:pt-24">
        {/* Page Header */}
        <section className="hero-gradient py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Browse Profiles
              </h1>
              <p className="font-body text-muted-foreground text-lg">
                Discover amazing people who are looking for meaningful connections just like you.
              </p>
            </div>
          </div>
        </section>

        {/* Search & Filters */}
        <section className="py-8 border-b border-border bg-card/50 sticky top-16 md:top-20 z-40 backdrop-blur-lg">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by name or interests..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 rounded-xl border-border bg-background"
                />
              </div>

              {/* Location Filter */}
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="h-12 pl-12 pr-8 rounded-xl border border-border bg-background text-foreground font-body appearance-none cursor-pointer min-w-[200px]"
                >
                  <option value="">All Locations</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filter Toggle */}
              <Button
                variant={showFilters ? "default" : "outline"}
                onClick={() => setShowFilters(!showFilters)}
                className="h-12 px-6"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Expanded Filters */}
            {showFilters && (
              <div className="mt-6 pt-6 border-t border-border animate-fade-in">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex items-center gap-4">
                    <span className="font-body text-sm text-muted-foreground whitespace-nowrap">
                      Age Range:
                    </span>
                    <div className="flex items-center gap-2">
                      <Input
                        type="number"
                        min={18}
                        max={100}
                        value={ageRange[0]}
                        onChange={(e) =>
                          setAgeRange([parseInt(e.target.value) || 18, ageRange[1]])
                        }
                        className="w-20 h-10"
                      />
                      <span className="text-muted-foreground">to</span>
                      <Input
                        type="number"
                        min={18}
                        max={100}
                        value={ageRange[1]}
                        onChange={(e) =>
                          setAgeRange([ageRange[0], parseInt(e.target.value) || 50])
                        }
                        className="w-20 h-10"
                      />
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedLocation("");
                      setAgeRange([18, 50]);
                    }}
                  >
                    Clear All
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Profile Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            {/* Results Count */}
            <p className="font-body text-muted-foreground mb-8">
              Showing {filteredProfiles.length} of {profiles.length} profiles
            </p>

            {filteredProfiles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {filteredProfiles.map((profile, index) => (
                  <div
                    key={profile.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <ProfileCard profile={profile} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-heading text-2xl text-foreground mb-2">
                  No profiles found
                </p>
                <p className="font-body text-muted-foreground">
                  Try adjusting your search or filters
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Profiles;
