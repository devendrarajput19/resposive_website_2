import React from 'react';
import './BannerSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function BannerSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
  return (
    <>
      <div
        className={lightBg ? 'home__Banner-section' : 'home__Banner-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__Banner-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__Banner-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__Banner-subtitle'
                      : 'home__Banner-subtitle dark'
                      
                  }
                >
                  {description}
                </p>
                <Link to='/sign-up'>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className='col'>
              <div className='home__Banner-img-wrapper'>
                <img src={img} alt={alt} className='home__Banner-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerSection;
