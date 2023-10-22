import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NewsLetter from '../pages/NewsLetter';
import { ROUTES } from './routes';
import AboutUs from '../pages/AboutUs';
import AboutUzbekistan from '../pages/AboutUzbekistan';
import Food from '../pages/Food';
import Tashkent from '../pages/Tashkent';
import Samarkand from '../pages/Samarkand';
import Bukhara from '../pages/Bukhara';
import Khiva from '../pages/Khiva';
import NotFound from '../pages/Errors/404';
import Thanks from '../pages/Extras/Thanks';
import ContactUs from '../pages/ContactUs';

function RouteList() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path={ROUTES.ABOUT_US} element={<AboutUs />} />
        <Route path={ROUTES.CONTACT_US} element={<ContactUs />} />
        <Route path={ROUTES.ABOUT_UZBEKISTAN} element={<AboutUzbekistan />} />
        <Route path={ROUTES.FOOD} element={<Food />} />
        <Route path={ROUTES.TASHKENT} element={<Tashkent />} />
        <Route path={ROUTES.SAMARKAND} element={<Samarkand />} />
        <Route path={ROUTES.BUKHARA} element={<Bukhara />} />
        <Route path={ROUTES.KHIVA} element={<Khiva />} />
        <Route path={ROUTES.NEWS_LETTERS} element={<NewsLetter />} />
        <Route path={ROUTES.THANKS} element={<Thanks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default RouteList;
