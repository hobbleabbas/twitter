export default function Layout({ children }) {

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <div className="grid grid-cols-5">
        <nav className="col-span-1">
            <a>yo</a>
        </nav>
        <div className="col-span-4">
            { children }
        </div>
      </div>
    </>
  )
}
