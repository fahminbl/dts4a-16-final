import React, { useState } from "react";

export default function NewsCard(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        key={props.myKey}
        className="w-full p-3 overflow-hidden rounded shadow-lg md:w-1/2 lg:w-1/3"
      >
        <img alt="media" className="w-full" src={props.photo} />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">
            <button onClick={() => setOpen(true)}>{props.title}</button>
          </div>
          <p className="text-base text-gray-700">{props.abstract}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
            #{props.section}
          </span>
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
            #{props.subsection}
          </span>
        </div>
      </div>
      {open ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6 top-28">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                  <h3 className="text-3xl font-semibold">{props.title}</h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                    onClick={() => setOpen(false)}
                  >
                    <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-4">
                  <img src={props.photo} className="w-full" alt="media" />
                </div>
                <div className="relative flex-auto p-4">
                  <p className="my-4 text-lg leading-relaxed text-slate-500">
                    {props.abstract}
                  </p>
                  <p className="my-4 text-lg leading-relaxed text-slate-500">
                    Source:{" "}
                    <a href={props.url} className="text-blue-500">
                      {props.url}
                    </a>
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                  <button
                    className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-blue-500 uppercase outline-none background-transparent focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
