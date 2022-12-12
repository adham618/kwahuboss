/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { IoCloseSharp, IoMenuOutline } from 'react-icons/io5';
const Header = () => {
  const [show, setShow] = React.useState(false);
  const links = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About',
      href: '/about-summit',
      subLinks: [
        {
          name: 'About the Summit',
          href: '/about-summit',
        },
        {
          name: 'The host',
          href: '/the-host',
        },
        {
          name: 'Media partners',
          href: '/media-partners',
        },
        {
          name: 'Sponsors',
          href: '/sponsors',
        },
        {
          name: 'Planning committee',
          href: '/planning-committee',
        },
      ],
    },
    {
      name: 'Who is attending',
      href: '/captains-of-industry',
      subLinks: [
        {
          name: 'Invited Heads of State',
          href: '/invited-heads-of-state',
        },
        {
          name: 'Invited Personalities',
          href: '/invited-personalities',
        },
      ],
    },
    {
      name: 'Gallery',
      href: '/gallery',
    },
    {
      name: 'Resources',
      href: '/news',
      subLinks: [
        {
          name: 'News',
          href: '/news',
        },
        {
          name: 'The AfCFTA',
          href: '/the-afcfta',
        },
        {
          name: 'The AU Agenda 2063',
          href: '/agenda',
        },
      ],
    },
    {
      name: 'Event guide',
      href: '/peduase',
      subLinks: [
        {
          name: 'Peduase',
          href: '/peduase',
        },
        {
          name: 'Accra',
          href: '/Accra',
        },
        {
          name: 'Protocols',
          href: '/protocols',
        },
      ],
    },
    {
      name: 'Help',
      href: '/help',
    },
  ];
  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      icon: '/images/socials/facebook.svg',
    },
    {
      name: 'Twitter',
      href: '#',
      icon: '/images/socials/twitter.svg',
    },
    {
      name: 'Linkedin',
      href: '#',
      icon: '/images/socials/linkedin.svg',
    },
    {
      name: 'Instagram',
      href: '#',
      icon: '/images/socials/instagram.svg',
    },
  ];
  const languages = [
    {
      name: 'English',
      flag: '/images/flags/english.svg',
    },
    {
      name: 'Arabic',
      flag: '/images/flags/arabic.svg',
    },
    {
      name: 'French',
      flag: '/images/flags/french.svg',
    },
    {
      name: 'German',
      flag: '/images/flags/germany.svg',
    },
    {
      name: 'Portuguese',
      flag: '/images/flags/portuguese.svg',
    },
    {
      name: 'Spanish',
      flag: '/images/flags/spain.svg',
    },
  ];
  return (
    <div className='main-header tw-p-3 md:tw-px-8 md:tw-py-4'>
      <div className='md:container-fluid header-base'>
        <div className='header-bottom tw-items-center !tw-border-t-0 md:tw-border-t'>
          <div className='header-left'>
            <div className='logo !tw-w-[147.89px] md:!tw-w-[210px]'>
              <Link href='/'>
                <img src='/images/logo.png' alt='logo' />
              </Link>
            </div>
            <div className='register-button tw-hidden lg:tw-block'>
              <Link
                href='/registration'
                className='btn btn-outline-light !tw-flex'
              >
                Register
              </Link>
            </div>
          </div>
          <div className='header-right'>
            <nav className='navbar navbar-expand-lg tw-static'>
              <button
                onClick={() => setShow(true)}
                className='menu-button tw-flex tw-h-fit tw-items-center !tw-border-2 tw-border-solid !tw-border-white  tw-bg-[unset] tw-py-[3px] tw-px-1 tw-text-[25px] tw-text-white'
              >
                <IoMenuOutline />
              </button>
              <div
                className={`${show
                  ? 'tw-absolute tw-inset-0 !tw-flex tw-h-fit tw-min-h-screen tw-w-full tw-flex-col tw-items-start tw-bg-[#123150]'
                  : ''
                  } collapse navbar-collapse`}
              >
                {show && (
                  <div className='tw-mb-4 tw-w-full tw-p-3 md:tw-px-8 md:tw-py-4'>
                    <div className='tw-flex tw-justify-between tw-border-0 tw-border-b-2 tw-border-solid tw-border-white tw-pb-3 '>
                      <div className='logo !tw-w-[147.89px] md:!tw-w-[210px]'>
                        <Link href='/'>
                          <img
                            className='tw-max-w-full'
                            src='/images/logo.png'
                            alt='logo'
                          />
                        </Link>
                      </div>
                      <div className='tw-flex tw-items-center'>
                        <button
                          onClick={() => setShow(false)}
                          className='tw-flex tw-h-fit tw-items-center tw-border-2  tw-border-white tw-bg-[unset] tw-py-[3px] tw-px-1 tw-text-[25px] tw-text-white'
                        >
                          <IoCloseSharp />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                <ul className={`${show ? 'tw-flex-grow' : ''} navbar-nav`}>
                  {links.map((link) => (
                    <li className='nav-item dropdown' key={link.name}>
                      {link.subLinks ? (
                        <a
                          className='nav-link dropdown-toggle'
                          role='button'
                          data-bs-toggle='dropdown'
                          aria-expanded='false'
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className='nav-link active'
                          aria-current='page'
                        >
                          {link.name}
                        </Link>
                      )}
                      {link.subLinks && (
                        <ul className='dropdown-menu'>
                          {link.subLinks.map((subLink) => (
                            <li key={subLink.name}>
                              <Link
                                className='dropdown-item'
                                href={subLink.href}
                              >
                                {subLink.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
                {show && (
                  <>
                    <div className='tw-w-full tw-p-3 md:tw-px-8 md:tw-py-4'>
                      <Link
                        href='/registration'
                        className='tw-mt-3 tw-inline-block tw-border-2 tw-border-solid tw-border-white tw-py-1 tw-px-6 tw-text-base tw-font-semibold tw-text-white'
                      >
                        Register
                      </Link>
                    </div>
                    <div className='tw-w-full tw-p-3 md:tw-px-8 md:tw-py-4'>
                      <div className='pt-3 tw-flex tw-justify-between tw-border-0 tw-border-t-2 tw-border-solid tw-border-white'>
                        <div className='language-dropdown dropdown'>
                          <button
                            className='btn text-white btn-flat dropdown-toggle'
                            type='button'
                            data-bs-toggle='dropdown'
                            aria-expanded='false'
                          >
                            <span className='flag-icon tw-flex'>
                              <img src='/images/flags/english.svg' alt='eng' />
                            </span>
                            <span className='language-name tw-font-bold'>
                              English
                            </span>
                          </button>
                          <ul
                            className={`${show ? 'tw-bottom-[50px] !tw-bg-white' : ''
                              } dropdown-menu`}
                          >
                            {languages.map((language) => (
                              <li key={language.name}>
                                <button className='dropdown-item'>
                                  <span className='flag-icon'>
                                    <img
                                      src={language.flag}
                                      alt={language.name}
                                    />
                                  </span>
                                  <span className='language-name tw-text-black'>
                                    {language.name}
                                  </span>
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className='social-profiles tw-space-x-6'>
                          {socialLinks.map((socialLink, index) => (
                            <Link key={index} href={socialLink.href}>
                              <img
                                className='tw-h-4 tw-w-4'
                                src={socialLink.icon}
                                alt={socialLink.name}
                              />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </nav>
          </div>
        </div>
        <div className='header-top !tw-hidden'>
          <div className='header-date'>
            <p>January 26th - 28th 2023</p>
          </div>
          <div className='header-top-right d-flex align-items-center'>
            <div className='language-dropdown dropdown'>
              <button
                className='btn text-white btn-flat dropdown-toggle'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <span className='flag-icon tw-flex'>
                  <img src='/images/flags/english.svg' alt='eng' />
                </span>
                <span className='language-name tw-font-bold'>English</span>
              </button>
              <ul className='dropdown-menu'>
                {languages.map((language) => (
                  <li key={language.name}>
                    <button className='dropdown-item'>
                      <span className='flag-icon'>
                        <img src={language.flag} alt={language.name} />
                      </span>
                      <span className='language-name'>{language.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className='social-profiles'>
              {socialLinks.map((socialLink, index) => (
                <Link key={index} href={socialLink.href}>
                  <img src={socialLink.icon} alt={socialLink.name} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
