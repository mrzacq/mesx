function Instructor({ instructor }) {
  return (
    <div className="mt-10 mb-20 border-t md:mt-10 md:border-t-0 md:rounded-md md:shadow-md">
      <div className="flex justify-center md:flex-col items-start p-4 md:p-6 space-y-4">
        <h1 className="font-semibold text-xl hidden md:block">Instruktur</h1>
        <div className="flex justify-center md:justify-start items-start space-x-4">
          <img
            src="/img/ellipse1.png"
            alt="instructor"
            className="h-9 w-9 md:h-20 md:w-20"
          />
          <div className="flex flex-col justify-start items-start">
            <h1 className="text-lg font-bold md:text-xl md:font-extrabold">
              {instructor?.name}
            </h1>
            <p className="text-base font-light">{instructor?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructor;
