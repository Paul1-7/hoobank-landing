import { Billing, Business, CTA, Clients, CreditCard, Feedback, Footer, Hero, Navbar, Stats } from './components';

function App() {
  return (
    <div className="container mx-auto p-4 ">
      <div className=" w-full ">
        <Navbar />
        <Hero />
        <Stats />
        <Business />
        <Billing />
        <CreditCard />
        <Feedback />
        <Clients />
        <CTA />
      </div>
      <Footer />
    </div>
  );
}

export default App;
