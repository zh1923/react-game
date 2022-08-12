import Gif0 from "./pieces/0.gif";
import Gif1 from "./pieces/1.gif";
import Gif2 from "./pieces/2.gif";
import Gif3 from "./pieces/3.gif";
import Gif4 from "./pieces/4.gif";
import Gif5 from "./pieces/5.gif";
import Gif6 from "./pieces/6.gif";
import Gif7 from "./pieces/7.gif";
import Gif8 from "./pieces/8.gif";
import Gif9 from "./pieces/9.gif";
import Gif10 from "./pieces/10.gif";
import Gif11 from "./pieces/11.gif";
import Gif12 from "./pieces/12.gif";
import Gif13 from "./pieces/13.gif";
import Gif14 from "./pieces/14.gif";
import Gif15 from "./pieces/15.gif";
import Gif16 from "./pieces/16.gif";
import Gif17 from "./pieces/17.gif";
import Gif18 from "./pieces/18.gif";
import Gif19 from "./pieces/19.gif";
import Gif20 from "./pieces/20.gif";
import Gif21 from "./pieces/21.gif";
import Gif22 from "./pieces/22.gif";
import flash from "./pieces/flash.gif";

export const getImage = (value: any): any => {
  switch (value) {
    case 0:
      return Gif0;
    case 1:
      return Gif1;
    case 2:
      return Gif2;
    case 3:
      return Gif3;
    case 4:
      return Gif4;
    case 5:
      return Gif5;
    case 6:
      return Gif6;
    case 7:
      return Gif7;
    case 8:
      return Gif8;
    case 9:
      return Gif9;
    case 10:
      return Gif10;
    case 11:
      return Gif11;
    case 12:
      return Gif12;
    case 13:
      return Gif13;
    case 14:
      return Gif14;
    case 15:
      return Gif15;
    case 16:
      return Gif16;
    case 17:
      return Gif17;
    case 18:
      return Gif18;
    case 19:
      return Gif19;
    case 20:
      return Gif20;
    case 21:
      return Gif21;
    case 22:
      return Gif22;
    default:
      return flash;
  }
};
