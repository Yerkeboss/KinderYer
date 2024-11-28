import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/alb9.jpg';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import { useTranslation } from 'react-i18next';

function About() {

    const { t } = useTranslation();

  return (
    <div className='about-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>{t('about')}</h1>
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
    </div>
  )
}

export default About;