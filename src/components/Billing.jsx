import { apple, bill, google } from '~/assets/imgs';

const Billing = () => {
  return (
    <section
      className={
        'flex relative flex-col-reverse sm:flex-row sm:gap-24  pb-[7rem] flex-grow items-center scroll-trigger hidden-element'
      }
      data-name-target="billing"
    >
      <div>
        <img src={bill} alt="image of billing" className=" w-full" />
      </div>
      <div>
        <h3 className="subtitle pb-8 leading-[4.375rem]">Easily control your billing & invoicing.</h3>
        <p className="paragraph pb-8">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus
          aliporttitor integer platea placerat.
        </p>
        <div className="flex justify-evenly">
          <img src={apple} alt="logo of the apple" />
          <img src={google} alt="logo of the play store" />
        </div>
      </div>
    </section>
  );
};

export default Billing;
