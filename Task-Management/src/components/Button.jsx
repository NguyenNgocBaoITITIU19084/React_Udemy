export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-200 hover:bg-stone-600 transition-colors"
      {...props}
    >
      {children}
    </button>
  );
}
