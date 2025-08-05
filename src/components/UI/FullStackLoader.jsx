'use client';

import React from 'react';

const FullStackLoader = ({ 
  variant = 'default',
  message = '',
  className = ''
}) => {
  const variants = {
    default: {
      size: 56,
      ringColor: 'text-blue-600',
      ringWidth: 4,
      textSize: 'text-lg',
      textColor: 'text-gray-600'
    },
    page: {
      size: 80,
      ringColor: 'text-blue-500',
      ringWidth: 6,
      textSize: 'text-xl',
      textColor: 'text-gray-700'
    },
    section: {
      size: 40,
      ringColor: 'text-blue-400',
      ringWidth: 3,
      textSize: 'text-md',
      textColor: 'text-gray-500'
    },
    button: {
      size: 20,
      ringColor: 'text-white',
      ringWidth: 2,
      textSize: 'text-sm',
      textColor: 'text-gray-300'
    }
  };

  const currentVariant = variants[variant] || variants.default;

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative">
        {/* Outer ring */}
        <div className={`absolute border-${currentVariant.ringWidth} border-solid border-transparent border-t-${currentVariant.ringColor} rounded-full animate-spin`}
          style={{
            width: `${currentVariant.size}px`,
            height: `${currentVariant.size}px`,
            animationDuration: '1.8s'
          }}
        />
        {/* Inner ring (rotates opposite direction) */}
        <div className={`absolute border-${currentVariant.ringWidth} border-solid border-transparent border-b-${currentVariant.ringColor} rounded-full animate-spin-reverse`}
          style={{
            width: `${currentVariant.size * 0.7}px`,
            height: `${currentVariant.size * 0.7}px`,
            top: `${currentVariant.size * 0.15}px`,
            left: `${currentVariant.size * 0.15}px`,
            animationDuration: '1.2s'
          }}
        />
      </div>
      {message && (
        <p className={`mt-4 ${currentVariant.textSize} ${currentVariant.textColor} font-medium`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default FullStackLoader;