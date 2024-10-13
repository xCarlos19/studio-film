import React, { useState } from 'react';// Asegúrate de que Image esté importado correctamente

interface ImageGalleryProps {
  images: { src: string; alt: string }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null); // Para controlar la imagen seleccionada
  const [isModalOpen, setIsModalOpen] = useState(false); // Para controlar si el modal está abierto

  // Función que se ejecuta al hacer clic en la imagen
  const handleImageClick = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      {/* Galería de imágenes */}
      <div className="mx-auto container my-8 p-4 columns-2 md:columns-3 lg:columns-4 xl:columns-5">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Image from ${image.alt} album`}
            width={300}
            height={300}
            className="rounded mb-4 border border-transparent hover:scale-105 hover:cursor-pointer transition-all duration-75 ease-in-out"
            loading="lazy"
            onClick={() => handleImageClick(image)} // Al hacer clic en la imagen
          />
        ))}
      </div>

      {/* Modal para mostrar la imagen en grande */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              &times;
            </button>
            <img
              src={selectedImage?.src}
              alt={`Large view of ${selectedImage?.alt}`}
              className="max-w-sm max-h-[90%] md:max-w-xl rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;