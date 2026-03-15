import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { articles, DEFAULT_ARTICLE_IMAGE } from '@/data/articles.js';

function ArticleDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const articleIndex = articles.findIndex((a) => a.id === parseInt(id));
  const article = articleIndex >= 0 ? articles[articleIndex] : null;
  const prevArticle = articleIndex > 0 ? articles[articleIndex - 1] : null;
  const nextArticle = articleIndex >= 0 && articleIndex < articles.length - 1 ? articles[articleIndex + 1] : null;

  if (!article) {
    return (
      <>
        <Helmet>
          <title>Makale Bulunamadı - Adalet Hukuk Bürosu</title>
        </Helmet>
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-grow flex items-center justify-center py-20">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground mb-4">
                Makale bulunamadı
              </h1>
              <p className="text-muted-foreground mb-6">
                Aradığınız makale mevcut değil veya kaldırılmış olabilir.
              </p>
              <Link to="/makaleler">
                <Button>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Makalelere Dön
                </Button>
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Helmet>
        <title>{`${article.title} - Adalet Hukuk Bürosu`}</title>
        <meta name="description" content={article.summary} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Article Content */}
        <article className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Back Button */}
              <Button
                variant="ghost"
                onClick={() => navigate('/makaleler')}
                className="mb-8 transition-all duration-200 active:scale-[0.98]"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Makalelere Dön
              </Button>

              <Card className="shadow-xl overflow-hidden">
                <div className="aspect-video w-full bg-muted">
                  <img
                    src={article.image || DEFAULT_ARTICLE_IMAGE}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 md:p-12">
                  {/* Article Header */}
                  <h1
                    className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {article.title}
                  </h1>

                  {/* Article Meta */}
                  <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(article.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="prose prose-lg max-w-none">
                    {article.content.split('\n\n').map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-foreground leading-relaxed mb-6"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Related Articles Navigation */}
              <div className="mt-12 flex justify-between items-center">
                {prevArticle ? (
                  <Link to={`/makaleler/${prevArticle.id}`}>
                    <Button
                      variant="outline"
                      className="transition-all duration-200 active:scale-[0.98]"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Önceki Makale
                    </Button>
                  </Link>
                ) : <span />}
                {nextArticle ? (
                  <Link to={`/makaleler/${nextArticle.id}`} className="ml-auto">
                    <Button
                      variant="outline"
                      className="transition-all duration-200 active:scale-[0.98]"
                    >
                      Sonraki Makale
                      <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                    </Button>
                  </Link>
                ) : <span />}
              </div>
            </motion.div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}

export default ArticleDetailPage;