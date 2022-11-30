export function Header({ text }) {
    return (
        <h2 className="text-xl font-bold leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
          { text }
        </h2>
    )
}