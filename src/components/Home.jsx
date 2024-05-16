import React from 'react'
import '../style/Home.css'
// import {p1} from '../assets/p1.jpg'
import photo1 from '../assets/p1.jpg'
import photo2 from '../assets/p2.jpg'
import photo3 from '../assets/p3.jpg'
const Home = () => {
    return (
        <div className='hero'>

<div class="pt-24">
      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      
        <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <p class="uppercase tracking-loose w-full">Emproving Your Educational Journey</p>
          <h1 class="my-4 text-5xl font-bold leading-tight">
          Your Personalized Learning Partner
          </h1>
          <p class="leading-normal text-2xl mb-8">
          Empowering Your Educational Journey: From College Planning to Career Landing. Providing Personalised Learning Solutions!
          </p>
          <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
           Get Start
          </button>
        </div>
      
        <div class=" ">
          <img class="" src={photo1} alt='Image'/>
        </div>
      </div>
    </div>
   



{/* 
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-12">
      <div className="p-12 md:w-1/2 flex flex-col items-start">
        <span className="inline-block py-1 px-2 rounded bg-gray-800 text-gray-400 text-opacity-75 text-xs font-medium tracking-widest">CATEGORY</span>
        <h2 className="sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4">Roof party normcore before they sold out, cornhole vape</h2>
        <p className="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon kickstarter craft beer pork chic.</p>
        <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-75 mt-auto w-full">
          <a className="text-blue-400 inline-flex items-center">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
          <span className="text-gray-500 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx={12} cy={12} r={3} />
            </svg>1.2K
          </span>
          <span className="text-gray-500 inline-flex items-center leading-none text-sm">
            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>6
          </span>
        </div>
        <a className="inline-flex items-center">
          <img alt="blog" src="https://dummyimage.com/104x104" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-white">Holden Caulfield</span>
            <span className="text-gray-500 text-xs tracking-widest mt-0.5">UI DEVELOPER</span>
          </span>
        </a>
      </div>
      <div className="p-12 md:w-1/2 flex flex-col items-start">
        <span className="inline-block py-1 px-2 rounded bg-gray-800 text-gray-400 text-opacity-75 text-xs font-medium tracking-widest">CATEGORY</span>
        <h2 className="sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4">Pinterest DIY dreamcatcher gentrify single-origin coffee</h2>
        <p className="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric.</p>
        <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-75 mt-auto w-full">
          <a className="text-blue-400 inline-flex items-center">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
          <span className="text-gray-500 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx={12} cy={12} r={3} />
            </svg>1.2K
          </span>
          <span className="text-gray-500 inline-flex items-center leading-none text-sm">
            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>6
          </span>
        </div>
        <a className="inline-flex items-center">
          <img alt="blog" src="https://dummyimage.com/103x103" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-white">Alper Kamu</span>
            <span className="text-gray-500 text-xs tracking-widest mt-0.5">DESIGNER</span>
          </span>
        </a>
      </div>
    </div>
  </div>
</section> */}








        </div>
    )
}

export default Home