let searchName=document.getElementById("searchName")
let searchLetter=document.getElementById("searchLetter")
let final=[]
searchName.addEventListener("input",function(){
    console.log(searchName.value)
    let name=searchName.value
    console.log(name);
    Sname(name)
    disPlay()
})
searchLetter.addEventListener("keyup",function(){
    console.log(searchLetter.value)
    let letter=searchLetter.value
    console.log(letter);
    Sletter(letter)
    disPlay()
   
})

async function Sname(name) {
    let data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
     let result=await data.json()
    final=result.meals
    console.log(final);
}
function disPlay(){
    temp="";
    for (let i = 0; i <final.length; i++) {
       temp+=`
       <div srid="${final[i].idMeal}" class="test col-3 g-3">
       
     
          <img srid="${final[i].idMeal}"  class="w-100 bg-danger-subtle" src="${final[i].strMealThumb}">
             
           <h3 srid="${final[i].idMeal}" class="color-dark">${final[i].strMeal  }</h3>
           
           
       </div>`
       
    }
    document.getElementById("demo").innerHTML=temp
    
 
 }
async function Sletter(letter) {
    let data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
     let result=await data.json()
    final=result.meals
    console.log(final);
}
function disPlay(){
    temp="";
    for (let i = 0; i <final.length; i++) {
       temp+=`
       <div srid="${final[i].idMeal}" class="test col-3 g-3">
       
     
          <img srid="${final[i].idMeal}"  class="w-100 bg-danger-subtle" src="${final[i].strMealThumb}">
             
           <h3 srid="${final[i].idMeal}" class="color-dark">${final[i].strMeal  }</h3>
           
           
       </div>`
       
    }
    document.getElementById("demo").innerHTML=temp
    
 
 }
 