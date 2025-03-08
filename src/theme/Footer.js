import React from 'react';
import Footer from '@theme-original/Footer';
import FooterBanner from '../components/FooterBanner';

export default function FooterWrapper(props) {
  return (
    <>
      <Footer {...props} />
      <FooterBanner />
    </>
  );
}