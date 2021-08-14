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
        <div className="container mx-auto px-10">
            <h2 className=" font-bold text-lg h-2 mb-8">
            <span className="text-blue-800 mr-1.5">{id}</span>
            {title}</h2>
            <div className="divide-y divide-blue-500">
            <p className="text-gray-400">{body}</p>
            </div>
        </div>
    )
}
