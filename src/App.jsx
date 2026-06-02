import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Homepage from './Homepage';
import AboutPage from './AboutPage';
import PlayerProfile from './PlayerProfile';
import CoachProfile from './CoachProfile';
import DonatePage from './DonatePage';
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
          <Route path="squad" element={<SquadPage />} />
          <Route path="players/:category" element={<PlayerProfile />} />
          <Route path="coach" element={<CoachProfile />} />
          <Route path="be-apart-us" element={<DonatePage />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
