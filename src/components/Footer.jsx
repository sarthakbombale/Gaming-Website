import 'boxicons/css/boxicons.min.css';

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#babaff] py-8 px-6 lg:px-32 flex flex-col lg:flex-row items-center justify-between gap-6 text-white bg-black">
      {/* Left Section: Logo + Text */}
      <div className="flex items-center gap-4">
        <img className="h-10" src="/images/illu-text.png" alt="footer-text" />
        <img className="h-12" src="/images/illu-logo.png" alt="footer-logo" />
      </div>

      {/* Center Section: Social Icons */}
      <div className="flex gap-6">
        <a className="text-2xl md:text-3xl hover:text-yellow-400 transition-transform hover:scale-110" href="#">
          <i className="bx bxl-twitter"></i>
        </a>
        <a className="text-2xl md:text-3xl hover:text-yellow-400 transition-transform hover:scale-110" href="#">
          <i className="bx bxl-linkedin"></i>
        </a>
        <a className="text-2xl md:text-3xl hover:text-yellow-400 transition-transform hover:scale-110" href="#">
          <i className="bx bxl-discord"></i>
        </a>
        <a className="text-2xl md:text-3xl hover:text-yellow-400 transition-transform hover:scale-110" href="#">
          <i className="bx bxl-youtube"></i>
        </a>
      </div>

      {/* Right Section: Copyright */}
      <p className="text-sm text-gray-400 text-center lg:text-right">
        © 2025 Illuverse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;