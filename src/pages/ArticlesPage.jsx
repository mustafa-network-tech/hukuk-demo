import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { articles, DEFAULT_ARTICLE_IMAGE } from '@/data/articles.js';

function ArticlesPage() {
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
        <title>Makaleler | Adalet Hukuk Demosu</title>
        <meta
          name="description"
          content="Hukuk alanında güncel makaleler, analiz ve yorumlar. Ceza, ticaret, aile ve idari hukuk konularında bilgilendirici içerikler."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-primary/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1
                className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6"
                style={{ letterSpacing: '-0.02em' }}
              >
                Makaleler
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                Örnek makale içerikleri. Bilgilendirme amaçlıdır ve hukuki tavsiye yerine geçmez.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Articles List */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden">
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="aspect-video w-full overflow-hidden bg-muted">
                        <img
                          src={article.image || DEFAULT_ARTICLE_IMAGE}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold text-foreground mb-3 leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
                        {article.summary}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(article.date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                        </div>
                      </div>
                      <div className="mt-auto">
                        <Link to={`/makaleler/${article.id}`}>
                          <Button
                            variant="outline"
                            className="w-full transition-all duration-200 active:scale-[0.98]"
                          >
                            Devamını Oku
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default ArticlesPage;