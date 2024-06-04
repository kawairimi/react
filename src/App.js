/* eslint-disable*/
//  ターミナル警告メッセージオフ　//

import './App.css';
import { useState } from 'react';

function App() {

let [title,setTitle] = useState(['渋谷集カフェおすすめ','秋葉原カフェ集','浅草食べ歩きスポット'])
let [iine, iinechen] = useState(0)



function likebotton () {

  iinechen(iine + 1)
}

function changebutton () {
  let copy = [...title]
  copy[0] = '原宿・渋谷カフェおすすめ'
  setTitle(copy)
}

function ganadara () {

}

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>TokyoBlog</h4>
      </div>
      <button onClick={ganadara}>가나다순정렬</button>
      <div className='list'>
        <h4>{ title[0] } <span  onClick={likebotton}>👍🏻{iine}</span></h4>
        <p>2月17日発行</p>
        </div>
        <div className='list'>
        <h4>{ title[1] }</h4>
        <p>2月24日発行</p>
      </div>
      <div className='list'>
        <h4>{ title[2] }</h4>
        <p>3月27日発行</p>
      </div>
      <div>
      <button onClick={changebutton}>リスト変更</button>
      </div>
      </div>

  );
}

export default App;
