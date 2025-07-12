export default function Square({ value, onSquareClick }) {
    return (
        <button
            className='bg-white text-2xl border border-gray-400 h-24 w-24 m-2 cursor-pointer'
            onClick={onSquareClick}
            type='button'
        >
            {value}
        </button>
    )
}
