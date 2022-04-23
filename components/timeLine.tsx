import {
  SiFirebase,
  SiAngular,
  SiReact,
  SiRazorpay,
  SiNodedotjs,
  SiMongodb,
  SiSass,
} from 'react-icons/si'
import { GiCobweb } from 'react-icons/gi'

export default function TimeLine() {
  return (
    <div className="lg:6/12 relative mx-auto w-10/12 py-20 md:w-7/12">
      <h1 className="text-center text-3xl font-bold text-blue-500">
        My Journey till now
      </h1>
      <div className="mt-10 border-l-2">
        <div className="relative ml-10 mb-10 flex transform cursor-pointer flex-col items-center space-y-4 rounded bg-blue-600 px-6 py-4 text-white transition hover:-translate-y-2 md:flex-row md:space-y-0">
          <div className="absolute -left-10 z-10 mt-2 h-5 w-5 -translate-x-2/4 transform rounded-full bg-blue-600 md:mt-0"></div>
          <div className="absolute -left-10 z-0 h-1 w-10 bg-blue-300"></div>
          <div className="flex-auto">
            <h1 className="text-lg">Experience</h1>
            <h1 className="text-xl font-bold">HTS Tech Solutions</h1>
            <h3>Angular and React Developer</h3>
          </div>
          <i className="text-center text-white hover:text-gray-300">
            Mar-2021 to Now
          </i>
        </div>
        <div className="relative ml-10 mb-10 flex transform cursor-pointer flex-col items-center space-y-4 rounded bg-blue-600 px-6 py-4 text-white transition hover:-translate-y-2 md:flex-row md:space-y-0">
          <div className="absolute -left-10 z-10 mt-2 h-5 w-5 -translate-x-2/4 transform rounded-full bg-blue-600 md:mt-0"></div>
          <div className="absolute -left-10 z-0 h-1 w-10 bg-blue-300"></div>
          <div className="flex-auto">
            <h1 className="text-lg">Internship</h1>
            <h1 className="text-xl font-bold">Some tech company</h1>
            <h3>Web Development</h3>
          </div>
          <i className="text-center text-white hover:text-gray-300">
            Mar-2019 to Jun-2019
          </i>
        </div>
        <div className="relative ml-10 mb-10 flex transform cursor-pointer flex-col items-center space-y-4 rounded bg-blue-600 px-6 py-4 text-white transition hover:-translate-y-2 md:flex-row md:space-y-0">
          <div className="absolute -left-10 z-10 mt-2 h-5 w-5 -translate-x-2/4 transform rounded-full bg-blue-600 md:mt-0"></div>
          <div className="absolute -left-10 z-0 h-1 w-10 bg-blue-300"></div>
          <div className="flex-auto">
            <h1 className="text-lg">Bachelors degree</h1>
            <h1 className="text-xl font-bold">SKN Sinhgad Institure of Technology and Science, Lonavala</h1>
            <h3>Computer Engineering</h3>
          </div>
          <i className="text-center text-white hover:text-gray-300">
            Jun-2017 to Jul-2021
          </i>
        </div>
        <div className="relative ml-10 mb-10 flex transform cursor-pointer flex-col items-center space-y-4 rounded bg-blue-600 px-6 py-4 text-white transition hover:-translate-y-2 md:flex-row md:space-y-0">
          <div className="absolute -left-10 z-10 mt-2 h-5 w-5 -translate-x-2/4 transform rounded-full bg-blue-600 md:mt-0"></div>
          <div className="absolute -left-10 z-0 h-1 w-10 bg-blue-300"></div>
          <div className="flex-auto">
            <h1 className="text-lg">Experience</h1>
            <h1 className="text-xl font-bold">HTS Tech Solutions</h1>
            <h3>Angular and React Developer</h3>
          </div>
          <i className="text-center text-white hover:text-gray-300">
            Mar-2020 to Now
          </i>
        </div>
        <div className="relative ml-10 mb-10 flex transform cursor-pointer flex-col items-center space-y-4 rounded bg-blue-600 px-6 py-4 text-white transition hover:-translate-y-2 md:flex-row md:space-y-0">
          <div className="absolute -left-10 z-10 mt-2 h-5 w-5 -translate-x-2/4 transform rounded-full bg-blue-600 md:mt-0"></div>
          <div className="absolute -left-10 z-0 h-1 w-10 bg-blue-300"></div>
          <div className="flex-auto">
            <h1 className="text-lg">Experience</h1>
            <h1 className="text-xl font-bold">HTS Tech Solutions</h1>
            <h3>Angular and React Developer</h3>
          </div>
          <i className="text-center text-white hover:text-gray-300">
            Mar-2020 to Now
          </i>
        </div>
      </div>
    </div>
  )
}
