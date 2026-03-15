import React from 'react';
import { Helmet } from 'react-helmet';
import { MessageCircle, Scale, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function HomePage() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/905551234567', '_blank');
  };

  const features = [
    {
      icon: Scale,
      title: 'Profesyonel Hizmet',
      description: 'Alanında uzman avukatlarımızla her türlü hukuki konuda profesyonel destek sunuyoruz.'
    },
    {
      icon: Users,
      title: 'Deneyimli Avukatlar',
      description: 'Yılların deneyimine sahip avukat kadromuz ile güvenilir hukuki çözümler üretiyoruz.'
    },
    {
      icon: Award,
      title: 'Müşteri Odaklı',
      description: 'Müvekkillerimizin menfaatlerini en üst düzeyde korumak için özverili çalışıyoruz.'
    }
  ];

  const ThirdFeatureIcon = features[2].icon;

  return (
    <>
      <Helmet>
        <title>Adalet Hukuk Bürosu - Profesyonel Hukuki Danışmanlık</title>
        <meta
          name="description"
          content="Ankara merkezli Adalet Hukuk Bürosu olarak ceza, ticaret, aile ve idari hukuk alanlarında profesyonel hukuki danışmanlık ve temsil hizmetleri sunuyoruz."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop"
              alt="Hukuk bürosu profesyonel ortam"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                style={{ letterSpacing: '-0.02em' }}
              >
                Adalet Hukuk Bürosu
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Profesyonel hukuki danışmanlık ve temsil hizmetleri ile yanınızdayız
              </p>
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg px-8 py-6 transition-all duration-200 active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Hemen İletişime Geçin
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Neden bizi tercih etmelisiniz?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Müvekkillerimize en iyi hukuki hizmeti sunmak için çalışıyoruz
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* First two features */}
              {features.slice(0, 2).map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-foreground mb-3">
                              {feature.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}

              {/* Third feature - full width */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:col-span-2"
              >
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <ThirdFeatureIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {features[2].title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {features[2].description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Hukuki desteğe mi ihtiyacınız var?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Deneyimli avukat kadromuz ile hemen iletişime geçin
              </p>
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg px-8 py-6 transition-all duration-200 active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp ile Ulaşın
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;