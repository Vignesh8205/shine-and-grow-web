import { FaCheckCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function EnrolledSuccessMessage({ show, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose?.();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        >
          <div className="relative max-w-md w-full p-6 rounded-3xl border border-green-300 bg-white/30 backdrop-blur-xl shadow-2xl flex items-center space-x-4 overflow-hidden">
            {/* Gradient Glow Background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-400 via-emerald-400 to-lime-300 opacity-10 blur-2xl animate-pulse"></div>

            <FaCheckCircle className="text-green-600 w-12 h-12 flex-shrink-0 drop-shadow-lg" />
            <div>
              <h4 className="text-green-800 font-extrabold text-2xl tracking-wide">
                Enrolled!
              </h4>
              <p className="text-gray-900 font-medium text-base">
                Your enrollment was successful.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
