import { discount } from '~/assets/imgs';
import GetStarted from './GetStarted';

const Hero = () => {
  return (
    <main className="relative sm:pt-[9.375rem]">
      <p className="bg-discount-gradient text-dimWhite rounded-[.625rem] sm:text-lg font-normal p-[2px] inline-block pr-2 ">
        <img src={discount} alt="icon of discount" className="h-full inline-block ml-1" />
        <span>
          <span className="text-white">20% </span>
          DISCOUNT FOR <span className="text-white">1 MONTH</span> ACCOUNT
        </span>
      </p>
      <h1 className="relative font-poppins font-semibold text-5xl leading-[60px]  sm:text-[72px] sm:mb-[30px] sm:leading-[6.3rem] text-white sm:w-[55%]">
        The Next <br />
        <span className="text-gradient">Generation</span> <br />
        Payment Method.
        <GetStarted className={'sm:mt-6'} />
      </h1>
      <section>
        <img src="" alt="" />
      </section>
      <h2 className="paragraph sm:max-w-[480px] ">
        Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine
        annual percentage rates, annual fees.
      </h2>
      <div className="absolute w-[195px] h-[325px] blur-[225px] bg-white top-0 -left-[195px]"></div>
    </main>
  );
};

export default Hero;
