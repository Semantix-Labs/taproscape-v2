import React, { useState } from 'react';
import RatingInput from './RatingInput';

const CommentForm: React.FC = () => {
  const [ratings, setRatings] = useState<{ [key: string]: number }>({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRatingChange = (label: string, rating: number) => {
    setRatings((prevRatings) => ({ ...prevRatings, [label]: rating }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = { name, email, comment, ratings };

    try {
      const response = await fetch('/api/send-comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Review submitted successfully!');
        
        // Clear the form fields
        setName('');
        setEmail('');
        setComment('');
        setRatings({});
        
        // Hide the success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      } else {
        alert('Failed to submit comment.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold mb-4">Put a Comment</h3>
      {successMessage && (
        <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">
          {successMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-2 gap-4 mb-4">
          <RatingInput label="Accommodation" onChange={handleRatingChange} />
          <RatingInput label="Destination" onChange={handleRatingChange} />
          <RatingInput label="Meals" onChange={handleRatingChange} />
          <RatingInput label="Overall" onChange={handleRatingChange} />
          <RatingInput label="Transport" onChange={handleRatingChange} />
          <RatingInput label="Value for Money" onChange={handleRatingChange} />
        </div>
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Full Name *"
            className="w-1/2 p-2 border rounded-lg"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail *"
            className="w-1/2 p-2 border rounded-lg"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <textarea
          placeholder="Your Comment ..."
          className="w-full p-2 border rounded-lg mb-4"
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-orange-500 text-white rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
