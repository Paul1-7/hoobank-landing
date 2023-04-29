import { apple, bill, google } from '~/assets/imgs';

const Billing = () => {
  return (
    <section className={'flex relative flex-col-reverse sm:flex-row sm:gap-24  pb-[7rem] flex-grow items-center'}>
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
      <div className="w-[30rem] h-[37.5rem] absolute -left-[31.25rem] ss:-left-[35rem] white__gradient"></div>
      <div className="w-96 h-[37.5rem] absolute -left-[31.25rem] ss:-left-[35rem] blue__gradient"></div>
      <div className="w-80 h-[37.5rem] absolute -left-[31.25rem] ss:-left-[35rem] pink__gradient"></div>
    </section>
  );
};

export default Billing;
