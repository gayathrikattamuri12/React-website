import React from 'react'
import './styles/Hero.css'

const Hero = () => {
  return (
    <section className='hero' id='hero'>
      <div className='hero-overlay'>
        <div className='hero-content'>
          <h1 className='hero-title'>Transform your <span>body</span> & mind</h1>
          <p className='hero-subtitle'>Unleash your inner strength with <strong>IronFit Elite</strong> — where passion meets power.</p>
        </div>
        <div className='hero-buttons'>
          <a href='#contact' className='btn-primary'>Join Now</a>
          <a href='#programs' className='btn-secondary'>Explore Programs</a>
        </div>
      </div>
    </section>
  )
}

export default Hero