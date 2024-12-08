let getSearch = document.getElementById("exampleInputEmail1");
let card = document.getElementById("card");

let apifatch = async ()=>{
    let input = getSearch.value;
    let getData = `https://newsapi.org/v2/everything?q=${input}&from=2024-11-08&sortBy=publishedAt&apiKey=e7460b12d9f24116ba3d71965a21ee2b`;
    try{
        let getapi = await fetch(getData)
        let res = await getapi.json();
        res.articles.map((e)=>{
         card.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="${e.urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${e.title}</h5>
        <p class="card-text">${e.description}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
     </div>`
        })
         
        console.log(res)
    }
    catch (error) {
        console.log(error.message);
     }
}
apifatch()


















// let fetchData1 = async () => {
//     try {
//       let getData = await fetch("https://jsonplaceholder.typicode.com/posts");
  
//       let response = await getData.json();
  
//       console.log(response);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   fetchData1();