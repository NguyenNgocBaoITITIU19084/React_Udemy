export default function Input({ ref, isTextArea = false, title, ...props }) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 forcus:border-stone-800 focus:outline-none  focus:border-stone-800";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm front-bold uppercase text-stone-500">
        {title}
      </label>
      {isTextArea ? (
        <textarea ref={ref} {...props} className={classes} />
      ) : (
        <input ref={ref} type="text" {...props} className={classes} />
      )}
    </p>
  );
}
