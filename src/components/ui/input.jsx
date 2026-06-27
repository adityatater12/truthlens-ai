function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-slate-300 text-sm font-medium">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          bg-slate-900
          border
          border-slate-700
          rounded-xl
          px-4
          py-3
          text-white
          placeholder:text-slate-500
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500
          transition-all
        "
      />
    </div>
  );
}

export default Input;