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

export default function TechStack() {
  return (
    <div className="bg-white py-16">
      <div className="container m-auto space-y-8 px-6 md:px-12 lg:px-56">
        <div className="m-auto text-center lg:w-7/12">
          <h2 className="text-2xl font-bold text-gray-700 md:text-4xl">
            My toolbox
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4">
          <div className="p-6">
            <GiCobweb className="inline" /> WebDev
          </div>
          <div className="p-6">
            <SiReact className="inline" /> ReactJS
          </div>
          <div className="p-6">
            <SiAngular className="inline" /> Angular
          </div>
          <div className="p-6">
            <SiFirebase className="inline" /> Firebase
          </div>
          <div className="p-6">
            <SiRazorpay className="inline" /> RazorPay
          </div>
          <div className="p-6">
            <SiNodedotjs className="inline" /> NodeJs
          </div>
          <div className="p-6">
            <SiMongodb className="inline" /> Mongo
          </div>
          <div className="p-6">
            <SiSass className="inline" /> css
          </div>
        </div>
      </div>
    </div>
  )
}
