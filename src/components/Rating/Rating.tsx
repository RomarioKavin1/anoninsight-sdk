import React, { useState } from 'react';
import './rating.scss';
export interface RatingProps {
  groupid: string;
}
export const Rating: React.FC<RatingProps> = ({groupid}) => {
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState<string>('');

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Rating:', rating);
    console.log('Comment:', comment);
  };

  return (
    <div className='rating-form'>
      <h2>Rate Us {groupid}</h2>
      <form onSubmit={handleSubmit}>
        <div className='rating-input'>
          {[1, 2, 3, 4, 5].map((value) => (
            <label key={value}>
              <input
                type='radio'
                name='rating'
                value={value}
                checked={rating === value}
                onChange={() => handleRatingChange(value)}
              />
              <span className='star'>&#9733;</span>
            </label>
          ))}
        </div>
        <textarea
          className='comment-input'
          placeholder='Leave an anonymous feedback'
          value={comment}
          onChange={handleCommentChange}
        />
        <button type='submit' className='submit-button'>
          Submit 
        </button>
      </form>
    </div>
  );
};
