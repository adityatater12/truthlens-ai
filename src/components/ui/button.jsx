function Button({
  children,
  onClick,
  type = "button",
  fullWidth = false,
  disabled = false,
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        ${
          fullWidth ? "w-full" : ""
        }
        bg-gradient-to-r
        from-blue-600
        to-blue-500
        hover:from-blue-500
        hover:to-blue-400
        active:scale-95
        transition-all
        duration-300
        text-white
        font-semibold
        px-6
        py-3
        rounded-xl
        shadow-lg
        hover:shadow-blue-500/30
        disabled:opacity-50
        disabled:cursor-not-allowed
      `}
    >
      {children}
    </button>
  );
}

export default Button;