import { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Grid,
  List,
  Search,
  Filter,
  Share,
} from "lucide-react";
const galleryImages = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/32624463/pexels-photo-32624463.jpeg",
    title: "Occupational Therapy Session",
    category: "Occupational",
    description: "Helping children improve motor skills through engaging activities.",
    author: "Shine & Grow Team",
    likes: 328,
    views: 1532,
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/32643805/pexels-photo-32643805.jpeg",
    title: "Nature Play Therapy",
    category: "Recreational",
    description: "Children enjoying outdoor activities to boost mental and emotional growth.",
    author: "Therapist Priya",
    likes: 432,
    views: 1943,
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/32635890/pexels-photo-32635890.jpeg",
    title: "Speech Therapy Practice",
    category: "Speech",
    description: "Interactive language sessions designed for speech development.",
    author: "Speech Specialist Anjali",
    likes: 591,
    views: 2234,
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/32642720/pexels-photo-32642720.jpeg",
    title: "Sensory Integration Room",
    category: "Sensory",
    description: "Specially designed space to help children with sensory processing issues.",
    author: "Sensory Expert Ramya",
    likes: 764,
    views: 2843,
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/2733337/pexels-photo-2733337.jpeg",
    title: "Educational Therapy Session",
    category: "Educational",
    description: "One-on-one academic support to enhance learning ability.",
    author: "Tutor & Therapist Rani",
    likes: 682,
    views: 3102,
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/32624463/pexels-photo-32624463.jpeg",
    title: "Group Therapy Fun",
    category: "Group",
    description: "Interactive group activities for social and emotional development.",
    author: "Therapy Coordinator Ravi",
    likes: 504,
    views: 1756,
  },
];

const categories = [
  "All",
  "Occupational",
  "Speech",
  "Educational",
  "Sensory",
  "Recreational",
  "Group",
];


const GalleryPageMain = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const modalRef = useRef(null);

  const filteredImages = galleryImages.filter((image) => {
    const matchesCategory =
      selectedCategory === "All" || image.category === selectedCategory;
    const matchesSearch =
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const handleShare = async (image) => {
    const shareData = {
      title: image.title,
      text: `Check out this amazing ${image.category.toLowerCase()} photo: ${image.description}`,
      url: window.location.href,
    };

    // Try native sharing first (mobile devices)
    if (
      navigator.share &&
      navigator.canShare &&
      navigator.canShare(shareData)
    ) {
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        if (error.name !== "AbortError") {
          console.log("Native share failed:", error);
        }
        // Fall through to clipboard fallback
      }
    }

    // Fallback: copy to clipboard
    const shareText = `${image.title}\n${image.description}\n\nView in gallery: ${window.location.href}`;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(shareText);
        alert("✅ Link copied to clipboard!");
      } else {
        // Fallback for older browsers or non-secure contexts
        const textArea = document.createElement("textarea");
        textArea.value = shareText;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          document.execCommand("copy");
          alert("✅ Link copied to clipboard!");
        } catch (err) {
          alert(`Share this image:\n\n${shareText}`);
        } finally {
          document.body.removeChild(textArea);
        }
      }
    } catch (error) {
      console.log("Clipboard failed:", error);
      // Final fallback: show share text in alert
      alert(`Share this image:\n\n${shareText}`);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gallery-50 via-white to-emerald-50 flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-gallery-200 border-t-emerald-500 rounded-full animate-spin mx-auto"></div>
            <div
              className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-gallery-400 rounded-full animate-spin mx-auto"
              style={{
                animationDirection: "reverse",
                animationDuration: "1.5s",
              }}
            ></div>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-display font-bold text-gallery-900">
              Curating Excellence
            </h2>
            <p className="text-gallery-600 max-w-md">
              Preparing a stunning collection of visual masterpieces for your
              viewing pleasure
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="">
    
    <br />
    
      {/* Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gallery-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search gallery..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gallery-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-emerald-500 text-white shadow-lg"
                    : "bg-white text-gallery-600 border border-gallery-200 hover:bg-gallery-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* View Mode */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-all duration-300 ${
                viewMode === "grid"
                  ? "bg-emerald-500 text-white"
                  : "bg-white text-gallery-600 border border-gallery-200"
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-all duration-300 ${
                viewMode === "list"
                  ? "bg-emerald-500 text-white"
                  : "bg-white text-gallery-600 border border-gallery-200"
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group gallery-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer"
                onClick={() => openModal(image)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                      {image.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-gallery-900 mb-1">
                    {image.title}
                  </h3>
                  <p className="text-gallery-600 text-sm mb-2 line-clamp-2">
                    {image.description}
                  </p>
                  <p className="text-gallery-500 text-xs">by {image.author}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group gallery-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl cursor-pointer flex"
                onClick={() => openModal(image)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative w-48 h-32 flex-shrink-0">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                      {image.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-gallery-900 mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gallery-600 mb-2">{image.description}</p>
                  <p className="text-gallery-500 text-sm">by {image.author}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gallery-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gallery-400" />
            </div>
            <h3 className="text-xl font-display font-semibold text-gallery-900 mb-2">
              No results found
            </h3>
            <p className="text-gallery-600">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            ref={modalRef}
            className="relative max-w-5xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center transition-colors duration-300"
            >
              ×
            </button>

            <div className="flex flex-col lg:flex-row">
              <div className="relative lg:w-2/3">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-64 lg:h-96 object-cover"
                />
              </div>

              <div className="lg:w-1/3 p-6 lg:p-8">
                <div className="mb-4">
                  <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                    {selectedImage.category}
                  </span>
                </div>

                <h2 className="text-2xl font-display font-bold text-gallery-900 mb-3">
                  {selectedImage.title}
                </h2>

                <p className="text-gallery-600 mb-4">
                  {selectedImage.description}
                </p>

                <div className="border-t border-gallery-200 pt-4 mb-4">
                  <p className="text-sm text-gallery-500 mb-2">Artist</p>
                  <p className="font-medium text-gallery-900">
                    {selectedImage.author}
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleShare(selectedImage)}
                    className="flex-1 px-4 py-2 bg-emerald-500 text-white rounded-xl font-medium hover:bg-emerald-600 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <Share className="w-4 h-4" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPageMain;
