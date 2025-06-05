/** @format */
import Buttonflag from "../assets/button flag.png";
import Inc from "../assets/© 2023 Airbnb, Inc..png";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "../assets/Facebook.png";
import Twitter from "../assets/Twitter.png";
import Instagram from "../assets/Instagram.png";

function Footer() {
  return (
    <>
      <div className="bg-slate-100 mt-10 translate-x-[-50px] px-8">
        <article className="text-2xl ml-5 py-8 pb-5">
          Inspiration from future getaways
        </article>
        <div className="flex gap-6 ml-5 text-sm  opacity-70 mb-5">
          <p className="hover:border-b-2  cursor-pointer">
            Popular
          </p>
          <p className="hover:border-b-2  cursor-pointer">
            Historic
          </p>
          <p className="hover:border-b-2  cursor-pointer">
            Coastal
          </p>
          <p className="hover:border-b-2  cursor-pointer">
            Islands
          </p>
          <p className="hover:border-b-2  cursor-pointer">
            Lakes
          </p>
          <p className="hover:border-b-2 cursor-pointer">
            Unique stays
          </p>
          <p className="hover:border-b-2 cursor-pointer">
            Categorries{" "}
          </p>
          <p className="hover:border-b-2 cursor-pointer">
            Things to do
          </p>
        </div>
        <hr className="border-t p-5 mt-5 opacity-10" />

        <div className="flex space-x-40 p-5">
          <p className="grid">
            Aberfeldy
            <span className="text-sm opacity-50">
              Holiday rentals
            </span>
          </p>
          <p className="grid">
            Aberfeldy
            <span className="text-sm opacity-50">
              Flat rentals
            </span>
          </p>
          <p className="grid">
            Aberfeldy
            <span className="text-sm opacity-50">
              Villa rentals
            </span>
          </p>
          <p className="grid">
            Aberfeldy
            <span className="text-sm opacity-50">
              Flat rentals
            </span>
          </p>
          <p className="grid">
            Aberfeldy
            <span className="text-sm opacity-50">
              Cottage rentals
            </span>
          </p>
          <p className="grid">
            Aberfeldy
            <span className="text-sm opacity-50">
              Flat rentals
            </span>
          </p>
        </div>

        <div className="flex space-x-40 p-5">
          <p className="grid">
            Aberfeldy
            <span className="text-sm opacity-50">
              Holiday rentals
            </span>
          </p>
          <p className="grid">
            Aberfeldy
            <span className="text-sm opacity-50">
              Flat rentals
            </span>
          </p>
          <p className="grid">
            Aberfeldy
            <span className="text-sm opacity-50">
              Villa rentals
            </span>
          </p>
          <p className="grid">
            Aberfeldy
            <span className="text-sm opacity-50">
              Flat rentals
            </span>
          </p>
          <p className="grid">
            Aberfeldy
            <span className="text-sm opacity-50">
              Cottage rentals
            </span>
          </p>
          <p className="grid">
            Aberfeldy
            <span className="text-sm opacity-50">
              Flat rentals
            </span>
          </p>
        </div>
        <div className="flex space-x-40 p-5">
          <p className="grid">
            Aberfeldy
            <span className="text-sm opacity-50">
              Holiday rentals
            </span>
          </p>
          <p className="grid">
            Aberfeldy
            <span className="text-sm opacity-50">
              Flat rentals
            </span>
          </p>
          <p className="grid">
            Aberfeldy
            <span className="text-sm opacity-50">
              Villa rentals
            </span>
          </p>
          <p className="grid">
            Aberfeldy
            <span className="text-sm opacity-50">
              Flat rentals
            </span>
          </p>
          <p className="grid">
            Aberfeldy
            <span className="text-sm opacity-50">
              Cottage rentals
            </span>
          </p>
          <p className="grid">
            Aberfeldy
            <span className="text-sm opacity-50">
              Flat rentals
            </span>
          </p>
        </div>
        <hr className="border-t p-5 mt-5 opacity-10" />

        <div className="flex gap-62 ml-5">
          <div>
            <h2 className="font-bold mb-4">
              Support
            </h2>
            <div className="text-sm">
              <p>Help center</p>
              <p className="mt-2">Air cover</p>
              <p className="mt-2">
                Anti-discrimination
              </p>
              <p className="mt-2">
                Disability support
              </p>
              <p className="mt-2">
                Cancellation options
              </p>
              <p className="mt-2">
                Report neighbourhood concern
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-bold mb-4">
              Hosting
            </h2>
            <div className="text-sm">
              <p>Help center</p>
              <p className="mt-2">Air cover</p>
              <p className="mt-2">
                Anti-discrimination
              </p>
              <p className="mt-2">
                Disability support
              </p>
              <p className="mt-2">
                Cancellation options
              </p>
              <p className="mt-2">
                Report neighbourhood concern
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-bold mb-4">
              Aibnb
            </h2>
            <div className="text-sm">
              <p>Help center</p>
              <p className="mt-2">Air cover</p>
              <p className="mt-2">
                Anti-discrimination
              </p>
              <p className="mt-2">
                Disability support
              </p>
              <p className="mt-2">
                Cancellation options
              </p>
              <p className="mt-2">
                Report neighbourhood concern
              </p>
            </div>
          </div>
        </div>

        <div className="cursor-pointer bg-black text-white h-10 w-35 rounded-3xl text-center absolute z-50 mt-5 translate-x-[580px]">
          <div className="flex gap-2 ml-5 pt-2.5">
            Show map
            <img src={Buttonflag} alt="flag" />
          </div>
        </div>

        <hr className="relative border-t opacity-30 mt-10" />

        <div className="flex mt-2 gap-120">
          <div className="flex">
            <div className="mt-5 ml-5">
              <img src={Inc} alt="" />
            </div>
            <div className="text-xs opacity-50 mt-4.5 gap-2 font-bold ml-2">
              Privacy . Terms . Sitemap . UK
              Modern Slavery Act . Company details
            </div>
          </div>
          <div className="flex text-xs font-bold gap-4 mt-4">
            <LanguageIcon className="cursor-pointer" />
            <p>English (GB) $ GBP</p>
            <div className="cursor-pointer">
              <img src={FacebookIcon} alt="" />
            </div>
            <div className="cursor-pointer">
              <img src={Twitter} alt="" />
            </div>
            <div className="cursor-pointer">
              <img src={Instagram} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
