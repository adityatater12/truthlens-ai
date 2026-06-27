function Progress({ value }) {
  return (
    <div className="w-full">

      <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">

        <div
          className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-700"
          style={{ width: `${value}%` }}
        />

      </div>

      <p className="text-right text-sm text-slate-400 mt-2">
        {value}% Complete
      </p>

    </div>
  );
}

export default Progress;