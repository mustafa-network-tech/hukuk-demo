import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { lawyers } from '@/data/lawyers.js';

function LawyersPage() {
  return (
    <>
      <Helmet>
        <title>Avukatlarımız - Adalet Hukuk Bürosu</title>
        <meta
          name="description"
          content="Adalet Hukuk Bürosu'nun deneyimli avukat kadrosu. Ceza, ticaret, aile ve idari hukuk alanlarında uzman avukatlarımızla tanışın."
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
                Avukatlarımız
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                Alanında uzman, deneyimli avukat kadromuzla tanışın
              </p>
            </motion.div>
          </div>
        </section>

        {/* Lawyers Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {lawyers.map((lawyer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-0">
                      <div className="aspect-square overflow-hidden rounded-t-xl">
                        <img
                          src={lawyer.image}
                          alt={`${lawyer.name} - ${lawyer.expertise.join(', ')} uzmanı`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {lawyer.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {lawyer.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {lawyer.expertise.map((area, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="text-xs"
                            >
                              {area}
                            </Badge>
                          ))}
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

export default LawyersPage;