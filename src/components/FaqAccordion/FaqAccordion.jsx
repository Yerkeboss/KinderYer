import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';
import { useTranslation } from 'react-i18next';

function FaqAccordion() {
    const { t } = useTranslation();
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>{t('question-header')}</h2>
            <p className='text-center mb-5'>{t('question-header-info')}</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header><p>{t('first-question')}</p></Accordion.Header>
                    <Accordion.Body>
                    <p>{t('first-answer')}</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                <Accordion.Header><p>{t('second-question')}</p></Accordion.Header>
                    <Accordion.Body>
                    <p>{t('second-answer')}</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                <Accordion.Header><p>{t('third-question')}</p></Accordion.Header>
                    <Accordion.Body>
                    <p>{t('third-answer')}</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                <Accordion.Header><p>{t('fourth-question')}</p></Accordion.Header>
                    <Accordion.Body>
                    <p>{t('fourth-answer')}</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4'>
                <Accordion.Header><p>{t('fifth-question')}</p></Accordion.Header>
                    <Accordion.Body>
                    <p>{t('fifth-answer')}</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;