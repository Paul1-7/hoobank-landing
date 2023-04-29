import { features } from '~/constants';
import CardBusiness from './CardBusiness';
import Button from './Button';

const Business = () => {
  return (
    <section className={'sm:flex  gap-24 justify-between pb-[7rem]'}>
      <div className="sm:flex-[50%]">
        <h3 className="subtitle pb-8 leading-[4.375rem]">You do the business, we’ll handle the money.</h3>
        <p className="paragraph pb-8">
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving
          money. But with hundreds of credit cards on the market.
        </p>
        <Button title="Get Started" />
      </div>
      <ul className="sm:flex-[50%]">
        {features.map(({ id, icon, title, content }) => (
          <CardBusiness key={id} icon={icon} title={title} content={content} />
        ))}
      </ul>
    </section>
  );
};

export default Business;
