import Link from "next/link";

export function PrimaryButton(props) {
    if (props.action) {
        return (
            <button
                type="button"
                onClick={props.action}
                className="focus:outline-none inline-flex items-center rounded-full border border-transparent bg-sky-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
                { props.text }
            </button>
        )
    } else {
        return (
            <Link href = {props.link}>
                 <button
                    type="button"
                    className="focus:outline-none inline-flex items-center rounded-full border border-transparent bg-sky-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                >
                    { props.text }
                </button>
            </Link>
        )
    }
}

export function SecondaryButton(props) {
    if (props.action) {
        return (
            <button
                type="button"
                onClick={props.action}
                className="font-bold inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-base font-medium text-slate-800 shadow-sm hover:bg-slate-50 focus:outline-none"
            >
                { props.text }
            </button>
        )
    } else {
        return (
            <Link href = {props.link}>
                <button
                    type="button"
                    className="font-bold inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-base font-medium text-slate-800 shadow-sm hover:bg-slate-50 focus:outline-none"
                >
                    { props.text }
                </button>
            </Link>
        )
    }
}
