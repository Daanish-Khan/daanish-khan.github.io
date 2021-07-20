import React, { useState } from 'react';
import 'react-dropdown/style.css';
import './home.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Button } from '@material-ui/core'
import SearchField from 'react-search-field';
import Dropdown from 'react-dropdown';


import Tooltip from '@material-ui/core/Tooltip'

function Home() {

  const [language, setLanguage] = useState(
    [
      " Dish's  Pet Store",
      " On Sale",
      " Catalogue",
      " Services",
      " Adoption Center",
      "Visit Page",
      "On Sale!",
      "Cat Food",
      "Today's Featured Animal",
      "Chicharron the Hamster",
      "Item Last Viewed",
      "Dog Toy"
    ]
  );

  const [languageChoice, setLanguageChoice] = useState(0);

  function _onSelect(e) {

    console.log(e.value)

    console.log(e.value === "English")
 
    if (e.value === "English") {
      setLanguage(
        [
          " Dish's  Pet Store",
          " On Sale",
          " Catalogue",
          " Services",
          " Adoption Center",
          "Visit Page",
          "On Sale!",
          "Cat Food",
          "Today's Featured Animal",
          "Chicharron the Hamster",
          "Item Last Viewed",
          "Dog Toy"
        ]
      );
      setLanguageChoice(0);
    } else {
      setLanguage(
        [
          " Animalerie de Dish",
          " En soldes",
          " Catalogue",
          " Prestations de service",
          " Centre d'adoption",
          "Page de Visite",
          "En Soldes!",
          "La nourriture pour chat",
          "Animal en Vedette",
          "Chicharron le Hamster",
          "Article Précédent",
          "Jouet pour Chien"
        ]
       
      );
      setLanguageChoice(1);
    }
  
  }
  
  function clickedLink(link) {
    if (link === "home") {
      if (document.getElementById("catalogueLink").classList.contains("active")) {
        document.getElementById("catalogueLink").classList.remove("active")
      }
      document.getElementById("homeLink").classList.add("active");
    } else if (link === "catalogue") {
      if (document.getElementById("homeLink").classList.contains("active")) {
        document.getElementById("homeLink").classList.remove("active")
      }
      document.getElementById("catalogueLink").classList.add("active");
    }

    console.log(link)
  }

  class Navbar extends React.Component {

    options = ['English', 'Francais'];
  
    defaultOption = this.options[languageChoice];
  
    
    render() {
  
      return (
  
      <div class="flex">
        <ul id="nav">
          <li><a onClick={() => clickedLink("home")} id="homeLink" href="#"><img src="https://img.icons8.com/ios-filled/40/D8CBFF/pet-commands-summon.png"></img>{language[0]}</a></li>
          <li><a href="#"><img src="https://img.icons8.com/pastel-glyph/40/000000/online-shop-sale--v1.png"/>{language[1]}</a></li>
          <Tooltip title="Click here to explore the items we have to offer.">
            <li><a onClick={() => clickedLink("catalogue")} id="catalogueLink" href="#shopContainer"><img src="https://img.icons8.com/material-sharp/40/000000/online-store.png"/>{language[2]}</a></li>
          </Tooltip>
          <li><a href="#"><img src="https://img.icons8.com/ios-filled/40/000000/cat-caregivers.png"/>{language[3]}</a></li>
          <li><a href="#"><img src="https://img.icons8.com/ios-filled/40/000000/pets--v1.png"/>{language[4]}</a></li>
          <li><Dropdown className="dropdown" options={this.options} onChange={_onSelect} value={this.defaultOption} placeholder="Language" /></li>
        </ul>
      </div>
  
      );
    }
  
  }
  
  class Carosel extends React.Component {
    slideProperties = {
      indicators: true,
      arrows: false,
      scale: 0.4,
      indicators: i => (<div className="indicator"></div>)
    }
  
    slideImages = [
      'https://blogs.cdc.gov/publichealthmatters/files/2020/05/golden_retiver_cat_cropped.jpg',
      'https://www.cityofgp.com/sites/default/files/styles/inner_banner/public/uploads/banners/animals-pets-banner.jpg?itok=5lIml3cX',
      'https://media.wired.com/photos/5ed06ca9fbf7b2147038a8a9/2:1/w_2400,h_1200,c_limit/Gear-New-Pet-1168772154.jpg'
    ];
    
    render () {
      return (
        <div id="carosel" class="flex">
          <Slide {...this.slideProperties} easing="ease" >
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${this.slideImages[0]})`}}>
  
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${this.slideImages[1]})`}}>
  
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${this.slideImages[2]})`}}>
                
              </div>
            </div>
          </Slide>
        </div>
  
      );
    }
  }
  
  class FeaturedItems extends React.Component {
    render () {
      return (
        <div class="flex">
          <div id="container">
     
            <div class="box box1">
              <p>{language[6]}</p>
              <div class="fill">
                <img class="img" src="https://www.iams.com/images/default-source/product-slider-images/cat/iams-ph-healthy-adult-chix-side.png"></img>
              </div>
              <p>{language[7]}</p>
              <Button size="large" className="visit">{language[5]}</Button>
            </div>
            
            <div class="box box2">
                <p>{language[8]}</p>
                <div class="fill">
                  <img class="img" src="https://www.petakids.com/wp-content/uploads/2016/10/Hamster-thumbnail.jpg"></img>
                </div>
                <p>{language[9]}</p>
                <Button size="large" className="visit">{language[5]}</Button>
            </div>
            
            <div class="box box1">
                <p>{language[10]}</p>
                <div class="fill">
                  <img class="img" src="https://m.media-amazon.com/images/I/719dcnCnHfL._AC_SL1500_.jpg"></img>
                </div>
                <p>{language[11]}</p>
                <Tooltip title="We're sorry, this page is under maintenance.">
                <div class="disabled">
                  <Button size="large" className="visit" disabled>{language[5]}</Button>
                </div>
                </Tooltip>
            </div>
          
          </div>
        </div>
      );
    }
  }
  
  class Shop extends React.Component {
  
    render () {
      return (
        <div class="flex">
          <div id="shopContainer">
            
            <div class="shopBox shopBox1">
              <img class="filter" src="https://cdn.discordapp.com/attachments/769564041207087114/866514550685564928/unknown.png"></img>
            </div>
  
            <div class="shopBox shopBox2">
              
              <div class="itemContainer">
                <SearchField
                  placeholder="Search"
                  classNames="shopSearch"
                />
  
                <div class="square"><p>Dog Food</p><span>$4.20</span></div>
                <div class="square"><p>Cat Food</p><span>$5.23</span></div>
                <div class="square"><p>Dog Toy</p><span>$6.45</span></div>
                <div class="square"><p>Cat Toy</p><span>$2.22</span></div>
                <div class="square"><p>Catnip</p><span>$45.60</span></div>
                <div class="square"><p>Hamter Food</p><span>$44.99</span></div>
                <div class="square"><p>Leash</p><span>$4.00</span></div>
                <div class="square"><p>Parrot Cage</p><span>$7.00</span></div>
                <div class="square"><p>Litter</p><span>$90.00</span></div>
                <div class="square"><p>Treats</p><span>$19.99</span></div>
              </div>
            </div>
  
          </div>
        </div>
      );
    }
  }

  return (
    <div className="home">
      <div class="home-header">
        <Navbar />
        <Carosel />
        <FeaturedItems />
        <Shop />
      </div>
    </div>
  );


}

export default Home;
