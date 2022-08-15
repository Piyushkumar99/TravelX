import React from 'react'

function destination() {
  return (
    <div className="my-40 mx-auto">
      <div>
        <p className="text-center text-base uppercase text-gray-600">Explore</p>
        <h1 className="text-center text-5xl font-bold text-gray-900">
          Destination
        </h1>
      </div>
      <div className="mt-10 mb-10 flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 ">
          <div className="group flex h-20 w-auto cursor-pointer items-center justify-center gap-8 rounded-xl border texwh hover:border-violet-400 hover:bg-white hover:text-violet-500 px-8 bg-violet-600 hover:shadow-xl ">
            <h1 className="text-xl font-semibold group-hover:text-violet-600 text-white">
              Forest
            </h1>
          </div>
          <div className="group flex h-20 w-auto cursor-pointer items-center justify-center gap-8 rounded-xl border texwh hover:border-violet-400 hover:bg-white hover:text-violet-500 px-8 bg-violet-600 hover:shadow-xl ">
            <h1 className="text-xl font-semibold group-hover:text-violet-600 text-white">
              Mountains
            </h1>
          </div>
          <div className="group flex h-20 w-auto cursor-pointer items-center justify-center gap-8 rounded-xl border texwh hover:border-violet-400 hover:bg-white hover:text-violet-500 px-8 bg-violet-600 hover:shadow-xl ">
            <h1 className="text-xl font-semibold group-hover:text-violet-600 text-white">
              Cites
            </h1>
          </div>
          <div className="group flex h-20 w-auto cursor-pointer items-center justify-center gap-8 rounded-xl border texwh hover:border-violet-400 hover:bg-white hover:text-violet-500 px-8 bg-violet-600 hover:shadow-xl ">
            <h1 className="text-xl font-semibold group-hover:text-violet-600 text-white">
              Beaches
            </h1>
          </div>
          <div className="group flex h-20 w-auto cursor-pointer items-center justify-center gap-8 rounded-xl border texwh hover:border-violet-400 hover:bg-white hover:text-violet-500 px-8 bg-violet-600 hover:shadow-xl ">
            <h1 className="text-xl font-semibold group-hover:text-violet-600 text-white">
              Islands
            </h1>
          </div>
          <div className="group flex h-20 w-auto cursor-pointer items-center justify-center gap-8 rounded-xl border texwh hover:border-violet-400 hover:bg-white hover:text-violet-500 px-8 bg-violet-600 hover:shadow-xl ">
            <h1 className="text-xl font-semibold group-hover:text-violet-600 text-white">
              Resorts
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default destination