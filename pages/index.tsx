import React from 'react';
import { Layout, Footer } from '../src/components';
import { Hero, About } from '../src/containers';
import i18n from '../i18n';

function Home({ t }) {
  return (
    <>
      <Layout>
        <Hero t={t} />
        <About t={t} />
      </Layout>
      <Footer t={t} />
    </>
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common', 'home'],
});
export default i18n.withTranslation('home')(Home);
