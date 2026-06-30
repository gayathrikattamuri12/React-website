import React from 'react'
import { trainerData } from '../Data/data'
import './styles/Trainers.css'

const Trainers = () => {
  return (
    <section className='trainers reveal' id='trainers'>
      <h2 className='section-title'>Meet Our Trainers</h2>
      <div className='trainer-grid'>
        {trainerData.map((trainer) => (
          <div className='trainer-card' key={trainer.id}>
            <img className='trainer-img' src={trainer.img} alt={trainer.name} />
            <h3>{trainer.name}</h3>
            <p>{trainer.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Trainers