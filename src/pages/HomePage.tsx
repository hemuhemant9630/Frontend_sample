
import './HomePage.css';
import asset1 from './assets/asset 1.png';
import asset2 from './assets/asset 2.png';
import asset3 from './assets/asset 3.png';
import asset4 from './assets/asset 4.png';
import asset5 from './assets/asset 5.png';
import asset6 from './assets/asset 6.png';
import asset7 from './assets/asset 7.png';
import asset8 from './assets/asset 8.png';
import asset9 from './assets/asset 9.png';
import asset11 from './assets/asset 11.svg';
import asset12 from './assets/asset 12.svg';
import asset13 from './assets/asset 13.svg';
import asset14 from './assets/asset 14.svg';
import asset15 from './assets/asset 15.svg';
import asset16 from './assets/asset 16.svg';
import asset18 from './assets/asset 18.png';
import asset21 from './assets/asset 21.png';
import asset24 from './assets/asset 24.png';

const HomePage = () => {
  return (
    <div>
    

      {/* nav bar */}
      <nav>
        <div className="container main-nav flex">
          <a href="#" className="company-logo">
            <img src={asset1} alt="company logo"/>
          </a>
          <div className="nav-links" id="nav-links">
            <ul className="flex">
              <li><a href="#" className="hover-link">Products</a></li>
              <li><a href="#" className="hover-link">Customer</a></li>
              <li><a href="#" className="hover-link">Pricing</a></li>
              <li><a href="#" className="hover-link">Resources</a></li>
              <li><a href="#" className="hover-link secondary-button">Sign in</a></li>
              <li><a href="#" className="hover-link primary-button">Sign up</a></li>
            </ul>
          </div>
          <a href="#" className="nav-toggle hover-link" id="nav-toggle">
            <i className="fa-solid fa-bars"></i>
          </a>
        </div>
      </nav>

      <header>
        <div className="container flex header-section">
          <div className="header-left">
            <h1>Simple portfolios</h1>
            <p>Welcome to my portfolio! I'm a driven individual with 3 years of experience in Computer Science. My portfolio showcases my most impactful work and demonstrates my commitment to delivering creative solutions. I'm eager to tackle new challenges.</p>
            <a href="#" className="primary-button">Get Started</a>
          </div>
          <div className="header-right">
            <img src={asset2} alt="People working together" />
          </div>
        </div>
      </header>

      <section className="companies-section">
        <div className="container">
          <div className="small-bold-text companies-header">
            Joining the World's Best Companies.
          </div>
          <div className="logos flex">
            <img className="logo" src={asset3} alt="Amazon"/>
            <img className="logo" src={asset4} alt="Google"/>
            <img className="logo" src={asset5} alt="Task Rabbit"/>
            <img className="logo" src={asset6} alt="AirTable"/>
            <img className="logo" src={asset7} alt="box"/>
            <img className="logo" src={asset8} alt="GoDaddy"/>
            <img className="logo" src={asset9} alt="Asana"/>
          </div>
        </div>
      </section>

      {/* features section */}

      <section className="features-section">
        <div className="container">
          <div className="features-header">
            <h2 className="features-heading-text">Your user research Swiss Army knife</h2>
            <a href="#" className="secondary-button">See all features</a>
          </div>
          <div className="features-area flex">
            <div className="features-card flex">
              <img src={asset11} alt=""/>
              <h3>Card Sorting</h3>
              <p>Discover how people group and label information.</p>
              <a href="#" className="secondary-button">Learn More</a>
            </div>
            <div className="features-card flex">
              <img src={asset12} alt=""/>
              <h3>Prototype tests</h3>
              <p>Discover how people navigate your Figma prototypes.</p>
              <a href="#" className="secondary-button">Learn More</a>
            </div>
            <div className="features-card flex">
              <img src={asset13} alt=""/>
              <h3>First click tests</h3>
              <p>Test interaction with first click and navigation tests.</p>
              <a href="#" className="secondary-button">Learn More</a>
            </div>
            <div className="features-card flex">
              <img src={asset14} alt=""/>
              <h3>Design surveys</h3>
              <p>Get feedback on images, videos or audio files.</p>
              <a href="#" className="secondary-button">Learn More</a>
            </div>
            <div className="features-card flex">
              <img src={asset15} alt=""/>
              <h3>Preference tests</h3>
              <p>Find out which designs users prefer and why.</p>
              <a href="#" className="secondary-button">Learn More</a>
            </div>
            <div className="features-card flex">
              <img src={asset16} alt=""/>
              <h3>Five second tests</h3>
              <p>Test comprehensibility by measuring first impressions.</p>
              <a href="#" className="secondary-button">Learn More</a>
            </div>
          
          </div>
        </div>
      </section>

      <section className="big-feature-section">
        <div className="container flex big-feature-container">
          <div className="feature-img">
            <img src={asset18} alt="ft box"/>
          </div>
          <div className="feature-description flex">
            <h4>Effortless validation for</h4>
            <h3>Major Professionals</h3>
            <p>Test interfaces, interaction flows, iconography and more, to help you create intuitive and delightful experiences for your users.</p>
          </div>
        </div>
      </section>

      <section className="big-feature-section">
        <div className="container flex big-feature-container">
          <div className="feature-description flex">
            <h4>Optimization for</h4>
            <h3>Marketers</h3>
            <p>Fine-tune landing pages, messaging, and creative, helping you optimize conversion rates on marketing campaigns and product launches.</p>
          </div>
          <div className="feature-img">
            <img src={asset21} alt="ft box"/>
          </div>
        </div>
      </section>

      <section className="big-feature-section">
        <div className="container flex big-feature-container">
          <div className="feature-img">
            <img src={asset24} alt="ft box"/>
          </div>
          <div className="feature-description flex">
            <h4>Easier decision making for</h4>
            <h3>Product Managers</h3>
            <p>Ensure you’re delivering the right features to the right customers by validating product concepts with your target audience.</p>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="cta-section">
        <div className="container flex cta-section-container">
          <h2>Start testing today</h2>
          <p>Take the guesswork out of design decisions</p>
          <a href="#" className="primary-button">Get Started</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container flex footer-container">
          <div className="link-column flex">
            <h4>Product</h4>
            <a href="#" className="hover-link">Overview</a>
            <a href="#" className="hover-link">Pricing</a>
            <a href

="#" className="hover-link">Usability Hub</a>
            <a href="#" className="hover-link">Customers Page</a>
            <a href="#" className="hover-link">Status Page</a>
          </div>
          <div className="link-column flex">
            <h4>Methodology</h4>
            <a href="#" className="hover-link">Card Sorting</a>
            <a href="#" className="hover-link">Prototype testing</a>
            <a href="#" className="hover-link">First click tests</a>
            <a href="#" className="hover-link">Preference Tests</a>
            <a href="#" className="hover-link">Five seconds tests</a>
          </div>
          <div className="link-column flex">
            <h4>Resources</h4>
            <a href="#" className="hover-link">Blog</a>
            <a href="#" className="hover-link">Examples</a>
            <a href="#" className="hover-link">Testing guides</a>
            <a href="#" className="hover-link">Help centre</a>
            <a href="#" className="hover-link">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
