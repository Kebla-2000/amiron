import React from "react"
import Top1 from "../img/top_photo/top1.jpg"
import Top2 from "../img/top_photo/top2.jpg"
import Top3 from "../img/top_photo/top3.jpg"
import Top4 from "../img/top_photo/top4.jpg"
import Top5 from "../img/top_photo/top5.jpg"
import BlockBack from "./BlockBack"

function Photopage(){
  return(<div>
      <h1>Топ самых мощных фото</h1>
      <div className="top1-block">
      <h1 className="first">#1</h1>
        <img className="top1" src={Top1}/>
        <p className="top1-rech">Конечно же на первом месте самый смак.
          И я на 100% уверен,что было правильным решением
          поставить это на первое место. 
        </p>
      </div>
      <div className="top2-block">
      <h1 className="second">#2</h1>
        <img className="top2" src={Top2}/>
        <p className="top2-rech">На втором месте
        конечно же главный гига чад.
        </p>
      </div>
      <div className="top3-block">
      <h1 className="third">#3</h1>
        <img className="top3" src={Top3}/>
        <p className="top3-rech">На третьем месте
        тоже не плохой кандидат,но ему не сравнится
        с первым и вторым номером.
        </p>
      </div>
      <div className="top4-block">
      <h1 className="fourth">#4</h1>
        <img className="top4" src={Top4}/>
        <p className="top4-rech">На четвертом месте
        что-то по типу гига чад,но это не гига чад
        и поэтому только четвертое место.
        </p>
      </div>
      <div className="top5-block">
      <h1 className="fiveth">#5</h1>
        <img className="top5" src={Top5}/>
        <p className="top5-rech">А на пятом
        месте просто Адам.
        </p>
      </div>
      <BlockBack/>
  </div>)
}
export default Photopage