import PropTypes from 'prop-types';

const IconBox = ({ 
  icon, 
  color = 'blue', 
  size = 'md',
  className = '' 
}) => {
  const colors = {
    blue: 'bg-gradient-to-br from-blue-500 to-blue-600',
    purple: 'bg-gradient-to-br from-purple-500 to-purple-600',
    green: 'bg-gradient-to-br from-green-500 to-green-600',
    indigo: 'bg-gradient-to-br from-blue-500 to-indigo-500',
    pink: 'bg-gradient-to-br from-pink-500 to-pink-600',
  };
  
  const sizes = {
    sm: 'w-10 h-10 text-lg',
    md: 'w-14 h-14 text-2xl',
    lg: 'w-16 h-16 text-3xl',
  };
  
  return (
    <div 
      className={`${colors[color]} ${sizes[size]} rounded-xl flex items-center justify-center shadow-lg text-white ${className}`}
    >
      {icon}
    </div>
  );
};

IconBox.propTypes = {
  icon: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['blue', 'purple', 'green', 'indigo', 'pink']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};

export default IconBox;
