import React from 'react';
import './star.scss';
const RatingDialog: React.FC = () => {
  return (
    <>
      <svg className='icon-source'>
        <defs>
          <path
            id='star'
            d='M12,1.776l3.286,6.779l7.464,1.032l-5.433,5.221l1.326,7.417L12,18.67l-6.645,3.555l1.327-7.417L1.25,9.587l7.464-1.032L12,1.776z'
          />
        </defs>
      </svg>
      <h1>Lets rate it</h1>
      <p dir='rtl'>
        <button title='the best' className='good-rate'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox='0 0 24 24'
          >
            <use xlinkHref='#star' className='icon-star' />
          </svg>
        </button>
        <button title='cool' className='normal-rate'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox='0 0 24 24'
          >
            <use xlinkHref='#star' className='icon-star' />
          </svg>
        </button>
        <button title='so-so' className='bad-rate'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox='0 0 24 24'
          >
            <use xlinkHref='#star' className='icon-star' />
          </svg>
        </button>
      </p>
    </>
  );
};

export default RatingDialog;
