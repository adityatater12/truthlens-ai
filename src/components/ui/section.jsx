function Section({ title, subtitle, children }) {
  return (
    <div className="mb-10">

      <div className="mb-6">

        <h2 className="text-3xl font-bold text-white">
          {title}
        </h2>

        {subtitle && (
          <p className="text-slate-400 mt-2">
            {subtitle}
          </p>
        )}

      </div>

      {children}

    </div>
  );
}

export default Section;