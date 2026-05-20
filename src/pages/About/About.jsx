import React, { useState } from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/alb9.jpg';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import { useTranslation } from 'react-i18next';
import img1 from './1.jpeg';
import img2 from './2.jpeg';
import img3 from './3.jpeg';
import img4 from './4.jpeg';
import img5 from './5.jpeg';
import img6 from './6.jpeg';
import imgDoc from './doc.jpeg';

const seminarPhotos = [img1, img2, img3, img4, img5, img6, imgDoc];

function About() {

    const { t } = useTranslation();
    const [lightboxImg, setLightboxImg] = useState(null);

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

        <div className='seminar-section container my-5'>
            <div className='seminar-text-block mb-5'>
                <p>
                    Байзақ ауданы білім бөлімінің жұмыс жоспарына сәйкес 2025 жылдың 30 мамыр күні мектеп жасына дейінгі балаларға экологиялық тәрбие беру, қоршаған ортаға сүйіспеншілігін, экологиялық сауаттылығы дағдыларын арттыру мақсатында «ЕCOLAB» жобасы бойынша озат тәжірибені жинақтау және тарату мақсатында мектепке дейінгі ұйым педагогтеріне арналған «Балабақша жағдайында тәрбиеленушілерге экологиялық тәрбие берудің маңызы» тақырыбында ЖШС «Қара-Бура» «Ерсән-Жәнай» жекеменшік бөбекжай-бақшасында аудандық семинар өтті.
                </p>
                <p>
                    Семинарға мектепке дейінгі ұйымнан 35 педагог қатысты. Мақсаты: Балаларға экологиялық тәрбие беру арқылы қоршаған ортаға қамқорлықпен қарау дағдыларын жетілдіреді, табиғат құбылыстарына қызығушылықтарын арттырады. Педагогтар ЖШС «Ерсән-Жәнай» бөбекжай-бақшасының топтарымен және «Гүлдер аллеясы» мен танысты. Сонымен қатар «Зообақ» ашылу салтанаты өтті. ЖШС «Ерсән-Жәнай» бөбекжай-бақшасының әдіскері Рысқұлбекова Қ баяндама оқып, тәрбиешілер Жалғасбаева А, Жумадилдаева Г, Таутаева М, Қалиева Т, Мамытова Б өздерінің іс-тәжірибелерімен бөлісті.
                </p>
            </div>

            <div className='seminar-gallery'>
                {seminarPhotos.map((photo, index) => (
                    <div key={index} className='seminar-gallery-item' onClick={() => setLightboxImg(photo)}>
                        <img src={photo} alt={`Семинар ${index + 1}`} className='seminar-gallery-img' />
                    </div>
                ))}
            </div>
        </div>

        {lightboxImg && (
            <div className='lightbox-overlay' onClick={() => setLightboxImg(null)}>
                <button className='lightbox-close' onClick={() => setLightboxImg(null)}>&#x2715;</button>
                <img src={lightboxImg} alt="Үлкейтілген фото" className='lightbox-img' onClick={e => e.stopPropagation()} />
            </div>
        )}

    </div>
  )
}

export default About;