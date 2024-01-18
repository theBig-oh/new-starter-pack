import { MakeElement } from './utils';

import Data from './Data/Data.js';
import '../styles/styles.scss';

import TitlePage from './pageSections/title.js';

function RenderSite(){
  let body = document.querySelector('body');

  let makeEle = new MakeElement;




  let bodyContainer = makeEle.createEle('div','bodyContainer',[12,12,12,12],['bodyContain']);  
  
  /* Call in Pages here */
  bodyContainer.append(TitlePage());


  body.append(bodyContainer);

}

RenderSite(); 