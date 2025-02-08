import React from 'react'

function navbar() {
  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80"'>
      <div className='flex justify-between items-center'>
        <div className="text-xl text-white">Food Recipe 🍜</div>
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="#" className="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Recipes
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default navbar