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
    <>
      <div className="foot font-bold">
        <div>
          <div>Buy</div>
          <div className="flex flex-col text-[14px] gap-3 pt-5">
            <Link>Registration</Link>
            <Link>money Back Guarantee</Link>
            <Link>Buying help</Link>
            <Link>Stores</Link>
          </div>
        </div>
        <div>
          <div>tools</div>
          <div className="flex flex-col text-[14px] gap-3 pt-5">
            <Link>Learn to buy</Link>
            <Link>Developers</Link>
            <Link>Security center</Link>
            <Link>Site map</Link>
          </div>
        </div>
        <div>
          <div>Stay connected</div>
          <div className="flex flex-col text-[14px] gap-3 pt-5">
            <Link className="foot-icon">
              <FaPhone /> <span>Phone</span>
            </Link>
            <Link className="foot-icon">
              <FaFacebook />
              <span>Facebook</span>
            </Link>
            <Link className="foot-icon">
              <FaTwitter />
              <span>Tweeter</span>
            </Link>
            <Link className="foot-icon">
              <FaInstagram />
              <span>Instagram</span>
            </Link>
          </div>
        </div>
        <div>
          <div>About company</div>
          <div className="flex flex-col text-[14px] gap-3 pt-5">
            <Link>Company info</Link>
            <Link>News</Link>
            <Link>Investores</Link>
            <Link>Careers</Link>
            <Link>Government relations</Link>
            <Link>Advertise with us</Link>
            <Link>Policies</Link>
            <Link>Verifed</Link>
          </div>
        </div>
        <div>
          <div>Help & Contact</div>
          <div className="flex flex-col text-[14px] gap-3 pt-5">
            <Link>Seller info</Link>
            <Link>Community</Link>
            <Link>Announcements</Link>
            <Link>Discussion boards</Link>
            <Link>Government relations</Link>
          </div>
        </div>
      </div>
      <Link className="text-[10px] pl-[40px]">12.2023.georgia 🇬🇪</Link>
    </>
  );
};
