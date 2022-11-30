import Head from 'next/head'
import Image from 'next/image'
import { PrimaryButton } from '../components/Buttons'
import { supabase } from '../internal/supabaseClient'

const tweets = [

]

export default function Home() {
  return (
    <div>
      <WhatsHappeningView />
      <ScrollView />
    </div>
  )
}

export function WhatsHappeningView() {

  return (
    <div className='border-b pb-4 px-4 sm:px-4 md:px-6'>
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
                rows={3}
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

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { FaceSmileIcon as FaceSmileIconOutline, PaperClipIcon } from '@heroicons/react/24/outline'
import { Listbox, Transition } from '@headlessui/react'
import {
  FaceFrownIcon,
  FaceSmileIcon as FaceSmileIconMini,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid'
import { Header } from '../components/Prose'

const moods = [
  { name: 'Excited', value: 'excited', icon: FireIcon, iconColor: 'text-white', bgColor: 'bg-red-500' },
  { name: 'Loved', value: 'loved', icon: HeartIcon, iconColor: 'text-white', bgColor: 'bg-pink-400' },
  { name: 'Happy', value: 'happy', icon: FaceSmileIconMini, iconColor: 'text-white', bgColor: 'bg-green-400' },
  { name: 'Sad', value: 'sad', icon: FaceFrownIcon, iconColor: 'text-white', bgColor: 'bg-yellow-400' },
  { name: 'Thumbsy', value: 'thumbsy', icon: HandThumbUpIcon, iconColor: 'text-white', bgColor: 'bg-blue-500' },
  { name: 'I feel nothing', value: null, icon: XMarkIcon, iconColor: 'text-gray-400', bgColor: 'bg-transparent' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function ScrollView() {
  return (
    <div>
      Latest Tweets
    </div>
  )
}