import {
  Billing,
  Business,
  CTA,
  Clients,
  CreditCard,
  Feedback,
  Footer,
  Hero,
  LightBgBall,
  Navbar,
  Stats,
} from './components';
import { animationsScroll } from './constants';
import { useIntersectionObserver } from './hooks/useIntesectionObserver';

function App() {
  useIntersectionObserver({
    animations: animationsScroll,
    query: '.scroll-trigger',
    options: {
      rootMargin: '24px',
    },
  });

  return (
    <>
      <div className="container mx-auto p-4  overflow-hidden">
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
      <LightBgBall />
    </>
  );
}

export default App;
