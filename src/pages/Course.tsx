import { motion } from 'framer-motion';
import { Clock, UserCheck, Award, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const courseDetails = {
  title: 'Diploma in Pharmacy (D.Pharma)',
  description: 'Diploma in Pharmacy is a 2-year-long career-oriented diploma course. Students who wish to pursue a long-term career in the medical field of pharmaceutical sciences and start a career in the pharmaceutical industry can take admission to the D.Pharma course.',
  features: [
    { icon: Clock, label: 'Duration', value: '2 Years' },
    { icon: UserCheck, label: 'Eligibility', value: '10+2 with Science (PCB/PCM)' },
    { icon: Award, label: 'Affiliation', value: 'Approved by PCI & Affiliate to State Medical Faculty of West Bengal' },
  ],
  careerProspects: [
    'Community Pharmacist',
    'Hospital Pharmacy Technician',
    'Medical Representative',
    'Pharmaceutical Wholesaler',
    'Further Studies (B.Pharma)',
  ],
};

const Course = () => {
  return (
    <div className="bg-white">
      <motion.div 
        className="bg-brand-primary-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-text-main">Our Course</h1>
          <p className="mt-4 text-lg text-brand-text-muted max-w-2xl mx-auto">
            Explore the comprehensive program we offer to build your successful career in pharmacy.
          </p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div 
          className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-brand-primary">{courseDetails.title}</h2>
            <p className="mt-4 text-brand-text-content leading-relaxed">{courseDetails.description}</p>
          </div>

          <div className="bg-gray-50 px-8 md:px-12 py-8 border-t border-b border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {courseDetails.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <feature.icon className="h-8 w-8 text-brand-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-brand-text-main">{feature.label}</h3>
                    <p className="text-brand-text-muted">{feature.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-bold text-brand-text-main mb-6">Career Prospects</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {courseDetails.careerProspects.map((prospect, index) => (
                <div key={index} className="flex items-center gap-3 bg-brand-primary-light p-3 rounded-lg">
                  <Briefcase className="h-5 w-5 text-brand-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-brand-text-content">{prospect}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-brand-primary-light/50 px-8 py-6 text-center">
             <Link to="/contact">
                <button className="bg-brand-primary hover:bg-brand-primary-dark text-white font-bold py-3 px-8 rounded-lg flex items-center gap-2 transition-all duration-300 transform hover:scale-105 mx-auto">
                  Apply Now
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Course;
