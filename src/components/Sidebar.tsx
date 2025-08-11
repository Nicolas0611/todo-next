import Image from "next/image";
import Link from "next/link";
import {
  IoCalendarOutline,
  IoCheckboxOutline,
  IoListOutline,
} from "react-icons/io5";
import { auth } from "../../auth";
import { LogoutButton } from "./LogoutButton";
import SidebarClient from "./SidebarClient";
import { SidebarItem } from "./SidebarItem";

const menuItems = [
  {
    icon: <IoCalendarOutline />,
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <IoCheckboxOutline />,
    title: "Rest Todos",
    path: "/dashboard/rest-todos",
  },
  {
    icon: <IoListOutline />,
    title: "Server Todos  ",
    path: "/dashboard/server-todos",
  },
  {
    icon: <IoListOutline />,
    title: "Cookies",
    path: "/dashboard/cookies",
  },
  {
    icon: <IoListOutline />,
    title: "Products",
    path: "/dashboard/products",
  },
];
export const Sidebar = async () => {
  const session = await auth();

  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          {/* TODO: Next/Link hacia dashboard */}
          <Link href="#" title="home">
            {/* Next/Image */}
            <Image
              src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
              className="w-32"
              width={150}
              height={10}
              alt="tailus logo"
            />
          </Link>
        </div>

        <div className="mt-8 text-center">
          {/* Next/Image */}
          <Image
            src={
              session?.user?.image ||
              "https://spng.pngfind.com/pngs/s/110-1102775_download-empty-profile-hd-png-download.png"
            }
            alt=""
            width={150}
            height={150}
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            {session?.user?.name || "no name"}
          </h5>
          <span className="hidden text-gray-400 lg:block">Admin</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {menuItems.map((item, index) => (
            <SidebarItem key={index} {...item} />
          ))}
        </ul>
      </div>
      <SidebarClient />

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <LogoutButton />
      </div>
    </aside>
  );
};
