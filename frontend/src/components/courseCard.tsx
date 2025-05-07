import React from "react";

interface CourseCardProps {
  imageUrl: string;
  title: string;
  originalPrice: string;
  discountedPrice: string;
  discount: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ imageUrl, title, originalPrice, discountedPrice, discount }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-sm font-bold rounded-full">
          {discount}%
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="flex items-center mb-4">
          <span className="text-gray-500 line-through text-sm mr-2">{originalPrice}</span>
          <span className="text-blue-600 font-semibold text-lg">{discountedPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
