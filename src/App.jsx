import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop.jsx';
import HomePage from '@/pages/HomePage.jsx';
import AboutPage from '@/pages/AboutPage.jsx';
import LawyersPage from '@/pages/LawyersPage.jsx';
import ArticlesPage from '@/pages/ArticlesPage.jsx';
import ArticleDetailPage from '@/pages/ArticleDetailPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hakkimizda" element={<AboutPage />} />
        <Route path="/avukatlar" element={<LawyersPage />} />
        <Route path="/makaleler" element={<ArticlesPage />} />
        <Route path="/makaleler/:id" element={<ArticleDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Sayfa bulunamadı
        </h2>
        <p className="text-muted-foreground mb-8">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
        >
          Ana Sayfaya Dön
        </a>
      </div>
    </div>
  );
}

export default App;