import Link from "next/link";

function Navbar() {
  return (
    <div className="min-w-full border-b p-4">
      <div className="flex justify-between items-center">
        <Link href="/">
          <a>
            <img src="/img/image-23.png" className="w-40" />
          </a>
        </Link>
        <button type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
