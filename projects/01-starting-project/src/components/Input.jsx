export default function Input({ label, textarea, ...props }) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stones-600 focus:outline-none focus:border-stone-600";

  return (
    <p>
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textare className={classes} {...props} />
      ) : (
        <input className={classes} {...props} />
      )}
    </p>
  );
}
