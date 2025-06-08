import { useState } from "react";
import PropTypes from "prop-types";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import styles from "./CamperGallery.module.css";

const CamperGallery = ({ gallery, name }) => {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!gallery || gallery.length === 0) {
    return null;
  }

  const slides = gallery.map((image, index) => ({
    src: image.original || image.thumb,
    alt: `${name} - Image ${index + 1}`,
  }));

  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setOpen(true);
  };

  return (
    <>
      <div className={styles.gallery}>
        {gallery.map((image, index) => (
          <div
            key={index}
            className={styles.imageWrapper}
            onClick={() => handleImageClick(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleImageClick(index);
              }
            }}
          >
            <img
              src={image.thumb || image.original}
              alt={`${name} - Image ${index + 1}`}
              className={styles.image}
            />
            <div className={styles.overlay}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.zoomIcon}
              >
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21L16.65 16.65"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 8V14"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 11H14"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={photoIndex}
        slides={slides}
        on={{
          view: ({ index }) => setPhotoIndex(index),
        }}
      />
    </>
  );
};

CamperGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      thumb: PropTypes.string,
      original: PropTypes.string,
    })
  ),
  name: PropTypes.string.isRequired,
};

export default CamperGallery;
