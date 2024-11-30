import React, { useState } from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/alb9.jpg';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

function About() {

    const { t } = useTranslation();
    const [showVideo, setShowVideo] = useState(true);

  return (
    <div className='about-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='container1 text-center fw-semibold' >{t('about')}</h1>
                <p className='text-center w-75 mb-5' style={{marginTop:'2rem', fontWeight:'bold', fontSize:'1.2rem'}}>{t('aboutus-header')}</p>
            </div>
        </header>

        <div className='container my-5'>
            <div className="row">
                <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                    <h2 className='mb-4 mb-lg-5' style={{textAlign:'justify'}}>{t('aboutus-title')}</h2>
                    <p>{t('aboutus-info1')}</p>
                    <p className='mb-4 mb-lg-5' style={{textAlign:'justify'}}>{t('aboutus-info2')}</p>
                    <Link to="/contact">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>{t('contactus')}</button>
                    </Link>
                </div>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={AboutUsSectionImg} className='img-fluid w-100' alt="" />
                </div>
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <ChooseSection />
        </div>
        {showVideo && (
      <div className="video-player-container">
        <FontAwesomeIcon icon={faX} className="close-button" onClick={() => setShowVideo(false)} />
        <video autoPlay loop className="video-wrap">
          <source
            src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/About.mp4?alt=media&token=e4c76835-e65b-403c-9b9c-919eedbf7dfd"
            type="video/mp4"
            allowFullScreen
          />
        </video>
      </div>
      )}

    </div>
  )
}

export default About;