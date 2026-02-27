import { motion } from 'framer-motion';
import Stats from '../components/home/Stats';
import { BookOpen, Users, FlaskConical } from 'lucide-react';

const aboutStats = [
  { label: 'Enrollments', value: 0 },
  { label: 'Qualified Staff', value: 0 },
  { label: 'Activities', value: 0 },
  { label: 'Courses', value: 0 },
];

const About = () => {
  return (
    <div className="bg-white text-brand-text-content">
      {/* Page Header */}
      <motion.div
        className="bg-brand-primary-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-text-main">About Us</h1>
          <p className="mt-4 text-lg text-brand-text-muted max-w-3xl mx-auto">
            Nurturing the minds of future pharmaceutical professionals with a commitment to excellence and a passion for innovation.
          </p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Intro Section */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-brand-primary mb-4">Dishari Institute Of Pharmacy</h2>
          <p className="text-lg leading-relaxed">
            At Dishari Institute of Pharmacy, we take pride in being a premier institute dedicated to nurturing the minds of future pharmaceutical professionals. With a commitment to excellence and a passion for innovation, we strive to create a stimulating learning environment that empowers our students to become competent and compassionate pharmacists.
          </p>
        </motion.div>

        {/* Principal's Message */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16 border">
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12 items-start">
            <motion.div
              className="lg:col-span-1 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/image/Principal_pic.png"
                alt="Mr. Md Shahidullah, Principal"
                className="w-48 h-48 rounded-full mx-auto mb-4 shadow-lg border-4 border-white object-cover object-top"
              />
              <h3 className="text-xl font-bold text-brand-text-main">Mr. Md Shahidullah</h3>
              <p className="text-brand-text-muted">Principal, Dishari Institute of Pharmacy</p>
            </motion.div>
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-brand-text-main mb-4">A Message from the Principal</h3>
              <article className="prose prose-lg max-w-none text-brand-text-content prose-h4:font-bold prose-h4:text-brand-primary">
                <p className="font-semibold">Dear Ambitious Minds,</p>
                <p>The Indian pharmaceutical sector is one of the fastest growing industries with a lot of potential. Currently, the pharmaceutical industry in India is valued at 50 billion US dollars. Dishari Institute of Pharmacy a brainchild of Dr. Satya Narayan Sharma, Director of Dishari Health Point Pvt. Ltd. plan to produce a highly skilled pharmacy professionals for the Healthcare sector.</p>
                <p>I am delighted to welcome you all on behalf of Dishari Institute Of Pharmacy this institute is established in 2023 and affiliated to WBSCTVESD and recognised by PCI New Delhi. This institute is mainly focusing on academic advancement. Development of country is depend on education and health . In pharmacy both the aspects are included. Our faculty members are not just educators; they are mentors and guides who are dedicated to helping you to discover and realize your full potential.</p>

                <h4>Scope & Career opportunities:</h4>
                <p>Pharmaceutical sciences provides very excellent career opportunities and bright future in diverse fields such as hospital pharmacist, clinical pharmacist, research associate, regulatory affairs, R & D, quality control, quality assurance, drug inspector and drug analyst and many more as per level of education in Pharmacy. Clinical research and pharmacovigilance is an excellent career opportunity at present. Beyond these all points there are many other opportunities are available.</p>
                <p>If you are serious about a career in pharmacy then you can join Dishari Institute of Pharmacy as we are providing courses like D. Pharmacy Very Soon we'll start B. Pharmacy.</p>

                <h4>Goal and objective of this college</h4>
                <p>To become a Centre of Excellence of Pharmacy Education and Research and to serve the society by developing in students heightened intellectual, cultural, ethical, and humane sensitivities; to foster a scientific temper, and to promote professional and technological expertise. I invite you to explore our website, attend our virtual information sessions, and connect with our admissions team to learn more about the programs we offer and the unique opportunities that await you at DISP. We look forward to welcoming you into our community of learners and leaders.</p>

                <p className="mt-6">Wishing you success and fulfilment in your academic pursuits.</p>
                <p className="font-semibold">Warm regards ,<br />Mr. Md Shahidullah</p>
              </article>
            </motion.div>
          </div>
        </div>

        {/* Quote */}
        <motion.blockquote
          className="text-center my-16 p-8 bg-brand-primary text-white rounded-xl shadow-lg relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-2xl italic font-medium">"Everyday at the Dishari Institute Of Pharmacy is like a blessing with the active students and talented staff members around."</p>
        </motion.blockquote>

        {/* Core Values Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-gray-50 p-6 rounded-lg border">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-brand-primary/10 p-3 rounded-full"><BookOpen className="h-6 w-6 text-brand-primary" /></div>
              <h3 className="text-xl font-bold text-brand-text-main">Our Philosophy</h3>
            </div>
            <p>We believe education is key to personal and societal growth, envisioning a world where skilled, ethical professionals drive pharmaceutical advancements prioritizing patient care.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-gray-50 p-6 rounded-lg border">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-brand-primary/10 p-3 rounded-full"><Users className="h-6 w-6 text-brand-primary" /></div>
              <h3 className="text-xl font-bold text-brand-text-main">Holistic Development</h3>
            </div>
            <p>We nurture well-rounded individuals by encouraging extracurriculars, sports, and community service, fostering personality development for a positive societal contribution.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-gray-50 p-6 rounded-lg border">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-brand-primary/10 p-3 rounded-full"><FlaskConical className="h-6 w-6 text-brand-primary" /></div>
              <h3 className="text-xl font-bold text-brand-text-main">State-of-the-art Facilities</h3>
            </div>
            <p>Our institute boasts modern labs with the latest technology and a comprehensive library, enabling hands-on experience and promoting academic excellence.</p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <Stats stats={aboutStats} title="Numbers at a Glance" />
      </div>
    </div>
  );
};

export default About;
