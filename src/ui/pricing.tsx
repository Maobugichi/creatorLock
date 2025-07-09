import { motion } from 'motion/react';
import { useRef } from 'react';
import { Header } from '../components/header';

const PricingSection = () => {
  const constraintsRef = useRef(null);

  const plans = [
    {
      name: 'Free',
      price: '$0/month',
      features: ['Basic content protection', 'Up to 10 uploads', 'Community support'],
      cta: 'Get Started',
      isPopular: false,
    },
    {
      name: 'Pro',
      price: '$5/month',
      features: ['Advanced encryption', 'Unlimited uploads', 'Priority support', 'Analytics dashboard'],
      cta: 'Start Free Trial',
      isPopular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Custom integrations', 'Dedicated support', 'Team accounts', 'API access'],
      cta: 'Contact Us',
      isPopular: false,
    },
  ];

  return (
    <section className="py-16 bg-[#EAF3FA] w-full font-poppins" ref={constraintsRef}>
      <div className="container mx-auto px-4">
        <Header className="text-3xl lg:text-4xl font-extrabold text-center mb-12 ">Choose Your CreatorLock Plan</Header>
        <div className="grid w-[90%] lg:w-[80%] mx-auto grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              className={`relative p-6 rounded-2xl shadow-xl bg-white flex flex-col justify-between ${
                plan.isPopular ? 'border-4 border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100' : ''
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              {plan.isPopular && (
                <span className="absolute top-0 right-0 bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-bl-2xl">
                  Most Popular
                </span>
              )}
              <div>
                <Header className="text-2xl font-bold mb-4">{plan.name}</Header>
                <p className="text-3xl font-semibold mb-4">{plan.price}</p>
                <ul className="mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <motion.button
                className={`w-full py-3 rounded-lg text-white font-semibold ${
                  plan.isPopular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;