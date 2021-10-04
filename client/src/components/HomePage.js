import React from "react"
import { ListGroup, ListGroupItem, Image, Col } from 'react-bootstrap';
function HomePage({ supporters, setSupporters}) {
  
    return (
      <div className="home-page">
        <div class="row">
          <div class="col-2">
         <h2 className="home-header">The WIDEST Streamer on Twitch </h2>
    
          <Image src="https://i.imgur.com/b0p0vkv.png" fluid />
          </div>
          <div class="col" id="records">
        <ListGroup>
        <ListGroup.Item>- Top 1300 Vorkath Kc</ListGroup.Item>
        
        <ListGroup.Item>- Top 3000 Zulrah Kc</ListGroup.Item>
        
        <ListGroup.Item>- World Record 32 Hr Zulrah Only Stream.</ListGroup.Item>
        
        <ListGroup.Item>- 5 Total 24 Hours Streams.</ListGroup.Item>
        </ListGroup>
        </div>
        </div>
        <div className="supporters">
        <h2 className="home-header">Supporters</h2>
        <p className="home-text"> 
        <ListGroup>
            <ListGroup.Item classname="supporter-text">Money Raised for Charity-$600</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">LastSonido $286</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">Faberator-$161</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">Unanemus-$160</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">Gage-$127</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">Jonak-$100</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">SoloConway-$100</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">Sainttits-$75</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">DarkSheik-$60</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">JoshyNR-$60</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">MK_Royal-$57</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">BEHEMETH-$55</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">DD214pls-$50</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">BossLofton-$50</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">K1lla__Noob-$50</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">FluffyPigs-$43</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">Angryturkey546-$35</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">Dab_saget-$32</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">Jelcepas-$21</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">FesterFester-$21</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">Ni3gtmarez-$20</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">Cold Topaz-$20</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">Justapenguin00-$20</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">Lusky-$20</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">Flip-$16</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">Narwhal Ninja-$16</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">Lusky-$15</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">Faloon-$15</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">Im_oilfield-$15</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">Keibro-$13</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">RS-Gonad-$13</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">Bibbit7-$11</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">Flybye187-$10</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">AlylissianRei-$10</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">Squidby-$10</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">Epic Ninja-$8</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">WhenTheyAwaken-$5</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">iEmmybear-$5</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">Wheremeballs-$5</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">Wisest Wizard-$5</ListGroup.Item>
            <ListGroup.Item classname="supporter-text">Ivan-$5</ListGroup.Item>
</ListGroup>
</p>
      </div>
      </div>
    );
  }
  
  export default HomePage;