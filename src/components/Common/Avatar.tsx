import React from 'react';
import clsx from 'clsx';

interface AvatarProps {
  src?: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function Avatar({ src, alt, size = 'md', className }: AvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const classes = clsx(
    'rounded-full object-cover border-2 border-gray-200 dark:border-gray-700',
    sizeClasses[size],
    className
  );

  if (src) {
    return <img src={src} alt={alt} className={classes} />;
  }

  // Fallback avatar with initials
  const initials = alt
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className={clsx(
      'bg-blue-600 text-white flex items-center justify-center font-semibold',
      sizeClasses[size],
      className
    )}>
      {initials}
    </div>
  );
}
