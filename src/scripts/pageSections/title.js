import { MakeElement } from '../utils';

const TitlePage = function(PersonInfo) {
    const makeEle = new MakeElement;
    const svgArray = ['1','2','3'];

    const mainContent = makeEle.createEle('div','titleMainContent',null,['titleOuterContainer','bodyContainerItem']);
    const nameTitle = makeEle.createEle('div', 'titleName', null, 'titleName');
    const titleImage = makeEle.createEle('div', 'titleImage',null, 'titleImage');



    mainContent.append(titleImage, nameTitle);

    return mainContent;
}

export default TitlePage;