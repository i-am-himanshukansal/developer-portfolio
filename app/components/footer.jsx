// @flow strict
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative border-t border-[#353951] bg-[#0d1224] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-8">
        
        {/* top gradient line */}
        <div className="absolute top-0 left-1/2 h-[1px] w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* left text */}
          <p className="text-sm text-gray-300 text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#16f2b3] font-medium">
              Himanshu Kansal
            </span>{" "}
          </p>

          {/* social links */}
          <div className="flex items-center gap-5">
            <Link
              href="https://github.com/i-am-himanshukansal"
              target="_blank"
              className="text-gray-300 hover:text-[#16f2b3] transition"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/himanshu-kansal-0493a223a/"
              target="_blank"
              className="text-gray-300 hover:text-[#16f2b3] transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
