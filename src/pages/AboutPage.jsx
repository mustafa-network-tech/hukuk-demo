import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Hakkımızda | Adalet Hukuk Demosu</title>
        <meta
          name="description"
          content="Adalet Hukuk Bürosu olarak misyonumuz, vizyonumuz ve değerlerimiz hakkında bilgi edinin. Profesyonel hukuki hizmet anlayışımızı keşfedin."
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
                Hakkımızda
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                Adalet ve hukuk ilkelerine bağlı, müvekkil odaklı hizmet anlayışı
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                        Büro hakkında
                      </h2>
                    </div>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed max-w-prose">
                    <p>
                      Adalet Hukuk Bürosu; ceza hukuku, ticaret hukuku,
                      aile hukuku ve idari hukuk alanlarında uzmanlaşmış bir hukuk bürosudur. Kuruluşumuzdan bu 
                      yana müvekkillerimize en yüksek kalitede hukuki hizmet sunmayı ilke edindik.
                    </p>
                    <p>
                      Deneyimli ve alanında uzman avukat kadromuz ile müvekkillerimizin haklarını en iyi şekilde 
                      korumak ve hukuki süreçlerde yanlarında olmak için çalışıyoruz. Her davaya özel yaklaşım 
                      sergileyerek, müvekkillerimizin ihtiyaçlarına en uygun çözümleri üretiyoruz.
                    </p>
                    <p>
                      Hukuki danışmanlık hizmetlerimizde şeffaflık, güvenilirlik ve profesyonellik temel 
                      değerlerimizdir. Müvekkillerimizle kurduğumuz güven ilişkisi, başarılı sonuçların 
                      temelidir.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Target className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-semibold text-foreground">Misyonumuz</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Müvekkillerimize en yüksek kalitede hukuki hizmet sunarak, haklarını korumak ve 
                      adaletin tecellisine katkıda bulunmak. Etik değerlere bağlı kalarak, profesyonel 
                      ve güvenilir bir hukuk bürosu olmak. Her müvekkilimize özel ilgi göstererek, 
                      ihtiyaçlarına en uygun çözümleri üretmek ve hukuki süreçlerde yanlarında olmak.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Eye className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-semibold text-foreground">Vizyonumuz</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Türkiye'nin önde gelen hukuk bürolarından biri olmak ve hukuki hizmetlerde 
                      mükemmelliği temsil etmek. Sürekli gelişim ve yenilikçi yaklaşımlarla, 
                      müvekkillerimize en iyi hukuki çözümleri sunmak. Adalet ve hukuk ilkelerine 
                      bağlı kalarak, toplumda güvenilir ve saygın bir kurum olarak varlığımızı 
                      sürdürmek.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default AboutPage;