import React from "react";
import CourseCard from "../components/courseCard";
import FlutterImage from "../assets/flutter.jpg";

import Navbar from "../components/Navbar";


const Courses: React.FC = () => {
  const courses = [
    {
      imageUrl: FlutterImage,
      title: "2 Months Flutter Mobile Application Development Course",
      originalPrice: "Rs 25,000.00",
      discountedPrice: "Rs 20,000.00",
      discount: "20",
    },
    {
      imageUrl: FlutterImage,
      title: "2 Months Flutter Mobile Application Development Course",
      originalPrice: "Rs 25,000.00",
      discountedPrice: "Rs 20,000.00",
      discount: "20",
    },
    {
        imageUrl: FlutterImage,
        title: "2 Months Flutter Mobile Application Development Course",
        originalPrice: "Rs 25,000.00",
        discountedPrice: "Rs 20,000.00",
        discount: "20",
      },
      {
        imageUrl: FlutterImage,
        title: "2 Months Flutter Mobile Application Development Course",
        originalPrice: "Rs 25,000.00",
        discountedPrice: "Rs 20,000.00",
        discount: "20",
      },
      {
        imageUrl: FlutterImage,
        title: "2 Months Flutter Mobile Application Development Course",
        originalPrice: "Rs 25,000.00",
        discountedPrice: "Rs 20,000.00",
        discount: "20",
      },
      {
        imageUrl: FlutterImage,
        title: "2 Months Flutter Mobile Application Development Course",
        originalPrice: "Rs 25,000.00",
        discountedPrice: "Rs 20,000.00",
        discount: "20",
      },

  ];

  return (
    <>
    <Navbar />
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Courses;
