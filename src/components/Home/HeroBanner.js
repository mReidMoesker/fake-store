import React, { useEffect, useState } from 'react';
import '../../css/Home-Style/HeroBanner.css';

function HeroBanner() {
  const brands = [
    'Apple',
    'Samsung',
    'Sony',
    'Nike',
    'Adidas',
    'LG',
    'Dell',
    'HP',
    'Asus',
    'Microsoft',
  ];

  const brandLinks = {
      Apple: 'https://www.apple.com',
      Samsung: 'https://www.samsung.com',
      Sony: 'https://www.sony.com',
      Nike: 'https://www.nike.com',
      Adidas: 'https://www.adidas.com',
      LG: 'https://www.lg.com',
      Dell: 'https://www.dell.com',
      HP: 'https://www.hp.com',
      Asus: 'https://www.asus.com',
      Microsoft: 'https://www.microsoft.com',
  };

  const [shuffledBrands, setShuffledBrands] = useState([]);

  useEffect(() => {
    const shuffled = [...brands].sort(() => 0.5 - Math.random());
    setShuffledBrands(shuffled);
  }, []);

  return (
    <div className="hero-banner">
      <h1>Premium Brands, Exceptional Experiences</h1>
      <p>
      Discover cutting-edge technology, innovative design,
     and world-class quality from the brands that define excellence.
        From smartphones to sportswear, laptops to lifestyle products – find everything you need in one
         trusted destination
      </p>
      <div className="hero-banner__buttons">
        <button className="hero-banner__btn explore">Explore More</button>
        <button className="hero-banner__btn buy">Buy Now</button>
      </div>
      <div className="hero-banner__marquee-container">
        <div className="hero-banner__marquee">
          {shuffledBrands.map((brand, index) => (
            <a
              key={index}
              href={brandLinks[brand]}
              className="hero-banner__brand-link"
            >
              {brand}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;