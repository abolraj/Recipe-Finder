import { ArrowLeftIcon, ArrowRightCircleIcon, ArrowRightIcon, HashtagIcon, InformationCircleIcon, MapIcon, MapPinIcon } from '@heroicons/react/20/solid'

export default function Food({ data, isSingle }) {
    if (isSingle)
        return (
            <>
                <div className="flex flex-wrap gap-3 p-2 mb-4">
                    <p>{data.area} &gt; {data.tags && (data.tags[0] + ' >')} {data.name}</p>
                </div>
                <div className="relative group/food flex-col md:flex-row bg-opacity-20 bg-gray-600 rounded-3xl overflow-hidden text-left">
                    <div className="relative title-image-cont border-0 md:w-1/2 md:rounded-xl md:m-5 overflow-hidden md:float-right aspect-square grow-0">
                        <img src={data.image} alt={data.name} className="w-full object-cover" />
                        <ul className="flex flex-wrap gap-3 gap-x-2 absolute bottom-0 left-0 p-2 ">
                            {data.tags?.map((tag, i) => (<li className="p-2 px-4 rounded-full bg-gray-800 "><HashtagIcon className="h-4 mb-0.5 inline" />{tag}</li>))}
                        </ul>

                        <p className="flex flex-wrap gap-3 gap-x-2 absolute top-0 m-2 left-0 p-2 pr-4 rounded-full bg-gray-800">
                            <MapPinIcon className="h-6 mr-3 inline" />
                            {data.area}
                        </p>
                    </div>

                    <div className="p-6 box-border">
                        <h2 className="text-2xl ">
                            {data.name}
                        </h2>

                        <p className="whitespace-pre-wrap ">{data.description}</p>


                        {data.ingredients &&
                            <div className="p-3 border-2 border-gray-500 clear-both rounded-2xl mt-5 md:mt-14">
                                <h2 className="p-2 px-4">
                                    Ingredients
                                    <InformationCircleIcon className="h-7 ml-2 inline" />
                                </h2>

                                <ul className='flex flex-col overflow-auto max-h-60 scroll gap-2'>
                                    {data.ingredients?.map((ingredient, i) =>
                                    (
                                        <li className="p-2 px-4 pr-2 rounded-full bg-gray-800 flex justify-between" key={i}>
                                            <span className="p-2">{ingredient}</span>
                                            <span className="p-2 px-4 rounded-full bg-gray-700 block w-40">{data.measures[i]}</span>
                                        </li>
                                    )
                                    )}
                                </ul>
                            </div>
                        }

                    </div>

                    <img src={data.image} alt={data.name} className="w-20 aspect-square rounded-lg shadow-xl shadow-black-600 fixed right-2 bottom-2 object-cover" />
                </div>
            </>
        )

    return (
        <div className="relative cursor-pointer group/food flex sm:flex-col h-32 sm:h-auto sm:w-52 lg:w-60 bg-opacity-20 bg-gray-600 rounded-3xl overflow-hidden text-left">
            <div className="title-image-cont aspect-square grow-0">
                <img src={data.image} alt={data.name} className="before:bg-current w-full  object-cover saturate-150 contrast-150 contrast-75 group-hover/food:contrast-100  transition-all" />
            </div>

            <div className="p-6 box-border">
                <h2 className="text-2xl group-hover/food:tracking-widest transition-all whitespace-nowrap w-60 sm:w-40 lg:w-48 overflow-hidden text-ellipsis">
                    {data.name}
                </h2>
                <p className="h-12 overflow-hidden text-clip">{data.description}</p>
            </div>

            <div className="invisible flex shadow-lg shadow-gray-800 justify-between items-center  group/details group-hover/food:visible h-8 hover:w-40 bg-gray-900 rounded-full p-2 px-4 absolute right-4 bottom-4 ml-20">
                <p className="mb-1 hidden group-hover/details:block transition-all">See Details</p>
                <ArrowRightCircleIcon className="h-full absolute right-0" />
            </div>
        </div>

    )
}

