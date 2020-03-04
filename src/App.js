import React from "react";
import Toolbar from "./Components/navbar/navigationbar"
import Drawrer from "./Components/navbar/drawer"
import Section1 from "./Components/Section1/sect1"
import CardList from "./Components/Section2/sec2"
import SectionLogo from "./Components/SectionLogo/sectionLg"
import Section3 from "./Components/Section3/sect3"
import Section4 from "./Components/Section4/sect4"
import Section5 from "./Components/Section5/sect5"
import Footer from "./Components/Footer/footer"
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const data=[
  {
    title:'For patients',
    paragraphe:"Find a doctor, book a visit and solve any health-related doubt",
    img:'https://www.docplanner.com/img/screen-marketplace@2x.png',
    bg:{backgroundColor:'#00b39b'}
  },
  {
    title:'For doctors',
    paragraphe:"Save time managing visits and cut no-shows by half",
    img:'https://www.docplanner.com/img/screen-saas@2x.png',
    bg:{backgroundColor:'#3d83df'}
  }
]

const data1=[
  {
    picture:"https://www.docplanner.com/images/warsaw.png",
    title:"Warsaw",
  },
  {
    picture:"https://www.docplanner.com/images/barcelona.png",
    title:"Barcelona",
  },
  {
    picture:"https://www.docplanner.com/images/istanbul.png",
    title:"Istanbul",
  },
  {
    picture:"https://www.docplanner.com/images/rome.png",
    title:"Rome",
  },
  {
    picture:"https://www.docplanner.com/images/mexico-city.png",
    title:"Mexico city",
  },
  {
    picture:"https://www.docplanner.com/images/curitiba.png",
    title:"Curitiba",
  }
]


  class App extends React.Component {
state={
  DrawrerOpen:false
}
    buttonDrawrer=()=>{
this.setState((prevState)=>{
  return {DrawrerOpen: !prevState.DrawrerOpen}
});
    } 


    buttonPager=()=>{
      this.setState({ DrawrerOpen:false } );
    };

  render() {




    return (

      
      <div style={{height:'100%'}}>
      <Toolbar drawerClickHandler={this.buttonDrawrer}/>      
      
      <Drawrer click={this.buttonPager} show={this.state.DrawrerOpen}/>
      <main style={{marginTop:'64px'}}>
        <Section1/>
        <SectionLogo/>
        <Section3/>
        <Section4/>
        <Section5 carte={data1}/>
      </main>
      <Footer/>
      </div>
    );
  }
};

export default App;