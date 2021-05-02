import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import ColorNav from '../components/navbars/ColorNav';
import Header from '../components/headers/HeaderMain';
import CardSection from '../components/Sections/Presentation/PresentationCards';
import ContentSection from '../components/Sections/Presentation/PresentationContent';


export default function Home() {
  return (
    <div >
      {/* className={styles.container} */}
      <Head>
        <title>Jess Garage Doors | Home</title>
        <meta name="Get garage doors in columbus ohio" content="Get a quote" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="Page-container">
        <ColorNav />
        <Header />
        <CardSection />
        <ContentSection />
      </div>
    </div>
  )
}
