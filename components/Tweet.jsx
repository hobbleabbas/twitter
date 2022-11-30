import Link from 'next/link'
import { ChatBubbleOvalLeftIcon, ArrowPathIcon, HeartIcon } from '@heroicons/react/24/outline'

export default function Tweet({ user, id, body, likesCount, retweetCount, replyCount }) {
  return (
    <Link href={`/tweet/${id}`} className="hover:bg-slate-50 flex items-start space-x-4 p-4">
      <div className="flex-shrink-0">
        <img
          className="inline-block h-10 w-10 rounded-full"
          src={user.profilePic}
          alt=""
        />
      </div>
      <div className="min-w-0 flex-1">
            <span className='text-slate-900 font-bold text-md'>{user.name} </span>
            <span className='text-slate-600 text-md'>@{user.username}</span>
          <div className="">
            {body}
          </div>
          <div className="flex justify-between pt-2 text-slate-400">
            <div className='px-2 py-2 flex items-center font-medium hover:bg-sky-200 rounded-full hover:text-sky-600'>
                <ChatBubbleOvalLeftIcon className='w-5 h-5 mr-2' />
                {replyCount} 
            </div>
            <div className='px-2 py-2 flex items-center font-medium hover:bg-green-200 rounded-full hover:text-emerald-600'>
                <ArrowPathIcon className='w-5 h-5 mr-2' />
                {retweetCount} 
            </div>
            <div className='px-2 py-2 flex items-center font-medium hover:bg-red-200 rounded-full hover:text-red-600'>
                <HeartIcon className='w-5 h-5 mr-2' />
                {likesCount} 
            </div>
          </div>
      </div>
    </Link>
  )
}
