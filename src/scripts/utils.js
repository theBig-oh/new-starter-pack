export const GetBacon = () => {
  const body = fetch('https://baconipsum.com/api/?type=all-meat&paras=3').then( res => res.json() );
  return body;
};


/*
  MakeElements --- 

    MakeElement.createEle : Creates HTML element of your choosing
                            
                            Type: Takes string value, can create any element type ie "div", "span","img"
                            Name: Takes string value, sets element Id value
                            Gridsize: Takes Array value, [xs,sm,md,lg]. Used for bootstrap's grid system
                            Custom: Takes string value, sets custom classes
                                    Uses an array if there is more than one custom class being called in.
                                    

*/

 
export function MakeElement(){     
  this.createEle = function(type,name,gridsize,custom) {
    let newElement = document.createElement(type); 
        newElement.id = name;
    
    let classStuff = ['noPadding']; 

    if(Array.isArray(custom)) {
      custom.forEach(function(clas){
        classStuff.push(clas);
      })
    } else {
      classStuff.push(custom);
    }
    
  /* 
    Gridsize needs to be depreciated or removed completely
     No one uses bootstrap anymore. 

     Maybe able to salvage it for another type of class?

  */

   if(gridsize != null){
      gridsize.forEach(function(siz,i){
        let multiSize = ['xs','sm','md','lg'];
        if(parseInt(siz) == 0) {
          classStuff.push(`hidden-${multiSize[i]}`);
        } else {
          classStuff.push(`col-${multiSize[i]}-${siz}`);
        }
      });
    }

    classStuff.forEach(function(clas){
      newElement.classList.add(clas);
    }); 
    return newElement;
  }
}
