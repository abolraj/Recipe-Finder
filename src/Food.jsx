import { ArrowLeftIcon, ArrowRightCircleIcon, ArrowRightIcon } from '@heroicons/react/20/solid'

export default function Food({data}){
    return (
        <div className="relative cursor-pointer group/food flex sm:flex-col h-32 sm:h-auto sm:w-52 lg:w-60 bg-opacity-20 bg-gray-600 rounded-3xl overflow-hidden text-left">
            <img src={data.image} alt={data.name} className="w-full object-cover saturate-150 contrast-150 contrast-75 group-hover/food:contrast-100 transition-all"/>

            <div className="p-6 box-border">
                <h2 className="text-2xl group-hover/food:tracking-widest transition-all whitespace-nowrap w-60 sm:w-40 lg:w-48 overflow-hidden text-ellipsis">
                    {data.name}
                </h2>
                <p className="h-12 overflow-hidden text-clip">{data.description}</p>
            </div>

            <div className="invisible flex shadow-lg shadow-gray-800 justify-between items-center  group/details group-hover/food:visible h-8 hover:w-40 bg-gray-900 rounded-full p-2 px-4 absolute right-4 bottom-4 ml-20">
                <p className="mb-1 hidden group-hover/details:block transition-all">See Details</p>
                <ArrowRightCircleIcon className="h-full absolute right-0"/>
            </div>
        </div>
        
    )
}

