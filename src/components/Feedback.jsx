import { feedbacks } from '~/constants';
import CardFeedback from './CardFeedback';

const Feedback = () => {
  return (
    <section
      className={'sm:flex sm:flex-col sm:gap-10 pb-[5rem] flex-grow items-center scroll-trigger hidden-element'}
      data-name-target="feedback"
    >
      <div className="sm:flex  items-center">
        <h3 className="subtitle  leading-[4.375rem] flex-grow pr-16 pb-8 ">What people are saying about us</h3>
        <p className="paragraph  flex-grow sm:px-10">
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>
      <div className="grid-feedback ">
        {feedbacks.map((feedback) => (
          <CardFeedback data={feedback} key={feedback.id} />
        ))}
      </div>
    </section>
  );
};

export default Feedback;
