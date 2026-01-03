import React from 'react'
import { Timeline } from './ui/Timeline'

const Trajectory = () => {
  return (
    <div className="py-12 w-full" id="experiencia">
      <h1 className="heading">
        Minha Trajetória{' '}
        <span className="text-purple">Acadêmica e Profissional</span>
      </h1>
      <div className="flex flex-col items-start mt-22 max-w-4xl mx-auto px-10">
        <Timeline />
      </div>
    </div>
  )
}

export default Trajectory