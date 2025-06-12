// components/publications/PublicationCard.js
import React from "react";
import axios from 'axios';

const PublicationCard = ({ title, imageSrc, pdfUrl, id }) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const handleBookmarkClick = (e) => {
    e.preventDefault();
    console.log(`Bookmark clicked for ID: ${id}`);
  };

  const handleRatingClick = () => {
    console.log(`Rating clicked for ID: ${id}`);
  };

  const handleImageClick = async () => {
    console.log(`Image clicked for ID: ${id}`);
    try {
      await axios.put(`${baseUrl}V1/publications/views/${id}`);
      console.log(`View recorded for ID: ${id}`);
    } catch (error) {
      console.error(`Failed to record view for ID: ${id}`, error);
    }
  };

  return (
    <div className="card col-md-4">
      <div className="card-content">
        <div className="item" style={{ marginTop: "30px" }}>
          <div id={`NCSIPUB_${id}`} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="handouts-section">
                  <a href="#" style={{ cursor: "default" }}>
                    <div className="_title">
                      <h5 style={{ color: "white" }}>{title}</h5>
                    </div>
                  </a>
                  <div className="hoverimage img-section">
                    <a
                      href="#"
                      className="handleBookmark"
                      onClick={handleBookmarkClick}
                      data-bookmark-id={id}
                    >
                      <i
                        style={{ display: "none" }}
                        className="far fa-bookmark"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href={pdfUrl}>
                      <img
                        className="img-responsive attachment_ID"
                        id={`attachment_${id}`}
                        src={imageSrc}
                        alt={title}
                        onClick={handleImageClick}
                      />
                    </a>
                    <i
                      className="fa fa-star"
                      style={{
                        fontSize: "18px",
                        color: "#c3c3c3",
                        float: "right",
                        marginTop: "-19px",
                        marginRight: "-18px",
                        cursor: "pointer",
                        position: "relative",
                        zIndex: 10,
                      }}
                      onClick={handleRatingClick}
                    ></i>
                  </div>
                </div>
              </div>
              {/* Flip-card-back (optional) */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;
