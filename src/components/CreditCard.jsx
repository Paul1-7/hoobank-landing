import { card } from '~/assets/imgs';
import Button from './Button';

const CreditCard = () => {
  return (
    <section
      className={
        'flex relative flex-col-reverse sm:flex-row sm:gap-24  pb-[7rem] flex-grow items-center scroll-trigger hidden-element'
      }
      data-name-target="creditCard"
    >
      <div>
        <h3 className="subtitle pb-8 leading-[4.375rem]">Find a better card deal in few easy steps.</h3>
        <p className="paragraph pb-8">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet
          ultrices ac, ametau.
        </p>
        <Button title="Get Started" />
      </div>
      <div>
        <img src={card} alt="image of billing" className=" w-full" />
      </div>
    </section>
  );
};

export default CreditCard;
