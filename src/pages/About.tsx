import { motion } from 'framer-motion';
import { Target, Eye, TrendingUp, Users, Leaf, TreePine, Wheat } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import p1 from '../public/images/18.jpeg'
import p2 from '../public/images/24.jpg'
import p3 from '../public/images/1.jpeg'
import aboutImage from '../public/images/abImage.jpeg'

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To provide our community with the freshest, highest-quality organic produce and meats while maintaining sustainable farming practices that protect our environment for future generations.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description:
        'To be the leading mixed farming operation in the region, recognized for our commitment to quality, sustainability, and community engagement.',
    },
    {
      icon: TrendingUp,
      title: 'Our Goals',
      description:
        'Continuously improve our farming techniques, expand our product offerings, and educate the community about the benefits of organic, sustainable agriculture.',
    },
  ];

  const farmingPractices = [
    {
      icon: Leaf,
      title: 'Crop Rotation',
      description: 'We rotate crops seasonally to maintain soil health and prevent pest buildup.',
    },
    {
      icon: TreePine,
      title: 'Integrated Livestock',
      description: 'Our livestock provides natural fertilizer while grazing on rotated pastures.',
    },
    {
      icon: Wheat,
      title: 'Composting',
      description: 'We create nutrient-rich compost from farm waste to enrich our soil naturally.',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutImage})` }} // ✅
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About Our Farm
          </h1>
          <p className="text-xl text-gray-200">
            Sustainable Mixed Farming Since 1985
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-4 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Animated sketch elements for story section */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 opacity-25 dark:opacity-20"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M30,50 Q50,30 70,50 T90,70"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <circle cx="50" cy="50" r="8" fill="#10b981" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 opacity-25 dark:opacity-20"
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M20,50 Q40,30 60,50 T100,50"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M30,60 Q50,40 70,60"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <circle cx="40" cy="50" r="5" fill="#10b981" />
            <circle cx="60" cy="50" r="5" fill="#10b981" />
          </svg>
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  AFAIHO FARMS was founded in 1985 by the Henderson family with
                  a simple vision: to provide the local community with fresh,
                  organic produce grown using sustainable farming methods. What
                  started as a small 20-acre operation has grown into a thriving
                  200-acre mixed farming enterprise.
                </p>
                <p>
                  Over the years, we've stayed true to our roots while embracing
                  innovation. We combine time-tested agricultural traditions
                  with modern farming techniques to ensure the highest quality
                  products while minimizing our environmental impact.
                </p>
                <p>
                  Today, AFAIHO FARMS is home to diverse crops, livestock, and a
                  thriving dairy operation. We're proud to employ local workers,
                  support the community, and contribute to the growing movement
                  toward sustainable, organic agriculture.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src={p2}
                alt="Farm worker"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
                loading="lazy"
              />
              <img
                src={p1}
                alt="Farm animals"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        {/* Animated sketch elements for values section */}
        <motion.div
          className="absolute top-10 right-10 w-24 h-24 opacity-25 dark:opacity-20"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M30,30 Q50,10 70,30 T90,50"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M20,50 Q40,30 60,50 T80,70"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <circle cx="40" cy="40" r="6" fill="#10b981" />
            <circle cx="60" cy="60" r="6" fill="#10b981" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-10 w-32 h-32 opacity-25 dark:opacity-20"
          animate={{
            rotate: [0, 15, 0, -15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="35"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M50,10 L50,90 M10,50 L90,50"
              stroke="#10b981"
              strokeWidth="3"
            />
          </svg>
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle title="Our Values" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
                    <Icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Animated sketch elements for farming practices section */}
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 opacity-25 dark:opacity-20"
          animate={{
            x: [0, 25, 0, -25, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M20,50 Q40,30 60,50 T100,50"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M20,60 Q40,40 60,60 T100,60"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <circle cx="30" cy="50" r="5" fill="#10b981" />
            <circle cx="50" cy="50" r="5" fill="#10b981" />
            <circle cx="70" cy="50" r="5" fill="#10b981" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 opacity-25 dark:opacity-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M50,20 L50,80 M20,50 L80,50"
              stroke="#10b981"
              strokeWidth="3"
            />
            <circle cx="50" cy="50" r="10" fill="#10b981" />
          </svg>
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle
            title="Mixed Farming Practices"
            subtitle="Our sustainable approach to agriculture"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {farmingPractices.map((practice, index) => {
              const Icon = practice.icon;
              return (
                <motion.div
                  key={practice.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
                    <Icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {practice.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {practice.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-green-50 dark:bg-green-900/20 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              The Benefits of Mixed Farming
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Environmental Benefits
                </h4>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">
                      •
                    </span>
                    <span>
                      Improved soil health through natural fertilization
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">
                      •
                    </span>
                    <span>Reduced need for chemical inputs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">
                      •
                    </span>
                    <span>Biodiversity conservation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Economic Benefits
                </h4>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">
                      •
                    </span>
                    <span>Diversified income sources</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">
                      •
                    </span>
                    <span>
                      Risk mitigation through crop and livestock variety
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">
                      •
                    </span>
                    <span>Reduced production costs</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        {/* Animated sketch elements for founder section */}
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 opacity-25 dark:opacity-20"
          animate={{
            y: [0, -25, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M20,50 Q40,30 60,50 T100,50"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M30,60 Q50,40 70,60"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <circle cx="40" cy="50" r="6" fill="#10b981" />
            <circle cx="60" cy="50" r="6" fill="#10b981" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-10 w-40 h-40 opacity-25 dark:opacity-20"
          animate={{
            rotate: [0, 15, 0, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M30,30 Q50,50 70,30"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M30,70 Q50,50 70,70"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
          </svg>
        </motion.div>

        <div className="max-w-5xl mx-auto relative z-10">
          <SectionTitle
            title="Meet the Founder"
            subtitle="The heart and soul behind GreenValley Farm"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-900 rounded-xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center"
          >
            <img
              src={p3}
              alt="John Henderson"
              className="w-48 h-48 rounded-full object-cover shadow-lg"
              loading="lazy"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Maxwell
              </h3>
              <p className="text-green-600 dark:text-green-400 font-semibold mb-4">
                Founder & Head Farmer
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                John grew up on a small family farm and learned the value of
                hard work and sustainable agriculture from an early age. With a
                degree in Agricultural Science and over 40 years of hands-on
                experience, he's passionate about sharing his knowledge and love
                for farming with the community.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-600" />
                  <span>40+ Years Experience</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-green-600 text-white relative overflow-hidden">
        {/* Animated sketch elements for CTA section */}
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 opacity-25"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="white"
              strokeWidth="3"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="35"
              stroke="white"
              strokeWidth="3"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="25"
              stroke="white"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M50,10 L50,90 M10,50 L90,50"
              stroke="white"
              strokeWidth="3"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 opacity-25"
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M30,70 Q50,30 70,70"
              stroke="white"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M40,60 Q50,40 60,60"
              stroke="white"
              strokeWidth="3"
              fill="none"
            />
            <circle cx="50" cy="50" r="8" fill="white" />
          </svg>
        </motion.div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Join Our Farm Family
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl mb-8 text-green-50"
          >
            Experience the difference that comes from locally-grown, organic
            produce and ethically-raised livestock
          </motion.p>
        </div>
      </section>
    </div>
  );
}