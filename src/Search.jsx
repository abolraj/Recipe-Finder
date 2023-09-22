import {MagnifyingGlassIcon, XCircleIcon} from '@heroicons/react/20/solid'
import { useState } from 'react'

export default function Search(){
    const [query, setQuery] = useState('')

    function handleChange(e){
        setQuery(e.target.value)
    }

    function handleErease(){
        setQuery('')
    }

    return (
        <>
            <div className="group container w-full mx-auto bg-opacity-30 bg-gray-800 flex items-center max-w-lg border-2 border-transparent focus-within:!border-blue-600 hover:border-gray-600 rounded-full p-2 text-gray-600 focus:w-full">
                <label for="search">
                    <MagnifyingGlassIcon className='w-10 group-focus-within:text-blue-600 group-focus-within:rotate-6 transition-transform' />
                </label>
                <input type="text" value={query} onChange={handleChange.bind(this)} id="search" class="group p-1 text-2xl text-ellipsis m-0 grow border-0 !border-transparent focus:border-0  text-gray-200 bg-transparent w-50 focus:ring-0 focus:w-70 " placeholder="Find your food !"/>
                <button onClick={handleErease.bind(this)} className="bg-transparent p-0 hover:border-transparent focus:outline-none" style={{visibility:query!=''?'':'hidden'}}>
                    <XCircleIcon className='w-10 group-focus-within:text-rose-500' />
                </button>
            </div>
        </>
    )
}
