import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center">
      <Link href="/">
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold cursor-pointer">AirBnb Cleans</div>
      </Link>
      <div className="mt-4 md:mt-0 flex space-x-4 md:space-x-6 lg:space-x-8">
        <Link href="/">
          <div className="cursor-pointer hover:scale-110 hover:underline">Home</div>
        </Link>
        <Link href="/services">
          <div className="cursor-pointer hover:scale-110 hover:underline">Services</div>
        </Link>
        <Link href="/about">
          <div className="cursor-pointer hover:scale-110 hover:underline">About Us</div>
        </Link>
        <Link href="/contact">
          <div className="cursor-pointer hover:scale-110 hover:underline">Contact</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
