import CardStats from './CardStats';

const Stats = () => {
  return (
    <section
      className="flex justify-between gap-2 flex-wrap items-center pb-[7rem] scroll-trigger hidden-element"
      data-name-target="stats"
    >
      <CardStats title="3800+" content="users actives" />
      <div className="text-white hidden sm:block">|</div>
      <CardStats title="230+" content="trusted by company" />
      <div className="text-white hidden md:block">|</div>
      <CardStats title="$230M+" content="transactions" className="ss:mx-auto lg:mx-0" />
    </section>
  );
};

export default Stats;
