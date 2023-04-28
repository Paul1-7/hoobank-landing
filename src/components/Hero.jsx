import { ballRobot, cardRobot1, cardRobot2, cardRobot3, discount, robotHand } from '~/assets/imgs';
import GetStarted from './GetStarted';

const Hero = () => {
  return (
    <main className=" sm:pt-[9.375rem] flex flex-col sm:block mb-[6rem]">
      <section>
        <p className="bg-discount-gradient text-dimWhite rounded-[.625rem] sm:text-lg font-normal p-[2px] inline-block pr-2 ">
          <img src={discount} alt="icon of discount" className="h-full inline-block ml-1" />
          <span>
            <span className="text-white">20% </span>
            DISCOUNT FOR <span className="text-white">1 MONTH</span> ACCOUNT
          </span>
        </p>
        <h1 className="relative font-poppins font-semibold text-5xl leading-[60px]  sm:text-[72px] sm:mb-[30px] sm:leading-[6.3rem] text-white sm:w-[57%]">
          The Next <br />
          <span className="text-gradient">Generation</span> <br />
          Payment Method.
          <GetStarted className={'sm:mt-6 sm:mr-6 hidden md:flex '} />
        </h1>
      </section>
      <h2 className="paragraph sm:max-w-[480px] ">
        Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine
        annual percentage rates, annual fees.
      </h2>
      <section className="relative sm:absolute top-0 right-0 flex flex-col w-[100%]  sm:w-[50%] h-[38rem] ">
        <div className="relative w-full">
          <img
            src={ballRobot}
            className="absolute left-[10%]  top-[4rem] w-18 sm:left-[12%] lg:left-[15%]"
            alt="image of robot ball"
          />
          <img
            src={ballRobot}
            className="absolute left-[70%]  top-[23rem] w-12 xs:top-[24rem] ss:top-[26rem]  sm:top-[27rem] lg:top-[29rem] xl:top-[30rem] "
            alt="image of robot ball"
          />
          <img
            src={ballRobot}
            className="absolute left-[18%]  top-[25rem] w-6  ss:top-[28rem] lg:top-[31rem]"
            alt="image of robot ball"
          />
          <img
            src={cardRobot1}
            className="absolute left-[20%]  top-[7rem] w-[70%] xs:w-[60%] sm:w-[70%] md:w-[60%]  "
            alt="image of card one"
          />
          <img
            src={cardRobot2}
            className="absolute left-[20%] top-[12rem] w-[70%] xs:w-[60%] sm:w-[70%] md:w-[60%]"
            alt="image of card two"
          />
          <img
            src={cardRobot3}
            className="absolute left-[20%] top-[17rem] w-[70%] xs:w-[60%] sm:w-[70%] md:w-[60%]"
            alt="image of card three"
          />
          <img
            src={robotHand}
            className=" absolute ss:top-[17rem] top-[19rem] xs:top-[18rem] sm:top-[22rem] md:top-[19rem] lg:top-[18rem] right-0 "
            alt="image of robot hand "
          />
        </div>
      </section>

      <div className="absolute w-[195px] h-[325px] blur-[225px] bg-white top-0 -left-[195px]"></div>
    </main>
  );
};

export default Hero;
