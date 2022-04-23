import { FiCode } from 'react-icons/fi'
import { GrLinkedinOption, GrGithub } from 'react-icons/gr'
import { HiMailOpen } from 'react-icons/hi'
export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-100 via-[#bfffef] to-gray-100 p-8">
      <div className="flex w-full flex-col sm:flex-row">
        <div className="w-full p-2 text-center text-xl">
          <FiCode className="inline" /> Sarita Karale
        </div>
        <div className="w-full flex gap-1 justify-center p-2">
          <button className="rounded-full p-2 transition-all duration-300 hover:bg-red-300 hover:text-white">
            <GrLinkedinOption />
          </button>
          <button className="rounded-full p-2 transition-all duration-300 hover:bg-red-300 hover:text-white">
            <GrGithub />
          </button>
          <button className="rounded-full p-2 transition-all duration-300 hover:bg-red-300 hover:text-white">
            <HiMailOpen />
          </button>
        </div>
        {/* <div className="text-slate-800">
          <button className="rounded-full p-2 transition-all duration-300 hover:bg-red-300 hover:text-white">
            <GiUpgrade />
          </button>
        </div> */}
      </div>
    </footer>
  )
}
