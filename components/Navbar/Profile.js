import Link from "next/link";

function Profile() {
  return (
    <div>
      <Link href="/">
        <a className="text-base font-light uppercase flex justify-center items-center space-x-2">
          <img src="/img/group-96.png" alt="profile" className="h-6 w-6" />
          <span>Arya Putra</span>
        </a>
      </Link>
    </div>
  );
}

export default Profile;
