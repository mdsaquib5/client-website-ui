import PropTypes from 'prop-types';
import Badge from './Badge';

const SectionHeader = ({ 
  badge,
  title,
  highlight,
  description,
  align = 'center',
  className = ''
}) => {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  const renderTitle = () => {
    if (!highlight) {
      return <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{title}</h2>;
    }
    
    const parts = title.split(highlight);
    return (
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
        {parts[0]}
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          {highlight}
        </span>
        {parts[1]}
      </h2>
    );
  };
  
  return (
    <div className={`${alignments[align]} mb-16 animate-fade-in-up ${className}`}>
      {badge && (
        <div className="mb-6 flex justify-center">
          <Badge variant="primary">{badge}</Badge>
        </div>
      )}
      {renderTitle()}
      {description && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

SectionHeader.propTypes = {
  badge: PropTypes.string,
  title: PropTypes.string.isRequired,
  highlight: PropTypes.string,
  description: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  className: PropTypes.string,
};

export default SectionHeader;
