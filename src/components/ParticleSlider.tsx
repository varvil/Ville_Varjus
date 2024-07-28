import React from 'react';
import { useColorPicker, useParticleCount, useVelocityCount } from '../hooks/useParticleCount';
import "../styles/Slider.css"

export const ParticleSlider = ({ initialCount, onChange }: { initialCount: number; onChange: (count: number) => void }) => {
    const { particleCount, handleParticleCountChange } = useParticleCount(initialCount);
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      handleParticleCountChange(event);
      onChange(Number(event.target.value));
    };

    return (
      <div className="slider-container" style={{ animationDelay: '0.2s' }}>
        <input
          type="range"
          min="1"
          max="200"
          value={particleCount}
          onChange={handleChange}
          className="slider"
        />
        <label className='count-label'>Particles : {particleCount}</label>
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
      <div className="slider-container" style={{ animationDelay: '0.4s' }}>
        <input
          type="range"
          min="0.25"
          step="0.01"
          max="10"
          value={velocityCount}
          onChange={handleChange}
          className="slider"
        />
        <label className='count-label'>Velocity : {velocityCount}</label>
      </div>
    );
  }

  export const ColorPickerr = ({ initialValue, onChange }: { initialValue: string; onChange: (count: string) => void }) => {
    const { colorPicker, handleColorPickerChange } = useColorPicker(initialValue);
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      handleColorPickerChange(event);
      onChange(String(event.target.value));
    };

  
    return (
      <div className="slider-container" style={{ animationDelay: '0.6s' }}>
        <input type="text"
        value={colorPicker} 
        onChange={handleChange}
        className='color-input'
        />
        <label className='count-label'>Particle color : {colorPicker} </label>
      </div>
    );
  }
