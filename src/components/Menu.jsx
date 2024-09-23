import Link from "next/link";

export default function Menu() {
  const menus = [
    {
      url: "/",
      name: "Home",
    },
    {
      url: "/",
      name: "About",
    },
    {
      url: "/",
      name: "Menu",
    },

    {
      url: "/",
      name: "Review",
    },
    {
      url: "/",
      name: "Contact",
    },
  ];
  return (
    <nav className="nav">
      <ul className="nav-menu">
        {menus?.map((item, i) => (
          <li key={i}>
            <Link href={item?.url}>{item?.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
