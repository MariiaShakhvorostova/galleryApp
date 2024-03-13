import React from "react";
import PropTypes from "prop-types";

const PhotoCard = ({ photo }) => {
  const { webformatURL, user, tags } = photo;

  return (
    <div className="photo-card">
      <img src={webformatURL} alt={tags} />
      <div className="photo-details">
        <p>Photographer: {user}</p>
        <p>Tags: {tags}</p>
      </div>
    </div>
  );
};

PhotoCard.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};

export default PhotoCard;
