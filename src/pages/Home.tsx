import React,{useState} from 'react'
import ChannelList from '../components/ChannelList'

export default function Home() {

    const [ListArr] = useState([
        { id:1,
          title:"Metadata creation",
          body:"Mauris hendrerit ligula lectus, eget laoreet mi mollis ac. Praesent quis egestas ex. Nunc lobortis mauris sit amet suscipit aliquam."
        },
        {   id:2,
            title:"Program scheduling",
            body:"Quisque vel ullamcorper erat, non pharetra elit. In in leo justo. Sed ultricies dolor massa, vitae gravida erat commodo at. "
        },
        {   id:3,
            title:"Dynamic Graphics",
            body:"In nec nunc ligula. Nullam semper, urna vitae tempor vulputate, felis orci viverra eros, et aliquet quam ex nec neque"
        },
        {   id:4,
            title:"Storage and archival",
            body:"Curabitur facilisis ultrices quam. Aliquam tristique tincidunt semper. Proin sodales ornare dignissim. "
        },
 
    ])

    return (
        <div className ="md:container md:mx-auto">
            <h1 className="font-bold text-3xl h-2 mb-10 text-center m-6 ">Channel Creation</h1>
             <p className="text-gray-400 text-center mx-10">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel ex a nisi ultricies ornare eget auctor magna. Proin consequat, ex a vestibulum varius, mauris eros finibus augue, vel placerat diam quam nec leo. Cras nec ligula lobortis, tristique diam quis, iaculis nibh. Nam ullamcorper laoreet enim. 

             </p>

        <div className="grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 m-5 mb-10">
            
              {ListArr.map((item,index)=> 
               <ChannelList key={index}
              title={item.title}
              body={item.body}
              id={item.id} /> )}

            </div>
        </div>
    )
}

