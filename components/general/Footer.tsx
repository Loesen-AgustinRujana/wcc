import { NextComponentType } from 'next';

const Footer: NextComponentType = () => {
  return (
    <div className='w-full flex justify-center h-12 font-medium items-center'>
      <span>© 2021 WagenTekk.</span>
    </div>
  );
};

export default Footer;
