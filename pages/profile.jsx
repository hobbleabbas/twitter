import { CalendarDaysIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { PrimaryButton, SecondaryButton } from "../components/Buttons"
import { Fragment, useState } from 'react'
import { Tab } from '@headlessui/react'
import { Dialog, Transition } from '@headlessui/react'
import { Header } from "../components/Prose"
import { Input } from "../components/Inputs"

export default function Profile() {

    const profile = {
        coverImageUrl: "https://pbs.twimg.com/profile_banners/1294025493361164294/1654553135/1500x500",
        imageUrl: "https://pbs.twimg.com/profile_images/1537068883710029826/3-iipbnB_400x400.jpg",
        name: "Hobbleabbas",
        username: "hobbleabbas",
        bio: "18. Opinions are someone elses. absolutely everything I interact with is an endorsement.",    
        joined: new Date()
    }

    const [editProfileMode, setEditProfileMode] = useState(false)

    return (
        <div>
            <ProfileBanner profile={profile} setEditProfileMode={setEditProfileMode}/>
            <EditProfilePanel open={editProfileMode} setOpen={setEditProfileMode} />
            <div className="mt-4" />
            <ProfileByTab profile={profile} />
        </div>
    )
}

export function ProfileBanner({ profile, setEditProfileMode }) {
    return (
        <div>
            <div>
            <img className="h-32 w-full object-cover lg:h-48" src={profile.coverImageUrl} alt="" />
            </div>
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                <div className="flex">
                <img
                    className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                    src={profile.imageUrl}
                    alt=""
                />
                </div>
                <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                <div className="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                    <h1 className="truncate text-2xl font-bold text-gray-900">{profile.name}</h1>
                </div>
                <div className="justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <SecondaryButton action = {()=>{setEditProfileMode(true)}} text = "Edit Profile" />
                </div>
                </div>
            </div>
            <div className="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                <h1 className="truncate text-2xl font-bold text-gray-900">{profile.name}</h1>
                <p className="text-md text-slate-600">@{profile.username}</p>
            </div>
            <div className="flex items-center text-slate-800 mt-3">
                {profile.bio}
            </div>
            <div className="flex items-center text-slate-600 mt-3">
                <CalendarDaysIcon className="w-5 h-5 mr-2" />
                Joined {profile.joined.toDateString()}
            </div>
            <div className="mt-4 text-sm font-semibold text-slate-700 flex">
                <span><span className="text-black font-bold">202</span> Followers</span>
                <div className="m-2" />
                <span><span className="text-black font-bold">202</span> Following</span>
            </div>
            </div>
        </div>
    )
}

export function EditProfilePanel({ open, setOpen }) {
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                        <div className="flex justify-between items-center mb-4 focus:outline-none">
                            <div className="flex items-center">
                                <div className="p-2 hover:bg-slate-50 cursor-pointer rounded-full mr-1" onClick={()=>{setOpen(false)}}>
                                    <XMarkIcon className="w-5 h-5" />
                                </div>
                                <Header text = "Edit Profile" />
                            </div>
                            <PrimaryButton text = "Save" link = "/" />
                        </div>
                        <div>
                            <Input />
                        </div>
                    </Dialog.Panel>
                    </Transition.Child>
                </div>
                </div>
            </Dialog>
            </Transition.Root>
    )
}
export function ProfileByTab() {

    return (
        <Tab.Group>
            <Tab.List className="focus:outline-none">
                <Tab as={Fragment} >
                    {({ selected }) => (
                        <button
                        className={
                            selected ? 'hover:bg-slate-50 p-4 w-1/3 border-b-4 border-sky-500 bg-white text-slate-800 font-semibold focus:outline-none' : 'hover:bg-slate-50 p-4 w-1/3 bg-white text-slate-600 font-semibold focus:outline-none'
                        }
                        >
                        Tweets
                        </button>
                    )}  
                </Tab>
                <Tab as={Fragment} >
                    {({ selected }) => (
                        <button
                        className={
                            selected ? 'hover:bg-slate-50 p-4 w-1/3 border-b-4 border-sky-500 bg-white text-slate-800 font-semibold focus:outline-none' : 'hover:bg-slate-50 p-4 w-1/3 bg-white text-slate-600 font-semibold focus:outline-none'
                        }
                        >
                        Tweets & Replies
                        </button>
                    )}  
                </Tab>
                <Tab as={Fragment} >
                    {({ selected }) => (
                        <button
                        className={
                            selected ? 'hover:bg-slate-50 p-4 w-1/3 border-b-4 border-sky-500 bg-white text-slate-800 font-semibold focus:outline-none' : 'hover:bg-slate-50 p-4 w-1/3 bg-white text-slate-600 font-semibold focus:outline-none'
                        }
                        >
                        Likes
                        </button>
                    )}  
                </Tab>
            </Tab.List>
            <Tab.Panels>
                <Tab.Panel>Tweets</Tab.Panel>
                <Tab.Panel>Tweets & Replies</Tab.Panel>
                <Tab.Panel>Likes</Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    )
}
