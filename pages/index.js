import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Video from "../components/Video/Video";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import Instructor from "../components/Content/Instructor";
const { title, instructor, data } = require("../components/course.json");

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>My Edu Solve</title>
        <meta name="description" content="Interview Project for My Edu Solve" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="hidden md:grid grid-cols-3 md:gap-4 md:min-h-screen md:mx-8 md:my-8">
        <div className="col-span-1">
          <Content title={title} instructor={instructor} data={data} />
        </div>
        <div className="col-span-2">
          <Video />
          <div className="rounded-md bg-blue-50 min-w-full border-active-blue p-3 flex flex-col justify-center items-start">
            <h3 className="font-extrabold text-base">Info!</h3>
            <p className="text-base font-light">
              Tonton setidaknya 75% dari durasi video untuk mengakses materi
              selanjutnya
            </p>
          </div>
          <Instructor instructor={instructor} />
        </div>
      </div>

      <div className="md:hidden">
        <Video />
        <Content title={title} instructor={instructor} data={data} />
      </div>
      <Footer />
    </div>
  );
}
