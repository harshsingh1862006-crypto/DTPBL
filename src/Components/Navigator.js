import React from 'react'

export default function Navigator(props) {
  

  return (
    <>
    <div id='ser'>
      <input name="Text area" id="Searchbar" placeholder='🔍Search' value={props.searchTerm} onChange={props.changeHandler} onKeyDown={props.keydown}></input>
      <button className="suggestions" id='sugges1' onClick={props.opt1}>{props.suggestion1}</button>
      <button className="suggestions" id='sugges2' onClick={props.opt2}>{props.suggestion2}</button>
      <button className="suggestions" id='sugges3' onClick={props.opt3}>{props.suggestion3}</button>
      <button className="suggestions" id='sugges4' onClick={props.opt4}>{props.suggestion4}</button>
      <button className="suggestions" id='sugges5' onClick={props.opt5}>{props.suggestion5}</button>
      <button className="suggestions" id='sugges6' onClick={props.opt6}>{props.suggestion6}</button>
      <button className="suggestions" id='sugges7' onClick={props.opt7}>{props.suggestion7}</button>
      <button className="suggestions" id='sugges8' onClick={props.opt8}>{props.suggestion8}</button>
      <button className="suggestions" id='sugges9' onClick={props.opt9}>{props.suggestion9}</button>
      <button className="suggestions" id='sugges10' onClick={props.opt10}>{props.suggestion10}</button>
      <button className="suggestions" id='sugges11' onClick={props.opt11}>{props.suggestion11}</button>
      <button className="suggestions" id='sugges12' onClick={props.opt12}>{props.suggestion12}</button>
      <button className="suggestions" id='sugges13' onClick={props.opt13}>{props.suggestion13}</button>
      <button className="suggestions" id='sugges14' onClick={props.opt14}>{props.suggestion14}</button>
    </div>
    </>
  )
}