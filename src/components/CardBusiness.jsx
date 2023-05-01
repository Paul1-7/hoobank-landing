import PropTypes from 'prop-types';

const CardBusiness = ({ icon, title, content }) => {
  return (
    <li className="flex gap-4 items-center feature-card rounded-2xl box-shadow p-4 mb-4 transition-colors">
      <img src={icon} alt="icon of star" className="bg-secondary/10 rounded-full p-2 h-full" />
      <div>
        <h4 className="text-white text-2xl font-semibold">{title}</h4>
        <p className="paragraph">{content}</p>
      </div>
    </li>
  );
};

CardBusiness.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default CardBusiness;
