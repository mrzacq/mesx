function Term() {
  const item = [
    {
      url: "https://twitter.com",
      name: "twitter",
      img: "/img/social-icons/twitter-2.png",
    },
    {
      url: "https://facebook.com",
      name: "facebook",
      img: "/img/social-icons/facebook-2.png",
    },
    {
      url: "https://instagram.com",
      name: "instagram",
      img: "/img/social-icons/instagram-2.png",
    },
    {
      url: "https://youtube.com",
      name: "youtube",
      img: "/img/social-icons/youtube-2.png",
    },
  ];

  return (
    <div className="bg-white p-6 mb-8 md:mb-0 md:py-8">
      <div className="flex justify-center items-center flex-col space-y-4 md:flex-row md:space-y-0 md:justify-between md:mx-28">
        <div className="flex justify-center items-center space-x-4">
          <p className="font-light text-base">Term and Conditions</p>
          <p className="font-light text-base">Privacy Policy</p>
        </div>
        <div className="flex justify-center items-center space-x-8">
          {item.map(({ url, name, img }, i) => {
            return (
              <a href={`${url}`} key={i}>
                <img src={img} alt={name} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Term;
