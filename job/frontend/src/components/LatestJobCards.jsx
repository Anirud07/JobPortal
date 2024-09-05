import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const LatestJobCards = ({job}) => {
    const navigate = useNavigate();
    return (
        <div onClick={()=> navigate(`/description/${job._id}`)} className='p-5 rounded-md shadow-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 cursor-pointer'>
            <div>
                <h1 className='font-medium text-lg text-[#F83002] dark:text-red-500'>{job?.company?.name}</h1>
                <p className='text-sm text-gray-500 dark:text-gray-400'>India</p>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2 text-[#7209b7] dark:text-purple-400'>{job?.title}</h1>
                <p className='text-sm text-gray-600 dark:text-gray-400'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold dark:text-blue-300'} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={'text-[#F83002] font-bold dark:text-red-500'} variant="ghost">{job?.jobType}</Badge>
                <Badge className={'text-[#7209b7] font-bold dark:text-purple-400'} variant="ghost">{job?.salary}LPA</Badge>
            </div>

        </div>
    )
}

export default LatestJobCards