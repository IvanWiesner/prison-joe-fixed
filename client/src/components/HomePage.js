import React from "react"
import { ListGroup, ListGroupItem, Image, Col } from 'react-bootstrap';
function HomePage() {
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
            <ListGroup.Item>Money Raised for Charity-$600</ListGroup.Item>
            <ListGroup.Item>LastSonido $286</ListGroup.Item>
            <ListGroup.Item>Faberator-$161</ListGroup.Item>
            <ListGroup.Item>Unanemus-$160</ListGroup.Item>
            <ListGroup.Item>Gage-$127</ListGroup.Item>
            <ListGroup.Item>Jonak-$100</ListGroup.Item>
            <ListGroup.Item>SoloConway-$100</ListGroup.Item>
            <ListGroup.Item>Sainttits-$75</ListGroup.Item>
            <ListGroup.Item>DarkSheik-$60</ListGroup.Item>
            <ListGroup.Item>JoshyNR-$60</ListGroup.Item>
            <ListGroup.Item>MK_Royal-$57</ListGroup.Item>
            <ListGroup.Item>BEHEMETH-$55</ListGroup.Item>
            <ListGroup.Item>DD214pls-$50</ListGroup.Item>
            <ListGroup.Item>BossLofton-$50</ListGroup.Item>
            <ListGroup.Item>K1lla__Noob-$50</ListGroup.Item>
            <ListGroup.Item>FluffyPigs-$43</ListGroup.Item>
            <ListGroup.Item>Angryturkey546-$35</ListGroup.Item>
            <ListGroup.Item>Dab_saget-$32</ListGroup.Item>
            <ListGroup.Item>Jelcepas-$21</ListGroup.Item>
            <ListGroup.Item>FesterFester-$21</ListGroup.Item>
            <ListGroup.Item>Ni3gtmarez-$20</ListGroup.Item>
            <ListGroup.Item>Cold Topaz-$20</ListGroup.Item>
            <ListGroup.Item>Justapenguin00-$20</ListGroup.Item>
            <ListGroup.Item>Lusky-$20</ListGroup.Item>
            <ListGroup.Item>Flip-$16</ListGroup.Item>
            <ListGroup.Item>Narwhal Ninja-$16</ListGroup.Item>
            <ListGroup.Item>Lusky-$15</ListGroup.Item>
            <ListGroup.Item>Faloon-$15</ListGroup.Item>
            <ListGroup.Item>Im_oilfield-$15</ListGroup.Item>
            <ListGroup.Item>Keibro-$13</ListGroup.Item>
            <ListGroup.Item>RS-Gonad-$13</ListGroup.Item>
            <ListGroup.Item>Bibbit7-$11</ListGroup.Item>
            <ListGroup.Item>Flybye187-$10</ListGroup.Item>
            <ListGroup.Item>AlylissianRei-$10</ListGroup.Item>
            <ListGroup.Item>Squidby-$10</ListGroup.Item>
            <ListGroup.Item>Epic Ninja-$8</ListGroup.Item>
            <ListGroup.Item>WhenTheyAwaken-$5</ListGroup.Item>
            <ListGroup.Item>iEmmybear-$5</ListGroup.Item>
            <ListGroup.Item>Wheremeballs-$5</ListGroup.Item>
            <ListGroup.Item>Wisest Wizard-$5</ListGroup.Item>
            <ListGroup.Item>Ivan-$5</ListGroup.Item>
</ListGroup>
</p>
      </div>
      </div>
    );
  }
  
  export default HomePage;