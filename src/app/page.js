import NavAndFooter from '@/components/Common/Layouts/NavAndFooter';
import HomePage from '@/components/HomePage/HomePage';

export default function Home() {
  return (
    <main>
      {/* Navbar and Footer with main container */}
      <NavAndFooter>
        <HomePage />
      </NavAndFooter>
    </main>
  );
}
