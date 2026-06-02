import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PlayerProfilePage from './pages/PlayerProfilePage';
import CoachingStaffPage from './pages/CoachingStaffPage';
import DonationPage from './pages/DonationPage';
import TeamPage from './pages/TeamPage';
import GalleryPage from './pages/GalleryPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="squad" element={<TeamPage />} />
          <Route path="players/:category" element={<PlayerProfilePage />} />
          <Route path="coach" element={<CoachingStaffPage />} />
          <Route path="be-apart-us" element={<DonationPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
