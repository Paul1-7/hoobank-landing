import { arrowUp } from '~/assets/imgs';

const GetStarted = ({ className = '' }) => {
  return (
    <div
      className={
        'absolute w-[140px] h-[140px] rounded-full border-secondary border text-base flex justify-center items-center  right-0 top-0 p-41 flex-col ' +
        className
      }
    >
      <div className="flex gap-1">
        Get <img src={arrowUp} alt="icon of arrow up" />
      </div>
      Started
    </div>
  );
};

export default GetStarted;
