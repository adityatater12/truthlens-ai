import { UploadCloud, FileText } from "lucide-react";

function UploadBox({ files, setFiles }) {
  const handleFiles = (e) => {
    if (!e.target.files) return;
    setFiles(Array.from(e.target.files));
  };

  return (
    <div
      className="
      bg-slate-900
      border-2
      border-dashed
      border-blue-500
      rounded-2xl
      py-10 px-8
      text-center
      transition-all
      duration-300
      hover:border-cyan-400
      hover:shadow-xl
      hover:shadow-blue-500/20
      "
    >
      <UploadCloud
        size={42}
        className="mx-auto text-blue-500 mb-5"
      />

      <h2 className="text-xl font-semibold text-white">
        Drag & Drop Documents
      </h2>

      <p className="text-slate-400 mt-3">
        Upload underwriting documents securely
      </p>

      <p className="text-slate-500 text-sm mt-2">
        PDF • JPG • PNG • DOCX
      </p>

      <input
        type="file"
        id="upload"
        multiple
        onChange={handleFiles}
        className="hidden"
      />

      <label
        htmlFor="upload"
        className="
          inline-block
          mt-5
          bg-gradient-to-r
          from-blue-600
          to-cyan-500
          px-6
          py-3
          rounded-xl
          cursor-pointer
          font-semibold
          text-white
          hover:scale-105
          transition
        "
      >
        Browse Documents
      </label>

      {files.length > 0 && (
        <div className="mt-6 text-left">

          <h3 className="text-white font-semibold mb-4">
            Uploaded Files
          </h3>

          <div className="space-y-3">

            {files.map((file, index) => (
              <div
                key={index}
                className="
                flex
                justify-between
                items-center
                bg-slate-800
                rounded-xl
                px-5
                py-4
                "
              >
                <div className="flex items-center gap-3">

                  <FileText
                    size={20}
                    className="text-blue-400"
                  />

                  <div>

                    <p className="text-white font-medium">
                      {file.name}
                    </p>

                    <p className="text-slate-500 text-sm">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>

                  </div>

                </div>

                <span className="text-green-400 font-medium">
                  Ready
                </span>

              </div>
            ))}

          </div>

        </div>
      )}
    </div>
  );
}

export default UploadBox;