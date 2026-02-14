import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContentCarousel = ({
  items = [],
  renderCard,
  exploreMoreLink,
  exploreMoreText = "Explore More",
  className = "",
  maxVisibleItems = 7
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  // Determine items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerView(4); // xl
      } else if (window.innerWidth >= 1024) {
        setItemsPerView(3); // lg
      } else if (window.innerWidth >= 640) {
        setItemsPerView(2); // sm
      } else {
        setItemsPerView(1); // mobile
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate the items to display (max 7 items, 7th is explore more if there are more)
  const hasMoreItems = items.length > maxVisibleItems;
  const displayItems = hasMoreItems ? items.slice(0, maxVisibleItems - 1) : items;

  // Total slides including explore more card if needed
  const totalItems = hasMoreItems ? displayItems.length + 1 : displayItems.length;
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Reset index if it exceeds max
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  if (items.length === 0) {
    return null;
  }

  const translateX = -(currentIndex * (100 / itemsPerView));

  return (
    <div className={`relative ${className}`}>
      {/* Navigation Buttons */}
      {totalItems > itemsPerView && (
        <>
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100 hover:bg-purple-50 hover:scale-110"
            }`}
            aria-label="Previous">
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all ${
              currentIndex >= maxIndex
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100 hover:bg-purple-50 hover:scale-110"
            }`}
            aria-label="Next">
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </>
      )}

      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(${translateX}%)`,
          }}>
          {/* Render actual items */}
          {displayItems.map((item, index) => (
            <div
              key={item.id || index}
              className="flex-shrink-0 px-3"
              style={{ width: `${100 / itemsPerView}%` }}>
              {renderCard(item)}
            </div>
          ))}

          {/* Explore More Card (if there are more than maxVisibleItems) */}
          {hasMoreItems && exploreMoreLink && (
            <div
              className="flex-shrink-0 px-3"
              style={{ width: `${100 / itemsPerView}%` }}>
              <Link to={exploreMoreLink}>
                <div className="card flex flex-col items-center justify-center h-full min-h-[320px] hover-lift bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-dashed border-purple-300 hover:border-purple-500 transition-all group">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                    <ArrowRight className="w-8 h-8 text-purple-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {exploreMoreText}
                  </h3>
                  <p className="text-sm text-gray-600 text-center px-4">
                    View all {items.length} items
                  </p>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Pagination Dots */}
      {totalItems > itemsPerView && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-purple-600 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentCarousel;
