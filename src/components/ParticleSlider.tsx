import React from 'react';
import { useParticleCount, useVelocityCount } from '../hooks/useParticleCount';
import "../styles/Slider.css"

export const ParticleSlider = ({ initialCount, onChange }: { initialCount: number; onChange: (count: number) => void }) => {
    const { particleCount, handleParticleCountChange } = useParticleCount(initialCount);
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      handleParticleCountChange(event);
      onChange(Number(event.target.value));
    };

    return (
      <div className="slider-container">
        <input
          type="range"
          min="1"
          max="250"
          value={particleCount}
          onChange={handleChange}
          className="slider"
        />
        <label className='count-label'>{particleCount} Particles</label>
      </div>
    );
  }

  export const VelocitySlider = ({ initialValue, onChange }: { initialValue: number; onChange: (count: number) => void }) => {
    const { velocityCount, handleVelocityCountChange } = useVelocityCount(initialValue);
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      handleVelocityCountChange(event);
      onChange(Number(event.target.value));
    };

  
    return (
      <div className="slider-container">
        <input
          type="range"
          min="0.25"
          step="0.01"
          max="10"
          value={velocityCount}
          onChange={handleChange}
          className="slider"
        />
        <label className='count-label'>{velocityCount} Velocity</label>
      </div>
    );
  }
