import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const contactDetails = [
  { icon: MapPin, title: 'Register Office', value: 'N.H.-34- Malda Bypass (Sujapur) P.O. – Madhaipur, P.S.+Dist- Malda, West Bengal, Pin – 732142.' },
  { icon: MapPin, title: 'Corporate Office', value: 'Dishari Health Point Pvt. Ltd. Education Department Room No-7, 19 , B. G. Road , P. O – Mokdumpur , P.S- English Bazar, Dist – Malda 732103 , West Bengal.' },
  { icon: Phone, title: 'Phone', value: '+91 9002132556', href: 'tel:+919002132556' },
  { icon: Mail, title: 'Email', value: 'dishariinstituteofpharmacy@gmail.com', href: 'mailto:dishariinstituteofpharmacy@gmail.com' },
];

const Contact = () => {
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_FORM_ID");

  return (
    <div className="bg-white">
      <motion.div 
        className="bg-brand-primary-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-text-main">Contact Us</h1>
          <p className="mt-4 text-lg text-brand-text-muted max-w-3xl mx-auto">
            Wish to enquire about admissions, syllabus, or anything else? You can walk in during office hours, give us a call or simply submit the form here.
          </p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-brand-text-main">Get in Touch</h2>
            {contactDetails.map((detail, index) => (
              <div key={index} className="flex items-start gap-5">
                <div className="bg-brand-primary/10 p-3 rounded-full">
                  <detail.icon className="h-6 w-6 text-brand-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-text-main">{detail.title}</h3>
                  {detail.href ? (
                    <a href={detail.href} className="text-brand-text-content hover:text-brand-primary transition-colors">{detail.value}</a>
                  ) : (
                    <p className="text-brand-text-content">{detail.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="bg-gray-50 p-8 rounded-2xl border border-gray-200"
          >
            {state.succeeded ? (
              <div className="text-center py-10">
                <CheckCircle className="h-16 w-16 text-brand-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-brand-text-main">Thank You!</h2>
                <p className="mt-2 text-brand-text-content">Your message has been sent successfully. We will get back to you soon.</p>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-brand-text-main mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-text-muted mb-2">Full Name</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary transition" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-text-muted mb-2">Email Address</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary transition" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-600 text-sm mt-1" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-brand-text-muted mb-2">Subject</label>
                    <input type="text" id="subject" name="subject" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary transition" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-text-muted mb-2">Message</label>
                    <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary transition"></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-600 text-sm mt-1" />
                  </div>
                  <div>
                    <button type="submit" disabled={state.submitting} className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed">
                      <Send className="h-5 w-5" />
                      {state.submitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-text-main mb-8 text-center">Find Us On The Map</h2>
            <div className="relative h-0 overflow-hidden rounded-2xl shadow-xl" style={{ paddingBottom: '75%' }}> {/* 4:3 Aspect Ratio */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.867993427323!2d88.1432923759556!3d25.00458893902181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fafddea2b9093b%3A0x159275e81ed0a4aa!2sDISHARI%20INSTITUTE%20OF%20PHARMACY!5e0!3m2!1sen!2sin"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
