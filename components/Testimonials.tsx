'use client';

import Script from 'next/script';

declare global {
  interface Window {
    // rome-ignore lint/suspicious/noExplicitAny: <explanation>
    JustReview: any;
  }
}

const initJustReviewTestimonials = () => {
  window?.JustReview.initTestimonials(process.env.NEXT_PUBLIC_TESTIMONIALS, {
    styles: {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      color: 'rgba(0, 0, 0, 1)',
      secondaryColor: 'rgba(154, 154, 154, 1)',
      arrowsColor: 'rgba(0, 0, 0, 1)',
      buttonColor: 'rgba(0, 0, 0, 1)',
      buttonFontColor: 'rgba(255, 255, 255, 1)',
      buttonFontSize: '16px',
      slideBorderRadius: '20px',
      buttonBorderRadius: '5px',
    },
    config: {
      displayHeader: true,
      displayJrLogo: false,
      displayDate: true,
      displayButton: false,
      buttonLink: 'https://',
      limit: 20,
      autoplay: true,
      infinity: true,
      arrows: true,
      visibleSlides: 3,
      displayTopRatingsFirst: true,
      sortByDate: false,
      filterByPageLang: true,
      hideEmpty: true,
      includeEng: false,
      htmlLangPage: '',
      displayReviewsUrl: true,
      displayVerificationStatus: false,
      displayCustomHeader: true,
      customHeader: '',
      useGrid: false,
      columns: 3,
      gridJustify: 'center',
      gap: 15,
      displaySlider: false,
      logo: {
        isVisible: true,
        setColors: false,
        logosColor: 'rgba(0, 0, 0, 1)',
      },
    },
    services: ['facebook', 'google', 'trustedshops'],
  });
};

const Testimonials = () => {
  return (
    <div className="testimonials">
      <section className="testimonials__container">
        <h2>Opinie klientów</h2>
        <div id="justreview-testimonials" />
        <Script
          src="https://justreview.co/widget/justreview.js"
          strategy="lazyOnload"
          onLoad={initJustReviewTestimonials}
        />
      </section>
    </div>
  );
};

export default Testimonials;
