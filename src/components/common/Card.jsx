import PropTypes from 'prop-types';

const Card = ({ 
  children, 
  className = '',
  hover = true,
  padding = 'md',
  shadow = 'md',
  ...props 
}) => {
  const baseStyles = 'bg-white rounded-2xl border border-gray-200 transition-all duration-500';
  
  const hoverStyles = hover ? 'hover-lift' : '';
  
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-8',
    lg: 'p-12',
  };
  
  const shadows = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-lg',
    lg: 'shadow-xl',
  };
  
  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${paddings[padding]} ${shadows[shadow]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hover: PropTypes.bool,
  padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
  shadow: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
};

export default Card;
