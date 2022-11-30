import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  HomeIcon,
  HashtagIcon,
  XMarkIcon,
  UserIcon,
  BookmarkIcon,
  EnvelopeIcon,
  BellIcon,
} from '@heroicons/react/24/outline'

import {
    HomeIcon as HomeIconSolid,
    HashtagIcon as HashtagIconSolid,
    UserIcon as UserIconSolid,
    BookmarkIcon as BookmarkIconSolid,
    EnvelopeIcon as EnvelopeIconSolid,
    BellIcon as BellIconSolid,
    LockClosedIcon,
} from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'
import Link from 'next/link'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const router = useRouter()

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon, solidIcon: HomeIconSolid,  current: (router.asPath == "/") },
    { name: 'Explore', href: '/explore', icon: HashtagIcon, solidIcon: HashtagIconSolid, current: (router.asPath == "/explore") },
    { name: 'Notifications', href: '/notifications', icon: BellIcon, solidIcon: BellIconSolid, current: (router.asPath == "/notifications") },
    { name: 'Messages', href: '/messages', icon: EnvelopeIcon, solidIcon: EnvelopeIconSolid, current: (router.asPath == "/messages") },
    { name: 'Bookmarks', href: '/bookmarks', icon: BookmarkIcon, solidIcon: BookmarkIconSolid, current: (router.asPath == "/bookmarks") },
    { name: 'Profile', href: '/profile', icon: UserIcon, solidIcon: UserIconSolid, current: (router.asPath == "/profile") },
  ]
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                    <div className="flex flex-shrink-0 items-center px-4">
                      <img
                        className="h-8 w-auto"
                        src="/twitter.png"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="mt-5 space-y-1 px-2">
                      {navigation.map((item) => (
                        <Link key = {item.name} href = {item.href}>
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group flex items-center px-2 py-2 text-lg font-medium rounded-full'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                              'mr-4 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                        </Link>
                      ))}
                    </nav>
                  </div>
                  <div className="flex flex-shrink-0 border-t border-gray-200 p-8">
                    <a href="#" className="group block flex-shrink-0">
                      <div className="flex items-center">
                        <div>
                          <img
                            className="inline-block h-10 w-10 rounded-full"
                            src="/twitter.png"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">Tom Cook</p>
                          <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0">{/* Force sidebar to shrink to fit close icon */}</div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <div className="flex flex-shrink-0 items-center px-6">
                <img
                  className="h-6 w-auto"
                  src="/twitter.png"
                  alt="Your Company"
                />
                <span className="ml-3 inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    2.0
                </span>
              </div>
              <nav className="mt-5 flex-1 space-y-2 bg-white px-6">
                {navigation.map((item) => (
                  <Link href={item.href} key={item.name}>
                  <span
                    key={item.name}
                    href={item.href}
                    className='mb-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-md font-medium rounded-full'
                  >
                    {item.current ?

                        <item.solidIcon
                            className={classNames(
                            item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                            'mr-3 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                        />

                        :
                    
                        <item.icon
                            className={classNames(
                            item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                            'mr-3 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                        />
                    }
                    {item.name}
                  </span>
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex flex-shrink-0 border-gray-200 p-8">
              <a href="#" className="group block w-full flex-shrink-0">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src="https://pbs.twimg.com/profile_images/1537068883710029826/3-iipbnB_400x400.jpg"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900 flex">Hobbleabbas <LockClosedIcon className='ml-1 w-4 h-4 ' /></p>
                    <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">@hobbleabbas</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 bg-white pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-full text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <div className="">
              <div className="mx-auto max-w-7xl">
                <div className='grid grid-cols-3'>
                    <div className='col-span-2 h-screen border-r border-gray-200 bg-white'>
                        { children }
                    </div>
                    <div>
                        Implement
                    </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
