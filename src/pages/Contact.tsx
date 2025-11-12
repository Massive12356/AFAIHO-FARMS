import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Users, Leaf, Camera } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <section
        className="relative h-80 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1920)",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Contact AFAIHO FARMS
          </h1>
          <p className="text-xl text-gray-200">
            We'd love to hear from you and welcome you to our farm
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-4 relative overflow-hidden">
        {/* Animated sketch elements for contact section */}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Address
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      1234 Farm Road, Green Valley, CA 95945
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      info@greenvalleyfarm.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Hours
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Monday - Saturday: 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Sunday: 9:00 AM - 4:00 PM
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      <strong>Farm Tours:</strong> Available by appointment on
                      weekends
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white dark:bg-gray-800 relative overflow-hidden">
        {/* Animated sketch elements for visit section */}
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
          <SectionTitle
            title="Visit Our Farm"
            subtitle="Experience sustainable mixed farming firsthand"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
                <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Farm Tours
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Join our guided tours to see our mixed farming operations in
                action and learn about sustainable agriculture.
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                Saturdays & Sundays: 10:00 AM & 2:00 PM
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
                <Leaf className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Workshops
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Participate in hands-on workshops to learn organic farming
                techniques and sustainable practices.
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                Monthly workshops - Check our events calendar
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
                <Camera className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Photo Opportunities
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Capture the beauty of rural life and our sustainable farming
                practices in scenic settings.
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                Self-guided visits during regular hours
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-green-50 dark:bg-green-900/20 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              What to Expect During Your Visit
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <ul className="text-gray-700 dark:text-gray-300 space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">
                      •
                    </span>
                    <span>Tour of our organic crop fields and greenhouses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">
                      •
                    </span>
                    <span>
                      Visit our livestock areas and learn about animal care
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">
                      •
                    </span>
                    <span>See our composting and soil management systems</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="text-gray-700 dark:text-gray-300 space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">
                      •
                    </span>
                    <span>
                      Learn about our mixed farming integration techniques
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">
                      •
                    </span>
                    <span>Taste fresh produce straight from the farm</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">
                      •
                    </span>
                    <span>
                      Meet our farmers and ask questions about sustainable
                      practices
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 px-4 relative overflow-hidden">
        {/* Animated sketch elements for map section */}
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
          <SectionTitle title="Find Us" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-lg h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639491826556!2d-122.08624968469271!3d37.42206597982517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Farm Location"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-8 right-8 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg z-50"
        >
          <p className="font-semibold">Message sent successfully!</p>
          <p className="text-sm text-green-100">We'll get back to you soon.</p>
        </motion.div>
      )}
    </div>
  );
}