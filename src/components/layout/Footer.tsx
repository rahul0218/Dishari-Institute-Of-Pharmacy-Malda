import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Courses', path: '/course' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-brand-text-content">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Institute Info */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <img
                  src="/image/logo/cropped-Dishari-Institute-of-Pharmacy_Logo-150x150.jpg"
                  alt="Dishari Institute of Pharmacy Logo"
                  className="h-12 w-12 object-contain"
              />
              <h3 className="text-lg font-semibold text-brand-text-main">Dishari Institute of Pharmacy</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div>
                    <h4 className="font-semibold text-brand-text-main mb-2">Register Office</h4>
                    <p className="leading-relaxed">N.H.-34- Malda Bypass (Sujapur) P.O. – Madhaipur, P.S.+Dist- Malda, West Bengal, Pin – 732142.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-brand-text-main mb-2">Corporate Office</h4>
                    <p className="leading-relaxed">Dishari Health Point Pvt. Ltd. Education Department Room No-7, 19 , B. G. Road , P. O – Mokdumpur , P.S- English Bazar, Dist – Malda 732103 , West Bengal.</p>
                </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-text-main">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-primary" />
                <a href="tel:+919002132556" className="hover:text-brand-primary transition-colors">+91 9002132556</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-primary" />
                <a href="mailto:dishariinstituteofpharmacy@gmail.com" className="hover:text-brand-primary transition-colors">dishariinstituteofpharmacy@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-text-main">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-brand-primary transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-300 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Dishari Institute of Pharmacy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
