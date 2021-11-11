import Term from "./Term";
import Company from "./Company";
import Navigation from "./Navigation";

function Footer() {
  const item = [
    {
      title: "MyEdusolve",
      konten: [
        { path: "/", name: "Tentang Kami" },
        { path: "/", name: "Kontak kami" },
        { path: "/", name: "Jadi instruktur" },
        { path: "/", name: "Faq" },
      ],
    },
    {
      title: "Program",
      konten: [
        { path: "/", name: "Kelas" },
        { path: "/", name: "Event" },
        { path: "/", name: "Sertifikasi" },
        { path: "/", name: "Ambassador" },
      ],
    },
  ];

  return (
    <div>
      <div className="bg-black text-white p-5">
        <div className="flex flex-col md:flex-row-reverse md:justify-between md:items-start md:mx-28">
          <Navigation item={item} />
          <Company />
        </div>
      </div>
      <Term />
    </div>
  );
}

export default Footer;
