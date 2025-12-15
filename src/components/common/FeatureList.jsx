import PropTypes from 'prop-types';

const FeatureList = ({ 
  features, 
  icon,
  className = '' 
}) => {
  const defaultIcon = (
    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
  
  return (
    <ul className={`space-y-3 ${className}`}>
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-center text-gray-700">
          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
            {icon || defaultIcon}
          </div>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
};

FeatureList.propTypes = {
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  icon: PropTypes.node,
  className: PropTypes.string,
};

export default FeatureList;
