import { postData } from "./postdata.js";

export function formatBeers(data){
   const serving = data.serving
   class Beer {
       constructor(name, price, time)
       {
           this.beer = name;
           this.price = price;
           this.date = time;
       }
   }
   const orderedBeers = []
   //loop throught serving orders and get new objects formated as desired
   serving.map((order)=>{
       const orderTime = transformTime(order.startTime)
       order.order.forEach((elm)=>{
           let price;
           if (elm == "El Hefe") {
            price = 40;
          } else if (elm == "Fairy Tale Ale" || elm == "GitHop" ) {
            price = 60;
          } else if (elm == "Hollaback Lager") {
            price = 50;
          } else if (elm == "Hoppily Ever After") {
            price = 65;
          } else if (elm == "Mowintime") {
            price = 30;
          } else if (elm == "Row 26") {
            price = 80;
          } else if (elm == "Ruined Childhood" || elm == "Sleighride") {
            price = 70;
          }  else {
            price = 50;
          }
           const beer = new Beer (elm, price, orderTime);
           orderedBeers.push(beer);
       })
   });
   console.log("ordered beers", orderedBeers);

   postData(orderedBeers, "https://keaprojects21-50cf.restdb.io/rest/foo-bar")
   }



   function transformTime(time){
    const myDate = new Date(time);
    const myDay = myDate.getDate();
    const myMonth = myDate.getMonth();
    const myYear = myDate.getFullYear(); 
    return `${myDay}-${myMonth}-${myYear}`
}