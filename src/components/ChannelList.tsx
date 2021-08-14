import React from 'react'

interface ListName {
    id: number;
    title: string;
    body: string;
}


export default function ChannelList(props: ListName) {
    // destructure
    const {title,body,id}=props;
    return (
        <div className="container mx-auto px-10 divide-y-4 divide-blue-600 p-0.5 my-4 md:divide-y-4">
            <h2 className=" font-bold text-lg h-2 mb-8">
            <span className="text-blue-800 mr-1.5">0{id}</span>
            {title}</h2>
            <div>
            <div className="text-gray-400 my-4 ">{body}</div>
            </div>
        </div>
    )
}
