import { Link } from "react-router-dom";
import {
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYahoo,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div
      className="flex justify-center gap-5 text-[30px] mt-[130px]
      bg-gray-100 h-[100px] "
    >
      <Link>
        <FaPhone />
      </Link>
      <Link>
        <FaFacebook />
      </Link>
      <Link>
        <FaInstagram />
      </Link>
      <Link>
        <FaTwitter />
      </Link>

      <Link>
        <FaYahoo />
      </Link>
    </div>
  );
};
