import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from '../components/header/Header';
import { ReactPage } from '../pages/ReactPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const AppRoutes = (): JSX.Element => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/react" element={<ReactPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
};
