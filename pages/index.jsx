import Head from 'next/head'
import Image from 'next/image'
import { PrimaryButton } from '../components/Buttons'
import { supabase } from '../internal/supabaseClient'

const tweets = [
  {
    user: {
      "profilePic": "https://pbs.twimg.com/profile_images/1537068883710029826/3-iipbnB_400x400.jpg",
      "username": "hobbleabbas",
      "name": "Hobbleabbas"
    },
    id: "5000",
    body: "My name is sheila, sheila ki javani, im too sexy 4 u",
    likesCount: 5,
    retweetCount: 2,
    replyCount: 1
  }
]

export default function Home() {
  return (
    <div>
      <WhatsHappeningView />
      <ScrollView tweets={tweets} />
    </div>
  )
}

export function WhatsHappeningView() {

  return (
    <div className='border-b pb-4 px-4 sm:px-4 md:px-6 py-6'>
      <Header text = "Home" />
      <div className='mb-4' />
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <img
            className="inline-block h-10 w-10 rounded-full"
            src="https://pbs.twimg.com/profile_images/1537068883710029826/3-iipbnB_400x400.jpg"
            alt=""
          />
        </div>
        <div className="min-w-0 flex-1">
          <form action="#">
            <div className="ml-4 text-2xl">
              <textarea
                rows={1}
                name="comment"
                id="comment"
                className="text-xl focus:outline-none block w-full resize-none p-0 pb-2 focus:ring-0 sm:text-lg"
                placeholder="What's Happening"
                defaultValue={''}
              />
            </div>
            <div className="flex justify-end pt-2">
              <div className="flex-shrink-0">
                <PrimaryButton link = "/" text = "Tweet" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  )
}

import { Header } from '../components/Prose'
import Tweet from '../components/Tweet'
import Loading from '../components/Loading'

export function ScrollView() {
  return (
    <div>
      {tweets.map((tweet)=>(
        <Tweet user={tweet.user} id={tweet.id} body={tweet.body} replyCount={tweet.replyCount} retweetCount={tweet.retweetCount} likesCount={tweet.likesCount} />
      ))}
    </div>
  )
}