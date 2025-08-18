'use client';

import { motion } from 'motion/react';
import { IconType } from 'react-icons';

interface Props {
  title: string;
  description: string;
  Icon: IconType;
}

export default function ServiceItem({ title, description, Icon }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-neutral-900 text-white p-6 rounded-lg shadow-md text-center flex flex-col items-center gap-4 hover:bg-orange-600 transition-all"
    >
      <Icon className="text-4xl" />
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </motion.div>
  );
}
