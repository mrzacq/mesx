import Link from "next/link";

function PageUrl({ name, url, svg }) {
  return (
    <div>
      <Link href={`${url}`}>
        <a className="text-base font-light uppercase flex justify-center items-center space-x-1">
          <span>{name}</span>
          <span>{svg && svg}</span>
        </a>
      </Link>
    </div>
  );
}

export default PageUrl;
