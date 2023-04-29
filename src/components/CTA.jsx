import Button from './Button';

const CTA = () => {
  return (
    <section className="bg-g sm:flex bg-black-gradient-2 rounded-lg p-10 md:p-16">
      <div className="flex flex-col gap-4 flex-[70%] text-white">
        <h2 className="text-5xl text-center sm:text-left font-semibold leading-[4rem]">Let’s try our service now!</h2>
        <p className="paragraph text-center sm:text-left pb-8 sm:w-[60%]">
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>
      <div className="flex-[30%] flex justify-center items-center">
        <Button title="Get Started" />
      </div>
    </section>
  );
};

export default CTA;
