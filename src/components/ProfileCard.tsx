import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Profile } from "@/data/profiles";

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard = ({ profile }: ProfileCardProps) => {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1">
      {/* Image Placeholder */}
      <div className="relative w-full h-[400px] bg-muted overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent z-10" />
        <div className="w-full h-full flex items-center justify-center bg-secondary">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-muted flex items-center justify-center">
              <span className="text-3xl text-muted-foreground">
                {profile.name.charAt(0)}
              </span>
            </div>
            <p className="text-muted-foreground text-sm">Photo placeholder</p>
            <p className="text-muted-foreground/60 text-xs">300 × 400</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-heading text-xl font-semibold text-foreground">
            {profile.name}, {profile.age}
          </h3>
        </div>

        <div className="flex items-center gap-1 text-muted-foreground mb-3">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-body">{profile.location}</span>
        </div>

        <p className="text-muted-foreground font-body text-sm mb-4 line-clamp-2">
          {profile.tagline}
        </p>

        <Button variant="outline" className="w-full" asChild>
          <Link to={`/profile/${profile.id}`}>View Profile</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProfileCard;
