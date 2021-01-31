import React from 'react';
import './Header.css';
import Mypic from '../Untitled design (1).png';
import Giffy from '../yy3.gif';
import Cv from '../cv.png';
import Mygif from '../source.gif';
// import Giff2 from '../60203889.png';

const Header = () =>{
    return(
        <div>
            <div className="imgdiv">
           
                <img className="giffy" src={Giffy} width="300px" ></img>
            <div className="title">
            <img src={Mypic} className="Mypic"></img>
            <h1 className="myname">ANUDEEP AYILALATH PUTHALATH <span className="p">
            <p>"I am an enthusiastic and hardworking front-end developer <br></br>committed to learning and developing creative solutions. 
                I consider the trust and satisfaction <br></br>from my superiors and colleagues to be the most valuable assets in my professional career."
            </p></span></h1>
            <img className="mygif" width=" 200px"src={Mygif}></img>
            </div>

            <div>
           
            </div>

            <h2 className="resume">Resume:</h2>
            </div>
            
            <div className="secdiv">
               
               <a href="https://drive.google.com/file/d/1bab4zxiq-0NNepRhhotJtqXdbhp2drNJ/view?usp=sharing"><img className="cv" src={Cv} width="800px"></img></a> 
            </div>

        </div>
    )
}

export default Header;