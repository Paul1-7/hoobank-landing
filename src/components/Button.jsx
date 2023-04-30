import PropTypes from 'prop-types';

const Button = ({ title }) => {
  return (
    <button className="bg-blue-gradient px-4 font-semibold py-2 rounded-[.625rem] text-lg hover:scale-105 ">
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
};

export default Button;
