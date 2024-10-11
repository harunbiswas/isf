"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome } from "react-icons/fi";
import { GrCatalog } from "react-icons/gr";
import { IoIosLogOut } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import { MdOutlineLocalOffer } from "react-icons/md";
import { RiProductHuntLine } from "react-icons/ri";

export default function Sidebar() {
  const pathname = usePathname();
  const items = [
    {
      name: "dashboard",
      url: "/admin",
      icon: <FiHome />,
    },
    {
      name: "Add Offer",
      url: "/admin/offer/add",
      icon: <IoAdd />,
    },
    {
      name: "Offers",
      url: "/admin/offer",
      icon: <MdOutlineLocalOffer />,
    },
    {
      name: "Add Catagori",
      url: "/admin/catagori/add",
      icon: <IoAdd />,
    },
    {
      name: "Catagoris",
      url: "/admin/catagori",
      icon: <GrCatalog />,
    },
    {
      name: "Add Product",
      url: "/admin/product/add",
      icon: <IoAdd />,
    },
    {
      name: "Products",
      url: "/admin/product",
      icon: <RiProductHuntLine />,
    },
  ];

  return (
    <div className="sidebar">
      <div className="brand">
        <h2>Dashboard</h2>
      </div>
      <ul className="sidebar-menu">
        {items?.map((item, i) => (
          <li key={i}>
            <Link
              className={`${(pathname == item?.url && "active") || ""}`}
              href={item?.url}
            >
              {item?.icon} {item?.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="logout-wrp">
        <button
          onClick={() => {
            localStorage.removeItem("token");
            location.reload();
          }}
          className="logout btn"
        >
          <IoIosLogOut />
          Logout
        </button>
      </div>
    </div>
  );
}
