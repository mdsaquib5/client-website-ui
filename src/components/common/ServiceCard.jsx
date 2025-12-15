import PropTypes from 'prop-types';
import Card from './Card';
import IconBox from './IconBox';
import FeatureList from './FeatureList';
import Button from './Button';

const ServiceCard = ({ 
  title,
  price,
  description,
  features,
  icon,
  iconColor = 'blue',
  popular = false,
  onButtonClick,
  buttonText = 'Get Started',
  className = ''
}) => {
  return (
    <Card 
      className={`group ${popular ? 'relative border-2 border-blue-200 shadow-xl' : ''} ${className}`}
      padding="md"
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-sm font-semibold text-white shadow-lg">
            Most Popular
          </div>
        </div>
      )}

      <div className="mb-6">
        <IconBox icon={icon} color={iconColor} />
      </div>

      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          {price}
        </div>
      </div>

      <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>

      <FeatureList features={features} className="mb-8" />

      <Button 
        variant="primary" 
        onClick={onButtonClick}
        className="w-full"
        icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        }
      >
        {buttonText}
      </Button>
    </Card>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  icon: PropTypes.node.isRequired,
  iconColor: PropTypes.string,
  popular: PropTypes.bool,
  onButtonClick: PropTypes.func,
  buttonText: PropTypes.string,
  className: PropTypes.string,
};

export default ServiceCard;
