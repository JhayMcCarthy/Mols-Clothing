import { useState } from 'react';

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const galleryImages = [
        { src: '/images/gallery/africanprintdress.jpeg', alt: 'African Print Dress' },
        { src: '/images/gallery/kentefabricdesign.jpeg', alt: 'Kente Fabric Design' },
        { src: '/images/gallery/ankarastyletop.jpeg', alt: 'Ankara Style Top' },
        { src: '/images/gallery/dashiki.jpeg', alt: 'Dashiki' },
        { src: '/images/gallery/boubou.jpeg', alt: 'Boubou' },
        { src: '/images/gallery/kaftan.jpeg', alt: 'Kaftan' },
        { src: '/images/gallery/bridal.jpeg', alt: 'Bridal Wear' },
        { src: '/images/gallery/jumpsuit.jpeg', alt: 'Jumpsuit' },
    ];

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };

    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-5xl font-bold text-center mb-12" style={{color: '#0F8E69'}}>Our Gallery</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {galleryImages.map((image, index) => (
                    <div 
                        key={index} 
                        className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                        onClick={() => openModal(image)}
                    >
                        <img 
                            src={image.src} 
                            alt={image.alt} 
                            className="w-100 h-100 object-cover transform group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/400x400/cccccc/666666?text=Image+Coming+Soon';
                                e.target.alt = 'Image Coming Soon';
                            }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{backgroundColor: 'rgba(15, 142, 105, 0.8)'}}>
                            <div className="text-center">
                                <p className="text-white text-xl font-semibold mb-2">{image.alt}</p>
                                <p className="text-white text-sm">Click to view larger</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="relative max-w-4xl max-h-full">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 transition-colors z-10"
                        >
                            ×
                        </button>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-100 max-h-100 object-contain rounded-lg"
                            onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/800x600/cccccc/666666?text=Image+Coming+Soon';
                                e.target.alt = 'Image Coming Soon';
                            }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 text-white p-4 rounded-b-lg" style={{backgroundColor: 'rgba(15, 142, 105, 0.9)'}}>
                            <h3 className="text-xl font-semibold">{selectedImage.alt}</h3>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Gallery;
