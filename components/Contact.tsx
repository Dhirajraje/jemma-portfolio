import { useState, useEffect } from 'react'
import { HiDocumentText, HiDownload } from 'react-icons/hi'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
export default function Contact() {
  return (
    <div className="w-full">
      <div className="h-96 bg-gradient-to-b from-white to-blue-300"></div>
      <div className="mx-auto mb-12 max-w-5xl px-6 sm:px-6 lg:px-8">
        <div className="-mt-72 w-full rounded bg-white p-8 shadow sm:p-12">
          <p className="text-center text-3xl font-bold leading-7">Contact me</p>
          <form action="" method="post">
            <div className="mt-12 items-center md:flex">
              <div className="flex w-full flex-col md:w-1/2">
                <label className="font-semibold leading-none">Name</label>
                <input
                  type="text"
                  required
                  className="mt-4 rounded border border-gray-200 bg-gray-100 p-3 leading-none text-gray-900 focus:border-blue-700 focus:outline-none"
                />
              </div>
              <div className="mt-4 flex w-full flex-col md:ml-6 md:mt-0 md:w-1/2">
                <label className="font-semibold leading-none">Email</label>
                <input
                  type="email"
                  required
                  className="mt-4 rounded border border-gray-200 bg-gray-100 p-3 leading-none text-gray-900 focus:border-blue-700 focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-8 items-center md:flex">
              <div className="flex w-full flex-col">
                <label className="font-semibold leading-none">Subject</label>
                <input
                  type="text"
                  className="mt-4 rounded border border-gray-200 bg-gray-100 p-3 leading-none text-gray-900 focus:border-blue-700 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <div className="mt-8 flex w-full flex-col">
                <label className="font-semibold leading-none">Message</label>
                <textarea className="focus:oultine-none mt-4 h-40 rounded border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 focus:border-blue-700"></textarea>
              </div>
            </div>
            <div className="flex w-full items-center justify-center">
              <button className="mt-9 rounded bg-blue-700 py-4 px-10 font-semibold leading-none text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
