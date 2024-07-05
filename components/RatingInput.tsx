import React, { useState } from 'react';

interface RatingInputProps {
  label: string;
  onChange: (label: string, rating: number) => void;
}

const RatingInput: React.FC<RatingInputProps> = ({ label, onChange }) => {
  const [rating, setRating] = useState<number>(0);

  const handleClick = (rate: number) => {
    setRating(rate);
    onChange(label, rate);
  };

  return (
    <div className="flex items-center mb-2">
      <span className="mr-2">{label}</span>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`cursor-pointer text-2xl ${i < rating ? 'text-orange-500' : 'text-gray-300'}`}
            onClick={() => handleClick(i + 1)}
          >
            &#9733;
          </span>
        ))}
      </div>
    </div>
  );
};

export default RatingInput;
