import { motion } from 'framer-motion';
import { Calendar, FileText } from 'lucide-react';

const notices = [
  {
    id: 1,
    title: 'Amission notice for D-Pharma',
    date: 'January 01, 2026',
    description: 'This is to inform all students Diploma in Pharmacy (D.Pharma) go through notice to know more.',
    // public folder assets are served from the root, so the PDF can be referenced directly by its
    // path under /Notice. This corresponds to public/Notice/Admission Notice Pharmacy.pdf
    link: '/Notice/Admission Notice Pharmacy.pdf',
  },
  /*{
    id: 2,
    title: 'Schedule for Mid-Term Examinations (1st Year)',
    date: 'July 25, 2025',
    description: 'The schedule for the mid-term examinations for the first-year D.Pharma students has been published. Please collect the detailed routine from the academic office.',
    link: '#',
  },
  {
    id: 3,
    title: 'Workshop on "Modern Pharmaceutical Techniques"',
    date: 'July 18, 2025',
    description: 'A two-day workshop on modern pharmaceutical techniques will be held on July 28th and 29th. All students are encouraged to register. Limited seats available.',
    link: '#',
  },
  {
    id: 4,
    title: 'Holiday Notice: Independence Day',
    date: 'July 15, 2025',
    description: 'The institute will remain closed on August 15, 2025, on account of Independence Day. The flag hoisting ceremony will be held at 9:00 AM.',
    link: '#',
  },*/
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const Notice = () => {
  return (
    <div className="bg-white">
      <motion.div
        className="bg-brand-primary-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-text-main">Notice Board</h1>
          <p className="mt-4 text-lg text-brand-text-muted max-w-2xl mx-auto">
            Stay updated with the latest announcements, schedules, and important information from the institute.
          </p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          className="space-y-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {notices.map((notice) => (
            <motion.div
              key={notice.id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              variants={itemVariants}
            >
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-brand-text-muted mb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{notice.date}</span>
                  </div>
                </div>
                <h2 className="text-xl font-bold text-brand-text-main mb-2">{notice.title}</h2>
                <p className="text-brand-text-content leading-relaxed">{notice.description}</p>
              </div>
              <div className="bg-gray-50 px-6 py-4">
                <a
                  href={notice.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-brand-primary hover:text-brand-primary-dark transition-colors"
                >
                  <FileText className="h-5 w-5" />
                  <span>Download PDF</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Notice;
