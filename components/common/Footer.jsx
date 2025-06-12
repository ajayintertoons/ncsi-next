import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export default function Footer() {
    const { t } = useTranslation('common');
    const { locale } = useRouter();

    const contactUsUrl = locale === 'ar' ? '/ar/contact-us' : '/contact-us';
    const surveyUrl = locale === 'ar' ? '/ar/survey-request' : '/survey-request';
    return (
        <div class="footer-and-copyright">
            <div class="footer-main">
                <div class="row home-footer color-white">
                    <div class="col-6 col-sm-4 col-md-3 col-lg-2 footer-col-1 wow fadeInLeft" data-wow-delay="0.4s" data-wow-duration="0.5s">
                        <div class="footer-main">
                            <span><a href="#">{t('Statistics')}</a></span><br />
                            <span><a href="#">{t('Infographic')}</a></span><br />
                            <span><a href="#">{t('Media Gallery')}</a></span><br />
                            <span><a href="#">{t('Polls')}</a></span><br />
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-md-3 col-lg-2 wow fadeInLeft" data-wow-delay="0.5s" data-wow-duration="0.5s">
                        <div class="footer-main">
                            <span><a href="#">{t('Classifications')}</a></span><br />
                            <span><a href="#">{t('Methodologies')}</a></span><br />
                            <span><a href="#">{t('News')}</a></span><br />
                            <span><a href="#">{t('Press Release')}</a></span><br />
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-md-3 col-lg-2 wow fadeInLeft" data-wow-delay="0.6s" data-wow-duration="0.5s">
                        <div class="footer-main">
                            <span><a href="#">{t('Service Directory')}</a></span><br />
                            <span><a href="#">{t('Glossary of Statistics')}</a></span><br />
                            <span><a href="#">{t('E-Survey')}</a></span><br />
                            <span><a href="#">{t('Mobile applications')}</a></span><br />
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-md-3 col-lg-2 wow fadeInLeft" data-wow-delay="0.7s" data-wow-duration="0.5s">
                        <div class="footer-main">
                            <span><a href="#">{t('Privacy policy')}</a></span><br />
                            <span><a href="#">{t('Terms of Use')}</a></span><br />
                            <span><a href="#">{t('Looking for information')}</a></span><br />
                            <span><a href={surveyUrl}>{t('Request permission for surveys')}</a></span><br />
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-md-3 col-lg-2 wow fadeInLeft" data-wow-delay="0.8s" data-wow-duration="0.5s">
                        <div class="footer-main">
                            <span><a href="#">{t('Site Map')}</a></span><br />
                            <span><a href="#">{t('Who are we')}</a></span><br />
                            <span><a href="#">{t('First visit')}</a></span><br />
                            <span><a href="#">{t('FAQs')}</a></span><br />
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-md-3 col-lg-2 wow fadeInLeft" data-wow-delay="0.9s" data-wow-duration="0.5s">
                        <div class="footer-main">
                            <span><a href={contactUsUrl}>{t('Contact Us')}</a></span><br />
                            <span><a href="#">{t('Tajawob')}</a></span><br />
                            <span><a href="#">{t('Important Links')}</a></span><br />
                            <span><a href="#" target="_blank">{t('Careers')}</a></span>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="row home-copyright text-center">
                <div class="col text-bold">
                    {t('footer_copyright')}
                </div>
            </div>
        </div>
  );
}
