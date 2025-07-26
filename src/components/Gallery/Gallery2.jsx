import React, { useState, useEffect } from "react";
import { galleryItems } from "../../Data";

const images = galleryItems.map(item => item.image);

const ImageGallery = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const openImage = (index) => {
        setSelectedImageIndex(index);
    };

    const closeImage = () => {
        setSelectedImageIndex(null);
    };

    const showNextImage = (e) => {
        e.stopPropagation();
        setSelectedImageIndex(prevIndex => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    };

    const showPrevImage = (e) => {
        e.stopPropagation();
        setSelectedImageIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    };

    // Enable keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedImageIndex !== null) {
                if (e.key === "ArrowRight") showNextImage(e);
                if (e.key === "ArrowLeft") showPrevImage(e);
                if (e.key === "Escape") closeImage();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedImageIndex]);

    return (
        <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 min-h-screen py-12 px-4">
            <h2 className="text-4xl font-bold text-center mb-10 text-purple-700 drop-shadow-lg">📸 ShineIn Gallery</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="rounded-2xl overflow-hidden shadow-lg border border-purple-300 hover:scale-105 transform transition duration-300 cursor-pointer"
                        onClick={() => openImage(index)}
                    >
                        <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-64 object-cover" />
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedImageIndex !== null && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center transition-all" onClick={closeImage}>
                    <div className="relative p-4 bg-white rounded-xl shadow-2xl max-w-4xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                        <img src={images[selectedImageIndex]} alt="Full View" className="w-full h-[90vh] object-contain rounded-xl transition-transform duration-300 scale-105" />

                        <div className="absolute top-3 right-3">
                            <button onClick={closeImage} className="bg-red-500 text-white px-3 py-1 rounded-full text-sm hover:bg-red-700">✖ Close</button>
                        </div>

                        {/* Navigation buttons */}
                        <div className="absolute inset-0 flex justify-between items-center px-6">
                            <button onClick={showPrevImage} className="bg-white p-4 rounded-full shadow-md text-gray-700 hover:bg-gray-300">◀</button>
                            <button onClick={showNextImage} className="bg-white p-4 rounded-full shadow-md text-gray-700 hover:bg-gray-300">▶</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageGallery;