import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; 
import "./Footer.css"

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
      <footer className="w-100 mt-auto bg-pink p-4" id="color">
        <div className="container text-center mb-4">
          {location.pathname !== '/'}
          <h4>
            Made with{' '}
            <span
              className="emoji"
              role="img"
              aria-label="heart"
              aria-hidden="false"
            >
              ❤️
            </span>{' '}
            by The PowerPuff Girls.
          </h4>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  

    // <button
            //   className="btn btn-dark mb-3"
            //   onClick={() => navigate(-1)}
            // >
            //   &larr; Go Back
            // </button>