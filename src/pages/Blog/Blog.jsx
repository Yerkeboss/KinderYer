import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/album1.jpg';
import Blog2Img from '../../utils/images/alb13.jpg';
import Blog3Img from '../../utils/images/alb9.jpg';
import Blog4Img from '../../utils/images/alb10.jpg';
import Blog5Img from '../../utils/images/alb8.jpg';
import Blog6Img from '../../utils/images/alb14.jpg';
import { useTranslation } from 'react-i18next';



function Blog() {
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
        },
        {
            id: 4,
            img: [Blog4Img],
            title: `${t('blog4-title')}`,
            description: `${t('blog4-descr')}`
        },
        {
            id: 5,
            img: [Blog5Img],
            title: `${t('blog5-title')}`,
            description: `${t('blog5-descr')}`
        },
        {
            id: 6,
            img: [Blog6Img],
            title: `${t('blog6-title')}`,
            description: `${t('blog6-descr')}`
        }
    ];
    return (
        <div className='blog-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold'>{t('blog')}</h1>
                </div>
            </header>

            <div className='bg-body-tertiary py-5'>
                <div className="container">
                    <div className='row g-4'>
                        {blogs.map((blog) => (
                            <div key={blog.id} className='col-md-6 col-lg-4'>
                                <Link to="/blog" className='text-decoration-none'>
                                    <Card className='h-100 shadow scale-hover-effect' style={{ borderRadius: '2rem' }}>
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
                </div>
            </div>
        </div>
    )
}

export default Blog;