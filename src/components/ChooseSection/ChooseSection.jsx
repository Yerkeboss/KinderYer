import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faSmile, faMapMarkerAlt, faAward, faCamera, faUserTie, faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons';


function ChooseSection() {
    const { t } = useTranslation();
    
    // Define data for the cards
    const items = [
        { title: `${t('item1')}`, icon: 'trophy', text: `${t('item1-descr')}` },
        { title: `${t('item2')}`, icon: 'emoji-smile', text: `${t('item2-descr')}` },
        { title: `${t('item3')}`, icon: 'geo-alt', text: `${t('item3-descr')}` },
        { title: `${t('item4')}`, icon: 'camera-security', text: `${t('item4-descr')}` },
        { title: `${t('item5')}`, icon: 'professionals', text: `${t('item5-descr')}` },
        { title: `${t('item6')}`, icon: 'medicine', text: `${t('item6-descr')}` }
    ];

    // Function to render an icon based on name
    const renderIcon = (icon) => {
        switch (icon) {
            case 'trophy':
                return <FontAwesomeIcon icon={faTrophy} size="3x" color="#dc3545" />;
            case 'emoji-smile':
                return <FontAwesomeIcon icon={faSmile} size="3x" color="#dc3545" />;
            case 'geo-alt':
                return <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" color="#dc3545" />;
            case 'award':
                return <FontAwesomeIcon icon={faAward} size="3x" color="#dc3545" />;
            case 'camera-security':
                return <FontAwesomeIcon icon={faCamera} size="3x" color="#dc3545" />;
            case 'professionals':
                return <FontAwesomeIcon icon={faUserTie} size="3x" color="#dc3545" />;
            case 'medicine':
                return <FontAwesomeIcon icon={faBriefcaseMedical} size="3x" color="#dc3545" />;
            default:
                return null;
        }
    };
    

    return (
        <div className="container my-5">
            <h2 className="text-center mb-5">{t('whyUS')}</h2>
            <Carousel interval={null}>
                {[0, 1].map((index) => (
                    <Carousel.Item key={index}>
                        <div className="row">
                            {items.slice(index * 3, index * 3 + 3).map((item, idx) => (
                                <div className="col-lg-4" key={idx}>
                                    <Card className="d-flex align-items-center border-0 h-100">
                                        <div className="mt-3">
                                            {renderIcon(item.icon)}
                                        </div>
                                        <Card.Body>
                                            <Card.Title className="text-center text-capitalize mb-3">
                                                {item.title}
                                            </Card.Title>
                                            <Card.Text className="text-center">
                                                {item.text}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default ChooseSection;
