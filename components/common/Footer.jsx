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
                            <span><a href="#">{t('statistics')}</a></span><br />
                            <span><a href="#">{t('infographic')}</a></span><br />
                            <span><a href="#">{t('media_gallery')}</a></span><br />
                            <span><a href="#">{t('polls')}</a></span><br />
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-md-3 col-lg-2 wow fadeInLeft" data-wow-delay="0.5s" data-wow-duration="0.5s">
                        <div class="footer-main">
                            <span><a href="#">{t('classifications')}</a></span><br />
                            <span><a href="#">{t('methodologies')}</a></span><br />
                            <span><a href="#">{t('news')}</a></span><br />
                            <span><a href="#">{t('press_release')}</a></span><br />
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-md-3 col-lg-2 wow fadeInLeft" data-wow-delay="0.6s" data-wow-duration="0.5s">
                        <div class="footer-main">
                            <span><a href="#">{t('service_directory')}</a></span><br />
                            <span><a href="#">{t('glossary_of_statistics')}</a></span><br />
                            <span><a href="#">{t('e_survey')}</a></span><br />
                            <span><a href="#">{t('mobile_applications')}</a></span><br />
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-md-3 col-lg-2 wow fadeInLeft" data-wow-delay="0.7s" data-wow-duration="0.5s">
                        <div class="footer-main">
                            <span><a href="#">{t('privacy_policy')}</a></span><br />
                            <span><a href="#">{t('terms_of_use')}</a></span><br />
                            <span><a href="#">{t('looking_for_information')}</a></span><br />
                            <span><a href={surveyUrl}>{t('request_permission_for_surveys')}</a></span><br />
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-md-3 col-lg-2 wow fadeInLeft" data-wow-delay="0.8s" data-wow-duration="0.5s">
                        <div class="footer-main">
                            <span><a href="#">{t('site_map')}</a></span><br />
                            <span><a href="#">{t('who_are_we')}</a></span><br />
                            <span><a href="#">{t('first_visit')}</a></span><br />
                            <span><a href="#">{t('faqs')}</a></span><br />
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-md-3 col-lg-2 wow fadeInLeft" data-wow-delay="0.9s" data-wow-duration="0.5s">
                        <div class="footer-main">
                            <span><a href={contactUsUrl}>{t('contact_us')}</a></span><br />
                            <span><a href="#">{t('tajawob')}</a></span><br />
                            <span><a href="#">{t('important_links')}</a></span><br />
                            <span><a href="#" target="_blank">{t('careers')}</a></span>
                            
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
