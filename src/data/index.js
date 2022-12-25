 import insta from "../images/icon-instagram.svg"
 import face from "../images/icon-facebook.svg"
 import twitter from "../images/icon-facebook.svg"
 import youtube from "../images/icon-youtube.svg"

import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";


 const bigdata =[
    {id:"1",cssclass:"card before:bg-facebook",title:"@Ehab",followers:"1987",followtyp:"Followers",Today:"12",icon:<img src={face} />,arrow:<RiArrowUpSFill/>,iconcolor:"text-facebook",arrowcolor:"text-maingreen"},
    {id:"2",cssclass:"card before:bg-twitter",title:"@Ehab",followers:"1044",followtyp:"Followers",Today:"99",icon:<img src={twitter} />,arrow:<RiArrowUpSFill/>,iconcolor:"text-twitter",arrowcolor:"text-maingreen"},
    {id:"3",cssclass:"card before:bg-gradient-to-r before:from-[#fcba6e] before:to-[#e14b95]",title:"@Ehab",followers:"11K",followtyp:"Followers",Today:"1099",icon:<img src={insta} />,arrow:<RiArrowUpSFill/>,iconcolor:"text-instagram",arrowcolor:"text-maingreen"},
    {id:"4",cssclass:"card before:bg-rose-700",title:"@Ehab",followers:"8239",followtyp:"Subscripers",Today:"144",icon:<img src={youtube} />,arrow:<RiArrowDownSFill/>,iconcolor:"text-rose-800",arrowcolor:"text-rose-700"},
  ]
const smalldata=[
  {id:"1",title:"Page Views",icon:<img src={face} />,views:"87",arrow:<RiArrowUpSFill />, percent:"3%",textcolor:"text-maingreen"},
  {id:"2",title:"Likes",icon:<img src={face} />,views:"52",arrow:<RiArrowDownSFill />, percent:"2%",textcolor:"text-rose-700"},
  {id:"3",title:"Likes",icon:<img src={insta} />,views:"5462",arrow:<RiArrowUpSFill />, percent:"2257%",textcolor:"text-maingreen"},
  {id:"4",title:"Profile Views",icon:<img src={insta} />,views:"52K",arrow:<RiArrowUpSFill />, percent:"1375%",textcolor:"text-maingreen"},
  {id:"5",title:"Retweets",icon:<img src={twitter} />,views:"117",arrow:<RiArrowUpSFill />, percent:"303%",textcolor:"text-maingreen"},
  {id:"6",title:"Likes",icon:<img src={twitter} />,views:"507",arrow:<RiArrowUpSFill />, percent:"553%",textcolor:"text-maingreen"},
  {id:"7",title:"Likes",icon:<img src={youtube} />,views:"107",arrow:<RiArrowDownSFill />, percent:"19%",textcolor:"text-rose-700"},
  {id:"8",title:"Total Views",icon:<img src={youtube} />,views:"1407",arrow:<RiArrowDownSFill />, percent:"12%",textcolor:"text-rose-700"},
]
  export  {bigdata,smalldata}