import PropTypes from 'prop-types';

const StatCard = ({
  value,
  label,
  icon,
  valueClassName = 'text-gray-900',
  labelClassName = 'text-gray-600',
  className = ''
}) => {
  return (
    <div className={`text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover-lift ${className}`}>
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      <div className={`text-3xl md:text-4xl font-bold mb-2 ${valueClassName}`}>{value}</div>
      <div className={`text-sm ${labelClassName}`}>{label}</div>
    </div>
  );
};

StatCard.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  valueClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  className: PropTypes.string,
};

export default StatCard;
