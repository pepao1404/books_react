import React from "react"
import { Link } from "react-router-dom"
import BookTitle from "./BookTitle"

export default class Main extends React.Component {
  constructor(){
    super()
    this.state = {
      isLoaded: false,
      items: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/books")
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json
      })
    })
  }

  render() {

    let { items, isLoaded } = this.state
    console.log(items ,isLoaded)

    if(!isLoaded){
      return <div>...now loading</div>
    } else {
      return (
        <div className="container my-4">
        {items.map(val =>
          <div key={val.id} className="card p-2 my-4 border-secondary">
            <Link to={"/" + val.title} style={{ textDecoration: 'none' }}>
              <BookTitle title={val.title}></BookTitle>
            </Link>
            <div className="text-secondary">{val.author}</div>
            <div className="my-3">{val.content}</div>
            <div className="small">Written in {val.written_in}</div>
          </div>
        )}
      </div>
      )
    }
    // const items = [
    //   { id: 1, title: "吾輩は猫である", author: "夏目漱石", created_at: 1905, content: "吾輩 （ わがはい ） は猫である。名前はまだ無い。 どこで生れたかとんと 見当 （ けんとう ） がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。" },
    //   { id: 2, title: "羅生門", author: "芥川龍之介", created_at: 1915, content: "ある日の暮方の事である。一人の下人げにんが、羅生門らしょうもんの下で雨やみを待っていた。広い門の下には、この男のほかに誰もいない。ただ、所々丹塗にぬりの剥はげた、大きな円柱まるばしらに、蟋蟀きりぎりすが一匹とまっている。" },
    //   { id: 3, title: "人間失格", author: "太宰治", created_at: 1948, content: "私は、その男の写真を三葉、見たことがある。一葉は、その男の、幼年時代、とでも言うべきであろうか、十歳前後かと推定される頃の写真であって、その子供が大勢の女のひとに取りかこまれ、（それは、その子供の姉たち、妹たち、それから、従姉妹いとこたちかと想像される）庭園の池のほとりに、荒い縞の袴はかまをはいて立ち、首を三十度ほど左に傾け、醜く笑っている写真である。" },
    //   { id: 4, title: "仮面の告白", author: "三島由紀夫", created_at: 1949, content: "のこる一人に私の視線が吸い寄せられた。二十二三の、粗野な、しかし浅黒い整った顔立ちの若者であった。彼は半裸の姿で、汗に濡れて薄鼠うすねずみいろをした晒さらしの腹巻を腹に巻き直していた。" },
    // ]

  }
}