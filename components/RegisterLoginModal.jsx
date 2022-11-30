import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { Header } from './Prose'
import { Input } from './Inputs'
import { PrimaryButton } from './Buttons'

export default function Auth() {
  const [registerMode, setRegisterMode] = useState(true)

  return (
    <div>
      <div className="relative z-10" >
        <div
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="space-y-2 relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-7xl sm:p-6">
                {
                    registerMode ?

                    <RegisterModal setRegisterMode={setRegisterMode} />

                    :

                    <LoginModal setRegisterMode={setRegisterMode} />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function RegisterModal() {
    return (
        <div className='space-y-4'>
            <Header text={"Register for Twitter 2.0"} />
            <p className='font-medium'>Have an account? <span className='text-sky-500 font-medium hover:text-sky-600'>Log In</span></p>
            <Input type = "email" label = {"Email"} placeholder="tiger@golf.eu" />
            <Input type = "text" label = {"Name"} placeholder="Tiger Woods" />
            <Input type = "text" label = {"Username"} placeholder="@tiger" />
            <Input type = "password" label={"Password"} />
            <Input type = "password" label={"Confirm Password"} />
            <div className='flex mt-4 justify-end'>
                <PrimaryButton text="Register" link = "/" />
            </div>
        </div>
    )
}

export function LoginModal({ setRegisterMode }) {
    return (
        <div>
            <Header text={"Register for Twitter 2.0"} />
            <p className='font-medium'>Have an account? <span className='text-sky-500 font-medium hover:text-sky-600'>Log In</span></p>
            <Input type = "email" label = {"Email"} placeholder="tiger@golf.eu" />
            <Input type = "text" label = {"Name"} placeholder="Tiger Woods" />
            <Input type = "text" label = {"Username"} placeholder="@tiger" />
            <Input type = "password" label={"Password"} />
            <Input type = "password" label={"Confirm Password"} />
            <div className='flex mt-4 justify-end'>
                <PrimaryButton text="Register" link = "/" />
            </div>
        </div>
    )
}