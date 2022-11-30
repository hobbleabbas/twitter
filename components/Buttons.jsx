import Link from "next/link";

export function PrimaryButton(props) {
    return (
        <Link href = {props.link}>
            <button
                type="button"
                className="inline-flex items-center rounded-full border border-transparent bg-sky-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
                { props.text }
            </button>
        </Link>
    )
}
