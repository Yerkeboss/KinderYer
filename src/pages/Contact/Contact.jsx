import React from 'react';
import './Contact.css';
import { useTranslation } from 'react-i18next';

function Contact() {
    const { t } = useTranslation();
    return (
        <div className='contact-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='container2 text-center fw-semibold'>{t('contactus')}</h1>
                    <p className='text-center w-75 mb-5' style={{ marginTop: '2rem', fontWeight: 'bold', fontSize: '1.2rem' }}>{t('address')}</p>
                    <p className='text-center w-75 mb-5' style={{ marginTop: '0rem', fontWeight: 'bold', fontSize: '1.2rem' }}>{t('phone')}</p>
                    <p className='text-center w-75 mb-5' style={{ marginTop: '0rem', fontWeight: 'bold', fontSize: '1.2rem' }}>Email: zh.yerkegaly@gmail.com</p>
                </div>
            </header>
            <div className='bg-dark text-light p-5'>
                <div className='container'>
                    <div className='mt-5'>
                        <div className='d-flex justify-content-center mt-4'>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5828.339921110473!2d71.44595854662604!3d43.07992203454041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a7116ad35e0b3d%3A0x3030e6c529776568!2z0JzRi9GA0LfQsNGC0LDQuQ!5e0!3m2!1sru!2skz!4v1732811751683!5m2!1sru!2skz" width="800" height="600"></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact;