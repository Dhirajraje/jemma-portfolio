import { HiDocumentText, HiDownload } from 'react-icons/hi'

export default function LandingPage() {
  return (
    <main className="bg-white">
      <section className="container mx-auto flex w-full px-2 pb-16 sm:mt-32 lg:px-0">
        <div className="flex w-full justify-center text-center text-slate-800 md:justify-start md:text-left">
          <div className="w-full md:w-1/2">
            <h2 className="pt-16 xs:text-2x1 lg:6x1 text-2xl font-bold uppercase leading-none md:text-5xl">
              Sarita Karale<i className="text-blue-400 block">&lt;Software Developer /&gt; </i>
            </h2>
            <p className="my-12">
            Hola! I am Sarita, A web developer working with react and angular. Building awesome websites.
            </p>
            <button className="rounded-full border border-blue-500 bg-blue-400 p-4 px-16 font-bold uppercase text-white">
              <HiDownload className='inline animate-bounce' width={30} height={30} /> Get the resume!
            </button>
          </div>
          <div className="hidden md:flex md:w-1/2 md:justify-center">
            <img
              src="/web-dev.svg"
              alt="Mobile Phone"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
