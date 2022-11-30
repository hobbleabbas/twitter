import { Fragment, useState } from 'react'
import { Header } from './Prose'
import { Input } from './Inputs'
import { PrimaryButton } from './Buttons'
import { supabase } from '../internal/supabaseClient'
import { useRouter } from 'next/router'

export default function Auth() {
  const [registerMode, setRegisterMode] = useState(true)

  const LoginUser = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: 'example@email.com',
        password: 'example-password',
      })
    return
  }

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

export function RegisterModal({ setRegisterMode }) {

  const [email, setEmail] = useState(null)
  const [name, setName] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [bio, setBio] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const RegisterUser = async () => {
    try {
      setLoading(true)
      // Verify fields
      if (password.length < 6) {
        setError("Password must be at least 6 characters.")
        setLoading(false)
        return;
      } else if (password != confirmPassword) {
        setError("Passwords do not match.")
        setLoading(false)
        return;
      }
      
      if (!username || !email || !name) { setError("Please fill out all fields"); setLoading(false); return; }

      // Clean fields up
      if (username.substr(0, 1) == "@") { setUsername(username.substr(1, username.length)) }

      setUsername(username.toLowerCase())

      // Check if username is available
      let { data, usernameError } = await supabase.from('users').select('username').eq('username', username)

      if (usernameError) { setError('Sorry, please try again later.'); return }

      if (data.length > 0) { setError("Sorry, that username is not available."); setLoading(false); return }

      // Register the user
      if (true == true) {
        // Had to wrap in an if statement because of variable block scoping. Will fix.

        let { data, registrationError } = await supabase.auth.signUp({
          email: email,
          password: password,
        })
  
        if (registrationError) { setError("Sorry, something went wrong"); setLoading(false); return }
  
        const { profileSuccess, error } = await supabase.from('users').insert(
          { id: data.user.id, name: name, username: username, bio: bio  }
        )
        
        if (error) { setError("Please contact us."); setLoading(false); return }
        
        const router = useRouter()
        router.push(`/user/${data.user.id}`)
        setLoading(false)
      }
      return
    } catch (error) {
      // To implement: log error
      console.log(error)
      setError("Sorry, please try again later")
      setLoading(false)
    }
  }

  return (
      <div className='space-y-4'>
          <Header text={"Register for Twitter 2.0"} />
          <p className='font-medium'>Have an account? <span className='text-sky-500 font-medium hover:text-sky-600 cursor-pointer' onClick={()=>{setRegisterMode(false)}}>Log In</span></p>
          <Input type = "email" label = {"Email"} placeholder="tiger@golf.eu" setter={setEmail} />
          <Input type = "text" label = {"Name"} placeholder="Tiger Woods" setter={setName} />
          <Input type = "text" label = {"Username"} placeholder="@tiger" setter={setUsername} />
          <Input type = "text" label={"Bio (optional)"} setter={setBio} />
          <Input type = "password" label={"Password"} setter={setPassword} />
          <Input type = "password" label={"Confirm Password"} setter={setConfirmPassword} />
          <div className='flex mt-4 justify-end'>
            <button
                type="button"
                onClick={RegisterUser}
                disabled={loading}
                className="focus:outline-none inline-flex items-center rounded-full border border-transparent bg-sky-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
                { loading ? "Setting up..." : "Register"}
            </button>
          </div>
          { error ? <p className='text-red-600'>{ error }</p> : null }
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