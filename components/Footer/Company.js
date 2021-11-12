function Company() {
  return (
    <div
      className="w-1/2 flex flex-col space-y-4 mt-5 md:flex-col-reverse md:mt-0 md:space-y-0"
      id="kontak"
    >
      <div className="flex items-center justify-start space-x-3">
        <div className="flex flex-col justify-start items-start my-4">
          <p className="font-extralight text-sm">Email:</p>
          <p className="font-extralight text-sm">Whatsapp:</p>
        </div>
        <div className="flex flex-col justify-start items-start my-4">
          <p className="font-bold text-sm">hello@myedusolve.com</p>
          <p className="font-bold text-sm">+62 877-8890-9020</p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start space-y-4">
        <h1 className="font-extrabold text-base">PT DWI INTI PUTRA</h1>
        {/* TODO: Store data address to an array then use map */}
        <div className="flex flex-col justify-start items-start space-y-4 md:flex-row md:items-start md:space-y-0">
          <div className="flex flex-col justify-start items-start md:mr-28">
            <p className="font-extrabold text-base">Head Office</p>
            <p className="font-extralight text-sm">Gedung Kresna</p>
            <p className="font-extralight text-sm">Jl. Arjuna Utara No. 28</p>
          </div>
          <div className="flex flex-col justify-start items-start">
            <p className="font-extrabold text-base">Marketing Office</p>
            <p className="font-extralight text-sm">BLOCK71 Jakarta</p>
            <p className="font-extralight text-sm">Ariobimo Sentral</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
