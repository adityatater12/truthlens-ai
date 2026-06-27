function Card({ title, children }) {
  return (
    <div
      className="
      bg-slate-900
      border
      border-slate-800
      rounded-2xl
      p-5
      shadow-lg
      hover:border-blue-500
      transition-all
      duration-300
      "
    >
      {title && (
        <h2 className="text-white text-xl font-semibold mb-5">
          {title}
        </h2>
      )}

      {children}
    </div>
  );
}

export default Card;