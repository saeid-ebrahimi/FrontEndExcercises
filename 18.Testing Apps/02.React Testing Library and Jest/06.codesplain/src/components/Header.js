import { Link } from 'react-router-dom';
import AuthButtons from './auth/AuthButtons';
import SearchBar from './search/SearchBar';

function Header() {
  return (
    <header aria-label="Site Header" className="bg-gray-100">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="text-xl font-extrabold text-teal-600" to="/">
          CodeSplain
        </Link>

        <div className="flex flex-1 items-center justify-end gap-6">
          <nav>
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <SearchBar />
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <AuthButtons />
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
