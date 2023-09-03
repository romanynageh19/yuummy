

$(document).ready(function(){
   let data=[]
let resalt=[]
async function start(){

   const response=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    const meal= await response.json()

data=meal.meals
console.log(data);
disPlay()

let test =document.querySelectorAll("i") 
test.forEach(el => {
   el.addEventListener("click",function(e){
console.log(e.target.getAttribute("area"));
 let area =e.target.getAttribute("area")
 console.log(area);
areaa(area)
   })
});

}

function disPlay(){
   temp="";
   for (let i = 0; i < data.length; i++) {
      temp+=`<div class="col-3  g-3">
      
    
      <i area="${data[i].strArea}" class="fa-solid fa-house-laptop fa-4x"></i>
      
            
          <h3 class="color-dark">${data[i].strArea  }</h3>
          
          
      </div>`
      
   }
   document.getElementById("domo").innerHTML=temp
}
async function areaa(area){
   const areao= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    let finalArea=await areao.json()
    resalt=finalArea.meals
    console.log(resalt);
    disPlayresalt()
    let test=document.querySelectorAll(".test")
    test.forEach(el => {
      el.addEventListener("click",function(e){
   console.log(e.target.getAttribute("id"));
    let id =e.target.getAttribute("id")
    console.log(id);
    detelis(id)
      })
   });
 }
function disPlayresalt(){
   cartona=""
    for (let i = 0; i < resalt.length; i++) {
       cartona+=`
       <div  class="test col-3 g-3">
       
     
           <img id="${resalt[i].idMeal}" class="w-100 bg-danger-subtle test" src="${resalt[i].strMealThumb
           }">
           
             
           <h3  class="color-dark">${resalt[i].strMeal  }</h3>
           
           
       </div>`}
       document.getElementById("domo").innerHTML=cartona
 }
 async function detelis(id){

   const response=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const dattttta= await response.json()

 deteli=dattttta.meals[0]
console.log(deteli);
 console.log(dattttta.meals[0].strInstructions);

 displayDetalis();
}

function displayDetalis(){
   // console.log(deteli.strInstructions);
  carttona= ` <div class="col-4">
   <img src="${deteli.strMealThumb
   }" class="w-100">
   <h2>${deteli.strMeal}</h2>
</div>
<div class="col-8">
   <p>${deteli.strInstructions}</p>
   <h2>Area : ${deteli.strArea}</h2>
   <h2> Category : ${deteli.strCategory}</h2>
   <ul class="list-unstyled d-flex g-3 flex-wrap">
       <li class="alert alert-info m-2 p-1">${deteli.strMeasure1}  ${deteli.strIngredient1}</li>
       <li class="alert alert-info m-2 p-1">${deteli.strMeasure2}  ${deteli.strIngredient2}</li>
       <li class="alert alert-info m-2 p-1">${deteli.strMeasure3}  ${deteli.strIngredient3}</li>
       <li class="alert alert-info m-2 p-1">${deteli.strMeasure4}  ${deteli.strIngredient4}</li>
       <li class="alert alert-info m-2 p-1">${deteli.strMeasure5}  ${deteli.strIngredient5}</li>
       <li class="alert alert-info m-2 p-1">${deteli.strMeasure6}  ${deteli.strIngredient6}</li>
       <li class="alert alert-info m-2 p-1">${deteli.strMeasure7}  ${deteli.strIngredient7}</li>
       <li class="alert alert-info m-2 p-1">${deteli.strMeasure8}  ${deteli.strIngredient8}</li>
       <li class="alert alert-info m-2 p-1">${deteli.strMeasure9}  ${deteli.strIngredient9}</li>
       <li class="alert alert-info m-2 p-1">${deteli.strMeasure10}  ${deteli.strIngredient10}</li>
      
   </ul>
   <h2>tag: <span class="alert alert-primary p-1 m-2">${deteli.strTags}</span></h2>
   
   <a href="${deteli.strYoutube}"><button class="btn btn-info">yotube</button></a>
   <a href="${deteli.strSource}"><button class="btn btn-danger">source</button></a>
</div>`
document.getElementById("domo").innerHTML=carttona
}
   start()
   $(".loading").fadeOut(5000)
})
