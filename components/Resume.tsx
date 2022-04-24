import { useState, useEffect } from 'react'
import { HiDocumentText, HiDownload } from 'react-icons/hi'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
export default function Resume() {
  const [width, setWidth] = useState(1200)
  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])
  return (
    <section className="container mx-auto">
      <div className="w-full text-center text-2xl font-bold text-slate-700">
        My CV
      </div>
      <div className="w-full p-2">
        <button className="rounded-full border-2 bg-blue-300 px-4 py-2 text-white transition-all duration-300 hover:border-red-300 hover:bg-slate-600">
          <HiDownload className="inline animate-bounce" />
          Download
        </button>
      </div>
      <div className="w-full px-2 text-center">
        <div className="mx-4 inline w-4/5 text-center shadow-md">
          <Document file="/Resume.pdf">
            <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.6} />
          </Document>
        </div>
      </div>
    </section>
  )
}
