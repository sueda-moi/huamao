// components/Footer.tsx
import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
import './Footer.css';
import { useMessage } from '../lib/useMessage';

type FooterLink = {
  href: string;
  label: string;
};

type LinkGroup = {
  title: string;
  links: FooterLink[];
  basePath: string;
};

const Footer = () => {
  const getMessage = useMessage();

  return (
    <footer className="footer-container">


      {/* Bottom: Address and Copyright */}
      <div className="footer-bottom">
        <p className="footer-address">
           {getMessage('common', 'footer_address')}
        </p>
        <p className="footer-copyright">
           {getMessage('common', 'footer_copyright')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;