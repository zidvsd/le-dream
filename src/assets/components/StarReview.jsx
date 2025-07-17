import React from "react";
import { Star } from "lucide-react";
const StarReview = () => {
  return (
    <div className="flex flex-row items-center">
      <Star className="text-accent fill-accent size-4" />
      <Star className="text-accent fill-accent size-4" />
      <Star className="text-accent fill-accent size-4" />
      <Star className="text-accent fill-accent size-4" />
      <Star className="text-accent fill-accent size-4" />
    </div>
  );
};

export default StarReview;
