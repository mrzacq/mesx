import PageUrl from "./PageUrl";
import Profile from "./Profile";

function MenuMobile({ item }) {
  return (
    <div>
      <div className="flex justify-center items-center space-y-3 flex-col md:hidden mt-4">
        {item.map((item, i) => {
          return (
            <div
              key={i}
              className="p-2 rounded-md hover:text-gray-800 hover:bg-blue-100 min-w-full"
            >
              <PageUrl name={item.name} url={item.url} svg={item.svg} />
            </div>
          );
        })}
        <div className="p-2 rounded-md hover:text-gray-800 hover:bg-blue-100 min-w-full">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default MenuMobile;
