import {BellAlertIcon, ShieldExclamationIcon} from '@heroicons/react/24/outline'
export default function _404(){
    return (
        <div className="flex flex-col justify-center items-center align-item fixed w-full h-full top-0 left-0">
            <div className="p-10 flex gap-3 text-6xl">
                <ShieldExclamationIcon className="h-20 -mt-2"/> 
                <p>| Not Found</p>
            </div>
        </div>
    )
}