import React from 'react';
import { trajectory } from '@/data';

export const Timeline = () => {
  return (
    <ol className="relative border-s-2 border-white/20 ml-4">
      {trajectory.map((item) => (
        <li key={item.id} className="mb-16 ms-10">
          <div className="absolute w-3.5 h-3.5 bg-purple rounded-full mt-2 -start-2 border-2 border-black-100 shadow-[0_0_10px_rgba(203,172,249,0.4)]"></div>
          
          <time className="text-base md:text-lg font-medium leading-none text-purple/90">
            {item.date}
          </time>
          
          <h3 className="text-xl md:text-3xl font-bold text-white mt-3 mb-2">
            {item.title}
          </h3>
          
          <p className="mb-5 text-base md:text-xl font-normal text-gray-400 max-w-3xl leading-relaxed">
            {item.description}
          </p>

          {item.link && (
            <a 
              href={item.link} 
              target="_blank"
              className="inline-flex items-center text-white bg-purple/10 border border-purple/30 hover:bg-purple/20 transition-all font-semibold rounded-lg text-base px-5 py-2.5"
            >
              Ver detalhes
              <svg className="w-4 h-4 ms-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
              </svg>
            </a>
          )}
        </li>
      ))}
    </ol>
  );
};