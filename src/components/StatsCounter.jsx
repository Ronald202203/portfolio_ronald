import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export default function StatsCounter({ stats }) {
    const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

    return (
        <div ref={ref} className="grid grid-cols-2 gap-px bg-line border border-line rounded-lg overflow-hidden lg:w-[380px]">
            {stats.map((stat, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="bg-white p-6"
                >
                    <div className="font-display text-3xl font-bold text-odoo-500 mb-1">
                        {inView && <CountUp end={stat.value} duration={2} suffix={stat.suffix || ''} />}
                    </div>
                    <div className="text-sm text-ink/60 leading-snug">{stat.label}</div>
                </motion.div>
            ))}
        </div>
    )
}
