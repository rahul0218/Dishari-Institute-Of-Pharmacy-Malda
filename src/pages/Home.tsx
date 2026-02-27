import HeroSlider from '../components/home/HeroSlider';
import Stats from '../components/home/Stats';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const homeStats = [
  { label: 'Enrollments', value: 500 },
  { label: 'Qualified Staff', value: 50 },
  { label: 'Activities', value: 100 },
  { label: 'Courses', value: 2 },
];

const Home = () => {
  return (
    <div>
      <HeroSlider />

      {/* Learning Begins Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-brand-text-main"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Learning Begins With Us
          </motion.h2>
          <motion.p
            className="mt-6 text-base sm:text-lg leading-relaxed text-brand-text-muted"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Welcome to "Dishari Institute Of Pharmacy," where knowledge is the foundation of growth and success. Our mission is to ignite the spark of curiosity and foster a lifelong love for learning in individuals of all ages. As a leading educational institute, we believe that education is the key to unlocking potential and opening doors to new opportunities.
          </motion.p>
        </div>
      </section>

      {/* About Institute Section */}
      <section className="py-16 sm:py-24 bg-brand-primary-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-text-main mb-6">Dishari Institute Of Pharmacy</h2>
              <p className="text-brand-text-muted leading-relaxed mb-4">
                The institute provides the best learning atmosphere with dedicated faculty, who are not only friendly, but also highly-trained and experienced. They guide the students and clear their doubts, both inside and outside the classroom.
              </p>
              <p className="text-brand-text-muted leading-relaxed mb-8">
                Life on campus is vibrant and engaging. Students have access to a wide range of extracurricular activities, from sports teams to cultural clubs, ensuring a well-rounded educational experience.
              </p>
              <Link to="/about">
                <button className="bg-brand-primary hover:bg-brand-primary-dark text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-all duration-300 transform hover:scale-105">
                  Learn More
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/image/pharmacy.png"
                alt="Smiling pharmacy students working together"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Course Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-text-main">Our Course</h2>
            <p className="mt-4 text-base sm:text-lg text-brand-text-muted">
              Explore the programs we offer to shape your future in the pharmaceutical world.
            </p>
          </div>
          <motion.div
            className="max-w-3xl mx-auto bg-brand-primary-light border border-gray-200 rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-brand-primary mb-4">D Pharma</h3>
            <p className="text-brand-text-content leading-relaxed mb-6">
              Diploma in Pharmacy is a 2-year-long career-oriented, diploma course. Students who wish to pursue a long-term career in the medical field of pharmaceutical sciences, and start a career in the pharmaceutical industry, can take admission to the D Pharma course.
            </p>
            <Link to="/course" className="font-semibold text-brand-primary hover:text-brand-primary-dark flex items-center gap-2 group">
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Stats stats={homeStats} title="Numbers at a Glance" showDefaultText={true} />
    </div>
  );
};

export default Home;
