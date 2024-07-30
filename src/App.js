/* eslint-disable*/
//  ターミナル警告メッセージオフ　//

import './App.css';
import { useState } from 'react';

function App() {

  let post = '東京デートランキング上位';
  let [title, setTitle] = useState(['花見会の人気スポット', '関東お勧めビーチ20選!', 'クリスマスマーケット人気スポット']);
  let [modalTitle, setModalTitle] = useState(['クリスマスマーケット人気スポット']);
  let [newTitle, setNewTitle] = useState(['都内水族館の人気スポット','東京ディズニーシー・ランド', 'クリスマスマーケット人気スポット']);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  
  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      <div className='list'>
        <h3>{post}</h3>
        {/* ソートボタン */}
      <div>
          <button onClick={() => {
            let copy = [...title];
            copy.sort();
            setTitle(copy)
            }}> ソートボタン
          </button>
      </div>
        {/* タイトル修正ボタン */}
      <div>
          <button onClick={() => {
            let copy = [...title];
            copy[0] = newTitle[0];
            setTitle(copy)
            }}> タイトル変更ボタン
          </button>
      </div>
        {
          title.map(function (e, i) {
            return (
              <div className="list">
                <h4 onClick={() => { setModal(!modal) }} >{e}
                  <span onClick={() => {
                    let copy = [...like]
                    copy[i] = copy[i] + 1
                    setLike(copy)
                  }}>👍{like[i]}
                  </span>
                </h4>
                <p>日付: 4月21日 発行</p>
              </div>
                    )
              })
        }
      </div>
      {/* モーダル */}
      { modal == true ? 
      <Modal setTitle={setTitle} 
      title={title[1]} 
      newTitle={newTitle} 
      setNewTitle={setNewTitle} 
      modalTitle={modalTitle} 
      setModalTitle= {setModalTitle} /> : null}
      </div>
  );
}
      // モーダル表示
function Modal(props) {
  return (
    <div className='modal'>
      <button onClick={() =>  {
            let copy = [...props.modalTitle];
            copy = props.newTitle[1];
            props.setModalTitle(copy)
          }}> タイトル変更ボタン </button>
      <h4> タイトル： {props.modalTitle} </h4>
      <p>日付</p>
      <p>詳細内容</p>
    </div>
    // divは一個しか作れないこと。
  )
}


export default App;




