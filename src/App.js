import './App.css';
import { useState } from 'react';
import Hello from './Components/Map';
import Navbar from './Components/Navbar';
import Navigator from './Components/Navigator';
import dg from './DG.json';
import df from './DF.json';
import ds from './DS.json';

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [s1,sets1] = useState('');
  const [s2,sets2] = useState('');
  const [s3,sets3] = useState('');
  const [s4,sets4] = useState('');
  const [s5,sets5] = useState('');
  const [s6,sets6] = useState('');
  const [s7,sets7] = useState('');
  const [s8,sets8] = useState('');
  const [s9,sets9] = useState('');
  const [s10,sets10] = useState('');
  const [s11,sets11] = useState('');
  const [s12,sets12] = useState('');
  const [s13,sets13] = useState('');
  const [s14,sets14] = useState('');
  const [map, setMap] = useState("mgr");
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const [zoom, setZoom] = useState(null);
  const keyg = Object.keys(dg);
  const keyf = Object.keys(df);
  const keys = Object.keys(ds);

  const kys = keyf.concat(keyg).concat(keys);

  

  function similarity(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  let matches = 0;
  const len = Math.min(a.length, b.length);
  for (let i = 0; i < len; i++) {
    if (a[i] === b[i]) matches++;
  }
  return matches / Math.max(a.length, b.length || 1);
  }

  function findTopMatches(query, keys, limit = 14) {
    if (query.trim() === '' || query.trim() === null){
      return ['']
    }
    return keys
      .map((key) => ({
        key,
        score: similarity(query, key),
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map((item) => item.key);
  }

  function setfloor(val){
    if (keyg.includes(val)){
      setMap("mgr");
      setX(dg[val][0]);
      setY(dg[val][1]);
      setZoom(dg[val][2]);
    }
    else if (keyf.includes(val)){
      setMap("mfr");
      setX(df[val][0]);
      setY(df[val][1]);
      setZoom(df[val][2]);

    }
    else if (keys.includes(val)){   
      setMap("msr");
      setX(ds[val][0]);
      setY(ds[val][1]);
      setZoom(ds[val][2]);

    }
  }
  

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
    }
  }


  const open1 = () => {
    setfloor(s1);
  }
  const open2 = () => {
    setfloor(s2);
  }
  const open3 = () => {
    setfloor(s3);
  }
  const open4 = () => {
    setfloor(s4);
  }
  const open5 = () => {
    setfloor(s5);
  }
  const open6 = () => {
    setfloor(s6);
  }
  const open7 = () => {
    setfloor(s7);
  }
  const open8 = () => {
    setfloor(s8);
  }
  const open9 = () => {
    setfloor(s9);
  }
  const open10 = () => { 
    setfloor(s10);
  }
  const open11 = () => {
    setfloor(s11);
  }
  const open12 = () => {
    setfloor(s12);
  }
  const open13 = () => {
    setfloor(s13);
  }
  const open14 = () => {
    setfloor(s14);
  }


  const Ground = () =>{
    setMap("mgr");
  }
  const First = () =>{
    setMap("mfr");
  }
  const Second = () =>{
    setMap("msr");
  }
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    const matches = findTopMatches(e.target.value, kys);
    sets1(matches[0] || '');
    sets2(matches[1] || '');
    sets3(matches[2] || '');
    sets4(matches[3] || '');
    sets5(matches[4] || '');
    sets6(matches[5] || '');
    sets7(matches[6] || '');
    sets8(matches[7] || '');
    sets9(matches[8] || '');
    sets10(matches[9] || '');
    sets11(matches[10] || '');
    sets12(matches[11] || '');
    sets13(matches[12] || '');
    sets14(matches[13] || '');
  };

  const ClearS = () => {
    setX(null);
    setY(null);
    setZoom(null);
  }


  return (
    <>
      <Navbar btn1={Ground} btn2={First} btn3={Second} btn4={ClearS}/>
      
      <div id='Map'>
        <Hello  Map={map} x={x} y={y} zoom={zoom}/>
      </div>
      <div id="navigator">
        <Navigator changeHandler={handleSearchChange} keydown={handleKeyDown} searchTerm={searchTerm}
        suggestion1={s1} suggestion2={s2} suggestion3={s3} suggestion4={s4} suggestion5={s5} suggestion6={s6} 
        suggestion7={s7} suggestion8={s8} suggestion9={s9} suggestion10={s10} suggestion11={s11} suggestion12={s12} 
        suggestion13={s13} suggestion14={s14} opt1={open1} opt2={open2} opt3={open3} opt4={open4} opt5={open5} opt6={open6} 
        opt7={open7} opt8={open8} opt9={open9} opt10={open10} opt11={open11} opt12={open12} opt13={open13} opt14={open14}
        />
      </div>
    </>
  );
}

export default App;
