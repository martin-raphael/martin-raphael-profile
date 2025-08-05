import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              MR
            </div>
            <span className="text-xl font-semibold text-gray-900">Martin Raphael</span>
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;