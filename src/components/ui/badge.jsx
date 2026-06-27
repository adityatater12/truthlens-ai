function Badge({ color = "blue", children }) {
  const colors = {
    blue: "bg-blue-500/20 text-blue-400",
    green: "bg-green-500/20 text-green-400",
    yellow: "bg-yellow-500/20 text-yellow-400",
    red: "bg-red-500/20 text-red-400",
  };

  return (
    <span
      className={`
        ${colors[color]}
        px-3
        py-1
        rounded-full
        text-sm
        font-medium
      `}
    >
      {children}
    </span>
  );
}

export default Badge;