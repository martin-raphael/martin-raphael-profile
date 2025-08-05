import Link from 'next/link';

const Button = ({ children, href, variant = 'primary', size = 'medium', className = '', ...props }) => {
  const baseClasses = 'rounded-lg font-medium transition duration-300 inline-flex items-center justify-center';
  
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow hover:shadow-md',
    secondary: 'bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
    dark: 'bg-gray-800 hover:bg-gray-900 text-white shadow hover:shadow-md',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-700'
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        
          {children}
        
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;