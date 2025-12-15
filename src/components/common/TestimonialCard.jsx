import PropTypes from 'prop-types';
import Card from './Card';

const TestimonialCard = ({ 
  name,
  role,
  company,
  content,
  rating = 5,
  avatar,
  avatarColor = 'blue',
  className = ''
}) => {
  const colors = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    pink: 'from-pink-500 to-pink-600',
    indigo: 'from-indigo-500 to-indigo-600',
  };
  
  return (
    <Card className={`group relative ${className}`} padding="md">
      <div className="flex mb-6">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <div className="relative">
        <div className="text-6xl text-gray-200 absolute -top-8 -left-2">"</div>
        <p className="text-gray-700 mb-8 text-lg leading-relaxed relative z-10">
          {content}
        </p>
        <div className="text-6xl text-gray-200 absolute -bottom-12 -right-2">"</div>
      </div>

      {/* Client Info */}
      <div className="flex items-center pt-8 border-t border-gray-100">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${colors[avatarColor]} flex items-center justify-center text-white font-bold text-lg mr-4 shadow-md`}>
          {avatar}
        </div>
        <div>
          <div className="font-bold text-gray-900 text-lg">{name}</div>
          <div className="text-gray-600">
            {role} • {company}
          </div>
        </div>
      </div>

      {/* Hover Effect Line */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
    </Card>
  );
};

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  rating: PropTypes.number,
  avatar: PropTypes.string.isRequired,
  avatarColor: PropTypes.oneOf(['blue', 'green', 'purple', 'pink', 'indigo']),
  className: PropTypes.string,
};

export default TestimonialCard;
