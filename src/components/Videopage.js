import React from "react"
import {DefaultPlayer as Video} from "react-html5video"
import "react-html5video/dist/styles.css"
import Top1Video from "../video/ne_hvatka.mp4"
import Top2Video from "../video/krik_yaaa.mp4"
import Top3Video from "../video/tosha.mp4"
import Top4Video from "../video/tamik.mp4"
import Top5Video from "../video/adam_nozh.mp4"
import Top6Video from "../video/amir_potom_adam.mp4"
import Top7Video from "../video/imran_and_adam.mp4"
import BlockBackVideo from "./BlockBackVideo"

function Videopage(){
  return(<div>
    <h1>Топ самых мощных видео</h1>
    <div className="top1video-block">
      <h1 className="first">#1</h1>
    <Video className="top1video">
      <source src={Top1Video} type="video/webm"/>
     </Video>
     </div>
     <div className="top2video-block">
      <h1 className="second">#2</h1>
    <Video className="top2video">
      <source src={Top2Video} type="video/webm"/>
     </Video>
     </div>
     <div className="top3video-block">
      <h1 className="third">#3</h1>
    <Video className="top3video">
      <source src={Top3Video} type="video/webm"/>
     </Video>
     </div>
     <div className="top4video-block">
      <h1 className="fourth">#4</h1>
    <Video className="top4video">
      <source src={Top4Video} type="video/webm"/>
     </Video>
     </div>
     <div className="top5video-block">
      <h1 className="fiveth">#5</h1>
    <Video className="top5video">
      <source src={Top5Video} type="video/webm"/>
     </Video>
     </div>
     <div className="top6video-block">
      <h1 className="fiveth">#6</h1>
    <Video className="top6video">
      <source src={Top6Video} type="video/webm"/>
     </Video>
     </div>
     <div className="top7video-block">
      <h1 className="fiveth">#7</h1>
    <Video className="top7video">
      <source src={Top7Video} type="video/webm"/>
     </Video>
     </div>
     <BlockBackVideo/>
  </div>)
}
export default Videopage