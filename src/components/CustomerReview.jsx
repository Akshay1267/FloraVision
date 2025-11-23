// import { useState } from 'react';
import reviewBlur from "../assets/reviewBlur.png"

export default function CustomerReview() {
//   const [currentPage, setCurrentPage] = useState(1);
  
  const reviews = [
    {
      id: 1,
      name: "Shelly Russel",
      rating: 4.5,
      review: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      id: 2,
      name: "Lula Rolfson",
      rating: 4.5,
      review: "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
    {
      id: 3,
      name: "Carol Huels",
      rating: 4.5,
      review: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop"
    }
  ];

  const StarIcon = ({ filled }) => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="text-yellow-400">
          <StarIcon filled={true} />
        </span>
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-4 h-4">
          <span className="text-yellow-400 absolute">
            <StarIcon filled={false} />
          </span>
          <div className="overflow-hidden w-2 absolute">
            <span className="text-yellow-400">
              <StarIcon filled={true} />
            </span>
          </div>
        </div>
      );
    }
    
    return stars;
  };

  return (
    <div className="min-h-screen py-16 px-4 bg-[#1B2316] ">
      <div className="max-w-7xl mx-auto"> 
        <div className="flex justify-center items-center mb-12 pb-15">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Customer Review
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="relative p-8 overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <img src={reviewBlur} alt="" className="absolute inset-0 w-full h-full object-fill" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img 
                      src={review.image}
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-green-600/50"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-lg">{review.name}</h3>
                    <div className="flex gap-1 mt-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {review.review}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
