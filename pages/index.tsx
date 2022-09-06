// REACT JS
import type { NextPage } from 'next';

// COMPONENTS
import { Companies } from '../styles/theme/components/Companies';
import { AboutInfo } from '../styles/theme/components/AboutInfo';
import { Process } from '../styles/theme/components/Process';
import { CtaBox } from '../styles/theme/components/CtaBox';
import { Content } from '../styles/theme/components/Content';
import { ValueProps } from '../styles/theme/components/ValueProps';
import { QuickStats } from '../styles/theme/components/QuickStats';
import { Testimonails } from '../styles/theme/components/Testimonails';
import { Blog } from '../styles/theme/components/Blog';
import { CTA } from '../styles/theme/components/CTA';
import { Footer } from '../styles/theme/components/Footer';
import { Header } from '../styles/theme/components/Header';
import { NavBar } from '../styles/theme/components/NavBar';

const Home: NextPage = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <Header />

        <Companies />

        <AboutInfo />

        <Process />

        <CtaBox />

        <Content />

        <ValueProps />

        <QuickStats />

        <Testimonails />

        <Blog />

        <CTA />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Home
