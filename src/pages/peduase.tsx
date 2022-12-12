import * as React from 'react';

import CardAddress from '@/components/card-address/CardAddress';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import Layout from '@/components/layout/Layout';
import PageShape from '@/components/page-shape/PageShape';
import Seo from '@/components/Seo';

export default function PeduasePage() {
  return (
    <Layout>
      <Seo templateTitle='Peduase' />

      <main>
        <div className='peduase-page'>
          <PageShape />
          <HeroSectionSM
            image='/images/header-bg/peduase-bg.png'
            name='Peduase'
            desc='Event guide'
          />
          <div className='lg:p-4'>
            <CardAddress
              title='Presidential & Business Executives’ Dialogues'
              date='28 january'
              desc='A high-level roundtable discussion on the ‘Kwahu Compact’ by African Heads of State, Business Leaders, and other notable personalities.'
              image='/images/avatar.png'
              name='Nana Addo Danquah Akufo-Addo'
              degi='President of the Republic of Ghana'
              location='Peduase, Aburi Mountains, Eastern Ghana'
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
