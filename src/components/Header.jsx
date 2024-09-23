import Image from "next/image";
import Link from "next/link";

import Lng from "./Lng";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link href={"/"} className="brand">
          <Image
            src={"/images/logo.png"}
            width={500}
            height={150}
            alt="Indian Street food"
          />
        </Link>
        <Menu />
        <Lng />
      </div>
    </header>
  );
}
