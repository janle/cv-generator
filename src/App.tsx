import React from 'react';
import './styles/A4.scss';
import './styles/global.scss';
import Header from './components/header/Header';
import CV from './data/cv.json';
import Section from './components/section/Section';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="page">
          <Header {...CV.header} />
          <Section title={"Profil"}>
            <p>{CV.profil}</p>
          </Section>
          <Section title={"Erfaring"} sectionItems={CV.erfaring} />
          <Section title={"Utdanning"} sectionItems={CV.utdanning} />
          <Section title={"Sertifiseringer"} sectionItems={CV.sertifiseringer} />
          <Footer skills={CV.ferdigheter} properties={CV.egenskaper} referances={CV.referanser} />
      </div>
    </div>
  );
}

export default App;
