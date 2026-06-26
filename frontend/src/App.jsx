import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import FixturesPage from './pages/FixturesPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import PlayerProfile from './pages/PlayerProfile';
import CoachProfile from './pages/CoachProfile';
import SquadPage from './pages/SquadPage';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="teams" element={<SquadPage />} />
          <Route path="teams/:category" element={<PlayerProfile />} />
          <Route path="coaching-staff" element={<CoachProfile />} />
          <Route path="programs" element={<ProgramsPage />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="fixtures" element={<FixturesPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
