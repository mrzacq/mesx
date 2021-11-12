function TopAccordion({
  title,
  setShowFirst,
  showFirst,
  totalMateri,
  totalDuration,
}) {
  return (
    <div className="min-w-full">
      <div
        className="flex justify-between items-center p-2 m-2 cursor-pointer"
        onClick={() => setShowFirst(!showFirst)}
      >
        <div className="flex justify-start items-start flex-col md:min-w-full md:space-y-4">
          <h1 className="hidden md:block font-extrabold text-3xl">{title}</h1>
          <div className="flex justify-center items-start flex-col md:flex-row md:items-center md:justify-between md:min-w-full">
            <h1 className="font-semibold md:font-extrabold text-lg">
              Konten Kelas
            </h1>
            <p className="font-light text-base md:text-sm">
              {totalMateri ?? 0} Materi | Total durasi {totalDuration}
            </p>
          </div>
        </div>
        <button type="button" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {showFirst ? (
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </button>
      </div>
    </div>
  );
}

export default TopAccordion;
