import { motion, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Stat {
  label: string;
  value: number;
}

interface StatsProps {
  stats: Stat[];
  title: string;
  showDefaultText?: boolean;
}

const Counter = ({ to }: { to: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (value) => {
        setCount(Math.round(value));
      },
    });

    return () => controls.stop();
  }, [to]);

  return <>{count}</>;
};

const Stats = ({ stats, title, showDefaultText = false }: StatsProps) => {
  return (
    <section className="bg-brand-primary-light py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-text-main">{title}</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-4xl sm:text-5xl font-bold text-brand-primary">
                <Counter to={stat.value} /> +
              </p>
              <p className="mt-2 text-base sm:text-lg text-brand-text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        {showDefaultText && (
             <motion.p 
              className="max-w-3xl mx-auto text-center mt-12 text-base sm:text-lg text-brand-text-muted"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              We aim at inspiring our students to dream more, learn more, do more, and become more in their respective journeys of life.
            </motion.p>
        )}
      </div>
    </section>
  );
};

export default Stats;
