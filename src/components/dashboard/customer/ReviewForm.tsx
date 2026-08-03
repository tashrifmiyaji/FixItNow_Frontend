"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useCreateReview } from "@/hooks/review/useCreateReview";

interface Props {
  bookingId: string;
}

export default function ReviewForm({ bookingId }: Props) {
  const { mutate } = useCreateReview();

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    mutate({
      bookingId,
      rating,
      comment,
    });

    setComment("");
    setRating(5);
  };

  return (
    <div className="space-y-3">

      <Input
        type="number"
        min={1}
        max={5}
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      />

      <Input
        placeholder="Write review..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <Button onClick={handleSubmit}>
        Submit Review
      </Button>

    </div>
  );
}