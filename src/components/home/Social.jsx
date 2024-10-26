import {
  FaFacebook,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { FaLine } from "react-icons/fa6";

export default function Social() {
  const items = [
    {
      icon: <FaFacebook style={{ color: "#1877F2" }} />,
      url: "https://facebook.com/qr?id=61564943052410&dl_redirect=1#no_universal_links",
    },
    {
      icon: <FaInstagramSquare style={{ color: "#E1306C" }} />, // Instagram primary color (pink)
      url: "https://www.instagram.com/3cbites/",
    },
    {
      icon: <FaLine style={{ color: "#00B900" }} />,
      url: "https://line.me/ti/p/3Cbites.com",
    },
    {
      icon: <FaWhatsappSquare style={{ color: "#25D366" }} />,
      url: "https://wa.me/917838987700",
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
