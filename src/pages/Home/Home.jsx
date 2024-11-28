import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import CourseInfo from '../../utils/images/courses1.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/album1.jpg';
import Blog2Img from '../../utils/images/alb13.jpg';
import Blog3Img from '../../utils/images/alb9.jpg';
import { useTranslation } from 'react-i18next';
import React from 'react';

function Home() {
    const { t } = useTranslation(); // Use the translation hook
    const blogs = [
        {
            id: 1,
            img: [Blog1Img],
            title: `${t('blog1-title')}`,
            description: `${t('blog1-descr')}`
        },
        {
            id: 2,
            img: [Blog2Img],
            title: `${t('blog2-title')}`,
            description: `${t('blog2-descr')}`
        },
        {
            id: 3,
            img: [Blog3Img],
            title: `${t('blog3-title')}`,
            description: `${t('blog3-descr')}`
        }
    ];

    return (
        <div className='home-page'>
            <header className='h-100 d-flex align-items-center text-light'>
                <div className='container d-flex flex-column align-items-center' style={{ marginTop: '4rem' }}>
                    <h2 className='home-title'>{t('welcome1')}</h2>
                    <br />
                    <p style={{textAlign:'justify'}}>{t('welcome2')}</p>
                    <br />
                    <div className='welcome-container d-flex flex-column flex-sm-row align-items-center'>
                        <Link to="/courses">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'> {t('subjects')}</button>
                        </Link>
                        <Link to="/contact">
                            <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>{t('contactus')}</button>
                        </Link>
                    </div>
                </div>
            </header>

            <div className="py-5">
                <ChooseSection />
            </div>

            <div className='py-5 bg-light'>
                <div className="container">
                    <div className='row d-flex align-items-center justify-content' style={{ justifyContent: 'space-between', margin: '2rem' }}>
                        <div className='col-lg-5'>
                            <h2 style={{ fontWeight: 'bolder' }} className='text-capitalize'>{t('course-home')}</h2>
                            <p style={{ marginTop: '1rem', textAlign: 'justify' }}>{t('course-home-info')}</p>
                            <Link to="/courses">
                                <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-3'>{t('course-info-btn')}</button>
                            </Link>
                        </div>
                        <div className='col-lg-5 mt-5 mt-lg-0' style={{ justifyContent: 'flex-end', alignItems: 'center', display: 'flex' }}>
                            <img
                                src={CourseInfo}
                                alt=""
                                className='home-course-header'
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-5">
                <FaqAccordion />
            </div>

            <div className='blog-section text-light py-5'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2 className='text-center text-capitalize mb-5'>{t('blog')}</h2>
                    <div className='row g-4'>
                        {blogs.map((blog) => (
                            <div key={blog.id} className='col-md-6 col-lg-4'>
                                <Link to="/blog" className='text-decoration-none'>
                                    <Card className='h-100 shadow scale-hover-effect' style={{borderRadius:'2rem'}}>
                                        <Card.Img className="blog-header-img" variant="top" src={blog.img} />
                                        <Card.Body className='p-md-5'>
                                            <Card.Title style={{ fontWeight: 'bolder' }}>{blog.title}</Card.Title>
                                            <Card.Text style={{ textAlign: 'justify' }}>{blog.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <Link to="/blog">
                        <button type='button' className='btn btn-danger btn-lg mt-5'>{t('blog-btn')}</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;