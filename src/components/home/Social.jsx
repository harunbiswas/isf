import {
  FaFacebook,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Social() {
  const items = [
    {
      icon: <FaFacebook />,
      url: "/",
    },
    {
      icon: <FaInstagramSquare />,
      url: "/",
    },
    {
      icon: <FaXTwitter />,
      url: "/",
    },
    {
      icon: <FaYoutube />,
      url: "/",
    },
    {
      icon: <FaWhatsappSquare />,
      url: "/",
    },
  ];
  return (
    <ul className="social">
      {items?.map((item, i) => (
        <li key={i}>
          <a href={item?.url} target="_blank" rel="noopener noreferrer">
            {item?.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
