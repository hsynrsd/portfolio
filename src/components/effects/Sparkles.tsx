import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

const SparkleWrapper = styled.span`
  position: absolute;
  pointer-events: none;
  z-index: 10;
`;

const Sparkle = styled(motion.svg)`
  position: absolute;
  pointer-events: none;
  stroke: none;
`;

const generateSparkle = (color: string) => ({
  id: Math.random(),
  createdAt: Date.now(),
  color,
  size: Math.random() * 10 + 10,
  style: {
    top: Math.random() * 100 + '%',
    left: Math.random() * 100 + '%',
    zIndex: 2
  }
});

interface SparklesProps {
  color?: string;
  count?: number;
  x: number;
  y: number;
  onComplete?: () => void;
}

const Sparkles = ({ color = 'var(--accent-color)', count = 5, x, y, onComplete }: SparklesProps) => {
  const [sparkles, setSparkles] = useState<Array<ReturnType<typeof generateSparkle>>>([]);

  useEffect(() => {
    const newSparkles = Array.from({ length: count }, () => generateSparkle(color));
    setSparkles(newSparkles);

    const timeout = setTimeout(() => {
      setSparkles([]);
      onComplete?.();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [color, count, onComplete]);

  return (
    <SparkleWrapper style={{ position: 'fixed', top: y - 20, left: x - 20, width: 40, height: 40 }}>
      <AnimatePresence>
        {sparkles.map(sparkle => (
          <Sparkle
            key={sparkle.id}
            width={sparkle.size}
            height={sparkle.size}
            viewBox="0 0 160 160"
            style={sparkle.style}
            initial={{ scale: 0, rotate: 0 }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180],
              opacity: [1, 0],
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              times: [0, 0.4, 1]
            }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <path
              fill={sparkle.color}
              d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
            />
          </Sparkle>
        ))}
      </AnimatePresence>
    </SparkleWrapper>
  );
};

export default Sparkles; 