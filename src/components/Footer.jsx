import React from 'react';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { mkWhatsAppUrl } from '@/lib/mk-demo.js';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Büro Bilgileri */}
          <div>
            <span className="text-2xl font-bold">Adalet Hukuk Bürosu</span>
            <p className="mt-4 text-sm text-primary-foreground/80 leading-relaxed">
              Profesyonel hukuki danışmanlık ve temsil hizmetleri ile yanınızdayız.
            </p>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <span className="text-lg font-semibold">İletişim</span>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  Örnek adres · Ankara
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">+90 (000) 000 00 00 · örnek</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">info@adalet-hukuk.example</span>
              </div>
              <a
                href={mkWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <MessageCircle className="w-5 h-5 flex-shrink-0" />
                <span>İşletmeniz için benzer bir site: MK Digital Systems ile görüşün</span>
              </a>
            </div>
          </div>

          {/* Çalışma Saatleri */}
          <div>
            <span className="text-lg font-semibold">Çalışma Saatleri</span>
            <div className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              <p>Pazartesi - Cuma: 09:00 - 18:00</p>
              <p>Cumartesi: 10:00 - 14:00</p>
              <p>Pazar: Kapalı</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            <p className="text-sm text-primary-foreground/80 order-2 md:order-1">
              © {currentYear} Adalet Hukuk Bürosu. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-4 md:gap-6 text-sm order-1 md:order-2">
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
              >
                Gizlilik Politikası
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
              >
                Kullanım Koşulları
              </a>
            </div>
          </div>
          <p className="mt-4 pt-4 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/70">
            Bu site gösterim amacıyla hazırlanmış bir demodur. Kişiler, adres ve iletişim bilgileri örnektir. — MK Digital Systems
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;