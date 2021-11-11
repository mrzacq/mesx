import Link from "next/link";

function Navigation({ item }) {
  return (
    <div className="w-1/2 flex flex-col justify-center items-start space-y-4 md:flex-row md:space-y-0 md:justify-start">
      {item.map((item, i) => {
        return (
          <div
            className="flex flex-col justify-start items-start space-y-4 md:mx-20"
            key={i}
          >
            <h1 className="text-2xl font-extrabold">{item.title}</h1>
            <ul className="font-light text-base">
              {item.konten.map((k, i) => {
                return (
                  <li key={i}>
                    <Link href={`${k.path}`}>
                      <a>{k.name}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Navigation;
