import React from 'react'
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './BannerSection.css';

function BannerSection({
    LightBg, topline, LightText, LightTextDesc, headline, description, buttonlabel, img, alt, imgStart
}) {
    return (
        <>
            <div className={LightBg ? 'home__banner-section' : 'home__banner-section darkBg'}>
                <div className="container">
                    <div className="row home__banner-row" style={{display: "flex", flexDirection: imgStart == 'start' ?
                    'row-reverse' : 'row'}}>

                        <div className="col">
                            <div className="home__banner-text-wrapper">
                                <div className="top-line">{topline}</div>
                                <h1 className={LightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <p className={LightTextDesc ? 'home__banner-subtitle' : 'home__banner-subtitle dark'}>{description}</p>

                                <Link to="/sign-up">
                                    <Button buttonSize='btn--wide' buttonColor="blue">{buttonlabel}</Button>
                                </Link>

                            </div>
                        </div>

                        <div className="col">
                            <div className="home__banner-img-wrapper">
                                <img src={img} alt={alt} className="home__banner-img"></img>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerSection;
