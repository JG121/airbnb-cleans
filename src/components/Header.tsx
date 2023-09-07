import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-white py-4">
      <div className="container mx-auto px-4"> {/* Adjusted margin with px-4 */}
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
