import Link from "next/link";

import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[var(--primary-color)] text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>

          <p className="flex items-center">
            <MapPin className="mr-2" size={18} /> Sankalchand Patel Vidyadham
          </p>

          <p>Ambaji-Gandhinagar State Highway,</p>

          <p>Visnagar-384315, Dist: Mehsana, Gujarat (INDIA)</p>

          <p className="mt-2 flex items-center">
            <Mail className="mr-2" size={18} />{" "}
            <a
              href="mailto:info@spu.ac.in"
              className="hover:text-[var(--accent-color)]"
            >
              info@spu.ac.in
            </a>
          </p>

          <p className="flex items-center">
            <Phone className="mr-2" size={18} />{" "}
            <a
              href="tel:+917069006374"
              className="hover:text-[var(--accent-color)]"
            >
              +91-70-6900-6374
            </a>
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>

          <Link href="/" className="hover:text-[var(--accent-color)]">
            Home
          </Link>

          <Link href="/about" className="hover:text-[var(--accent-color)]">
            About
          </Link>

          <Link href="/dashboard" className="hover:text-[var(--accent-color)]">
            Dashboard
          </Link>

          <Link href="/contact" className="hover:text-[var(--accent-color)]">
            Contact
          </Link>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Follow Us</h2>

          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-[var(--accent-color)]"
            >
              <Facebook className="mr-2" size={18} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-[var(--accent-color)]"
            >
              <Twitter className="mr-2" size={18} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-[var(--accent-color)]"
            >
              <Linkedin className="mr-2" size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm border-t border-white pt-4">
        &copy; {new Date().getFullYear()} Sankalchand Patel University. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
