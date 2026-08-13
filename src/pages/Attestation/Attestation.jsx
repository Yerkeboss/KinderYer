import React, { useState } from 'react';
import './Attestation.css';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faEye, faDownload, faImage } from '@fortawesome/free-solid-svg-icons';
import useSEO from '../../hooks/useSEO';
import docOrder2 from './doc.jpeg';

const pdfDocuments = [
    { id: 1, file: '/Бұйрық.pdf', titleKey: 'attestation-doc1-title', descrKey: 'attestation-doc1-descr' },
    { id: 2, file: '/Хаттама.pdf', titleKey: 'attestation-doc2-title', descrKey: 'attestation-doc2-descr' },
    { id: 3, file: '/Іс-шара жоспары.pdf', titleKey: 'attestation-doc3-title', descrKey: 'attestation-doc3-descr' },
    { id: 4, file: '/Ерсән_Жәнай_өзін-өзі_бағалау.pdf', titleKey: 'attestation-doc4-title', descrKey: 'attestation-doc4-descr' },
];

function Attestation() {
    const { t } = useTranslation();
    const [lightboxImg, setLightboxImg] = useState(null);
    useSEO(t('attestation'), t('attestation-header'));

    return (
        <div className='attestation-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='container1 text-center fw-semibold'>{t('attestation')}</h1>
                    <p className='text-center w-75 mb-5' style={{ marginTop: '2rem', fontWeight: 'bold', fontSize: '1.2rem' }}>{t('attestation-header')}</p>
                </div>
            </header>

            <div className='container my-5'>
                <div className='attestation-intro mb-5'>
                    <h2 className='mb-4'>{t('attestation-intro-title')}</h2>
                    <p style={{ textAlign: 'justify' }}>{t('attestation-intro-text')}</p>
                </div>

                <div className='row g-4'>
                    {pdfDocuments.map((doc) => (
                        <div key={doc.id} className='col-md-6'>
                            <div className='attestation-doc-card h-100'>
                                <div className='attestation-doc-icon'>
                                    <FontAwesomeIcon icon={faFilePdf} size='2x' color='#dc3545' />
                                </div>
                                <div className='attestation-doc-body'>
                                    <h3>{t(doc.titleKey)}</h3>
                                    <p>{t(doc.descrKey)}</p>
                                    <div className='attestation-doc-actions'>
                                        <a href={encodeURI(doc.file)} target='_blank' rel='noreferrer' className='btn btn-danger btn-sm'>
                                            <FontAwesomeIcon icon={faEye} className='me-2' />{t('attestation-view-btn')}
                                        </a>
                                        <a href={encodeURI(doc.file)} download className='btn btn-outline-danger btn-sm'>
                                            <FontAwesomeIcon icon={faDownload} className='me-2' />{t('attestation-download-btn')}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className='col-md-6'>
                        <div className='attestation-doc-card h-100'>
                            <div className='attestation-doc-icon'>
                                <FontAwesomeIcon icon={faImage} size='2x' color='#dc3545' />
                            </div>
                            <div className='attestation-doc-body'>
                                <h3>{t('attestation-doc5-title')}</h3>
                                <p>{t('attestation-doc5-descr')}</p>
                                <div className='attestation-doc-actions'>
                                    <button type='button' className='btn btn-danger btn-sm' onClick={() => setLightboxImg(docOrder2)}>
                                        <FontAwesomeIcon icon={faEye} className='me-2' />{t('attestation-view-btn')}
                                    </button>
                                    <a href={docOrder2} download className='btn btn-outline-danger btn-sm'>
                                        <FontAwesomeIcon icon={faDownload} className='me-2' />{t('attestation-download-btn')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {lightboxImg && (
                <div className='lightbox-overlay' onClick={() => setLightboxImg(null)}>
                    <button className='lightbox-close' onClick={() => setLightboxImg(null)}>&#x2715;</button>
                    <img src={lightboxImg} alt='' className='lightbox-img' onClick={e => e.stopPropagation()} />
                </div>
            )}
        </div>
    );
}

export default Attestation;
