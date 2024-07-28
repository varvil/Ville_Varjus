import { useState } from 'react';

export const useParticleCount = (initialCount: number) => {
  const [particleCount, setParticleCount] = useState(initialCount);

  const handleParticleCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParticleCount(Number(event.target.value));
  };


  return { particleCount, handleParticleCountChange};
};

export const useVelocityCount = (initialValue: number) => {
  const [velocityCount, setVelocityCount] = useState(initialValue)

  const handleVelocityCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVelocityCount(Number(event.target.value))
  }

  return {velocityCount, handleVelocityCountChange};
}