import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Homepage from './Homepage';
import AboutPage from './AboutPage';
import ProgramsPage from './ProgramsPage';
import FixturesPage from './FixturesPage';
import NewsPage from './NewsPage';
import ContactPage from './ContactPage';
import PlayerProfile from './PlayerProfile';
import CoachProfile from './CoachProfile';
import SquadPage from './SquadPage';
import Gallery from './Gallery';
import NotFound from './NotFound';

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
