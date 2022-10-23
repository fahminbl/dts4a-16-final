import React from "react";

export default function NewsCard(props) {
  return (
    <div key={props.myKey} className="w-full md:w-1/2 lg:w-1/3 p-3 rounded overflow-hidden shadow-lg">
      <img
        alt="media"
        className="w-full"
        src={props.photo}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2"><a target="blank" href={props.url}>{props.title}</a></div>
        <p className="text-gray-700 text-base">
          {props.abstract}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{props.section}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{props.subsection}
        </span>
      </div>
    </div>
  );
}
