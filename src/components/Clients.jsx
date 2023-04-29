import { clients } from '~/constants';

const Clients = () => {
  return (
    <section className="grid-clients pb-[7rem]">
      {clients.map(({ id, logo }) => (
        <img src={logo} alt="logo of company" key={id} />
      ))}
    </section>
  );
};

export default Clients;
