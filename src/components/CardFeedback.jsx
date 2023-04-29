import PropTypes from 'prop-types';
import { quotes } from '~/assets/imgs';

const CardFeedback = ({ data }) => {
  const { content, name, title, img } = data;
  return (
    <div className="flex flex-col gap-8 text-white p-10 rounded-3xl feedback-card ">
      <img src={quotes} alt="icon of quotes" className="w-10" />
      <p className="paragraph">{content}</p>
      <div className="flex gap-4 items-center">
        <img src={img} alt={`avatar of ${name}`} className="w-12" />
        <div>
          <h5 className="text-xl">{name}</h5>
          <p className=" text-base text-dimWhite">{title}</p>
        </div>
      </div>
    </div>
  );
};

CardFeedback.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CardFeedback;
