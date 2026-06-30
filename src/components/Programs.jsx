import React from 'react'
import { programData } from '../Data/data'
import './styles/Programs.css'

const Programs = () => {
  return (
    <section className='programs reveal' id='programs'>
      <h2 className='section-title'>Our Training Programs</h2>
      <div className='program-grid'>
        {programData.map((program) => (
          <div className='card' key={program.id}>
            <img className='card-img' src={program.img} alt={program.title} />
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Programs