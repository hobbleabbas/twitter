export function Input({ label, type, placeholder, setter }) {
    return (
      <div className="rounded-full border border-gray-300 px-4 py-2 shadow-sm focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-500">
        <label htmlFor="name" className="block text-xs font-medium text-gray-900">
          { label }
        </label>
        <input
          type={type ? type : "text"}
          id={label}
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm focus:outline-none"
          placeholder={placeholder ? placeholder : ''}
          onChange={(e)=>{setter(e.target.value)}}
        />
      </div>
    )
  }
  