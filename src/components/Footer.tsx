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

  const sitemap: LinkGroup[] = [

    {
      title: getMessage('common', 'footer_sitemap_about'),
      basePath: '/Pg400',
      links: [
        { href: '/Pg400#ceo-message', label: getMessage('common', 'nav_about_1') },
        { href: '/Pg400#profile', label: getMessage('common', 'nav_about_2') },
        { href: '/Pg400#history', label: getMessage('common', 'nav_about_3') },
        { href: '/Pg400#access', label: getMessage('common', 'nav_about_4') },
      ],
    },
  ];

  const standaloneLinks: FooterLink[] = [
    { href: '/Pg300', label: getMessage('common', 'footer_sitemap_articles') },
    { href: '/Pg500', label: getMessage('common', 'nav_careers') },
    { href: '/Pg600', label: getMessage('common', 'nav_contact') },
  ];

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