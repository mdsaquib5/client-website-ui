import PropTypes from 'prop-types';

const Badge = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  icon,
  className = '' 
}) => {
  const baseStyles = 'inline-flex items-center rounded-full font-semibold';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    info: 'bg-gray-100 text-gray-700',
    gradient: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg',
  };
  
  const sizes = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-2.5 text-sm',
  };
  
  return (
    <div className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {icon && <span className="mr-2">{icon}</span>}
      <span>{children}</span>
    </div>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'success', 'warning', 'info', 'gradient']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  icon: PropTypes.node,
  className: PropTypes.string,
};

export default Badge;
