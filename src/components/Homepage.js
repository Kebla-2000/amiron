import React from "react"
import Alan from "../img/alan.png"
import ImageBtn from "../img/btn.png"
import { useState } from "react"

function Homepage(){
    const[besPole,setBesPole]=useState("<--")
  return(<div>
      <div className="block1">
      <h3>Короче я сделал сайт про Амирона оксимирона.
        На сайте присутствуют некоторые фото и видео про него,
        конечно же самые мощные. Если что сайт сделан 
        на (HTML,CSS,JS и REACTJS){besPole}бесполезная информация.
      </h3>
      </div>
      <div className="block2">
      <h2>Чтобы открыть меню нажмите на лицо Амира.
        Не советую открывать сайт на пк,ноуте или планшете.
        Я подобрал 5 фото и 7 видео.Вот ещё какой-то текст Lorem ipsum dolor, 
        sit amet consectetur adipisicing elit.
         Numquam quis consectetur ex enim voluptatum repudiandae vero eveniet,
          ab deserunt,dignissimos sint labore fugit.  
      </h2>
      </div>
      <img className="alan" src={Alan}/>
  </div>)
}
export default Homepage