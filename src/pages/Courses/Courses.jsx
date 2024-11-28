import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import MusicCourse from '../../utils/images/music.webp';
import Taekwondo from '../../utils/images/taekwondo.webp';
import English from '../../utils/images/english.png';
import Kazakh from '../../utils/images/kazakh.png';
import Choreography from '../../utils/images/choreography.png';
import Math from '../../utils/images/math.png';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { useTranslation } from 'react-i18next';



function Courses() {

    const { t } = useTranslation();

    const courses = [
        {
            id: 1,
            img: [MusicCourse],
            titleKey: 'course1',
            descriptionKey: 'course1-descr',
        },
        {
            id: 2,
            img: [Taekwondo],
            titleKey: 'course2',
            descriptionKey: 'course2-descr',
        },
        {
            id: 3,
            img: [English],
            titleKey: 'course3',
            descriptionKey: 'course3-descr',
        },
        {
            id: 4,
            img: [Kazakh],
            titleKey: 'course4',
            descriptionKey: 'course4-descr',
        },
        {
            id: 5,
            img: [Choreography],
            titleKey: 'course5',
            descriptionKey: 'course5-descr',
        },
        {
            id: 6,
            img: [Math],
            titleKey: 'course6',
            descriptionKey: 'course6-descr',
        },
    ];

    return (
        <div className="courses-page">
            <header className="height-75">
                <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
                    <h1 className="text-center fw-semibold" >{t('subjects')}</h1>
                    <p className="text-justify w-75 mb-5" style={{marginTop:'2rem', fontWeight:'bold', fontSize:'1.2rem'}}>{t('courses-header')}</p>
                </div>
            </header>

            <div className="container py-5">
                <div className="row g-4">
                    {courses.map((course) => (
                        <div key={course.id} className="col-lg-6">
                            <Card className="text-white shadow scale-hover-effect">
                                <Card.Img className='coursesImage' src={course.img} />
                                <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center p-md-5">
                                    <Card.Title className="fs-1 text-danger">{t(course.titleKey)}</Card.Title>
                                    <Card.Text className="text-center">{t(course.descriptionKey)}</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-dark text-light py-5">
                <FaqAccordion />
            </div>
        </div>
    );
}

export default Courses;