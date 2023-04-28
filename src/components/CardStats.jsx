import PropTypes from 'prop-types';

const CardStats = ({ title, content, className }) => {
  return (
    <p className={'flex gap-2 text-4xl  text-white items-center font-semibold ' + className}>
      {title} <span className={'text-xl text-gradient uppercase font-normal '}>{content}</span>
    </p>
  );
};

CardStats.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  className: PropTypes.string,
};

export default CardStats;
