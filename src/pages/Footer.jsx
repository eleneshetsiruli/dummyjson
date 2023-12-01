import { Link } from "react-router-dom";
import { FaPhone, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className="foot font-bold">
        <div>
          <div>Buy</div>
          <div className="flex flex-col text-[14px] gap-3 pt-5">
            <Link to={"register"}>Registration</Link>
            <Link to={"company"}>money Back Guarantee</Link>
            <Link to={"company"}>Buying help</Link>
            <Link to={"company"}>Stores</Link>
          </div>
        </div>
        <div>
          <div>tools</div>
          <div className="flex flex-col text-[14px] gap-3 pt-5">
            <Link to={"company"}>Learn to buy</Link>
            <Link to={"company"}>Developers</Link>
            <Link to={"company"}>Security center</Link>
            <Link to={"company"}>Site map</Link>
          </div>
        </div>
        <div>
          <div>Stay connected</div>
          <div className="flex flex-col text-[14px] gap-3 pt-5">
            <Link to={"https://www.facebook.com/"} className="foot-icon">
              <FaPhone /> <span>Phone</span>
            </Link>
            <Link
              target="_blank"
              to={"https://www.facebook.com/"}
              className="foot-icon"
            >
              <FaFacebook />
              <span>Facebook</span>
            </Link>
            <Link
              target="_blank"
              to={"https://twitter.com/"}
              className="foot-icon"
            >
              <FaTwitter />
              <span>Tweeter</span>
            </Link>
            <Link
              target="_blank"
              to={"https://www.instagram.com/"}
              className="foot-icon"
            >
              <FaInstagram />
              <span>Instagram</span>
            </Link>
          </div>
        </div>
        <div>
          <div>About company</div>
          <div className="flex flex-col text-[14px] gap-3 pt-5">
            <Link to={"company"}>Company info</Link>
            <Link to={"company"}>News</Link>
            <Link to={"company"}>Investores</Link>
            <Link to={"company"}>Careers</Link>
            <Link to={"company"}>Government relations</Link>
            <Link to={"company"}>Advertise with us</Link>
            <Link to={"company"}>Policies</Link>
            <Link to={"login"}>Verifed</Link>
          </div>
        </div>
        <div>
          <div>Help & Contact</div>
          <div className="flex flex-col text-[14px] gap-3 pt-5">
            <Link to={"company"}>Seller info</Link>
            <Link to={"company"}>Community</Link>
            <Link to={"company"}>Announcements</Link>
            <Link to={"company"}>Discussion boards</Link>
            <Link to={"company"}>Government relations</Link>
          </div>
        </div>
      </div>
      <Link className="text-[10px] pl-[40px]">12.2023.georgia 🇬🇪</Link>
    </>
  );
};
