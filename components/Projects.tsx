import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3dPin'
import { FaLocationArrow } from 'react-icons/fa'

const Projects = () => {
  return (
    <div className="pt-20 pb-10" id="projetos">
      <h1 className="heading">
        Meus{' '}
        <span className="text-purple">Projetos</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 lg:gap-y-22 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-140 h-112 flex items-center justify-center sm:w-142.5 w-[80vw]"
          >
            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center sm:w-142.5 w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img
                    src="./bg.png"
                    alt="background"
                    className="w-full h-full object-cover"
                  />
                </div>
                <img
                  src={img}
                  alt={title}
                  className="z-10 absolute bottom-0 w-full h-full object-contain"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-2">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-3 min-h-15 lg:min-h-21">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center gap-2">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/20 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index * 2}px)`
                      }}
                    >
                      <img
                        src={icon}
                        alt="tech icon"
                        className="p-2 w-8 h-8"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:tex-xs text-sm text-purple">Verifique o site ao vivo</p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects