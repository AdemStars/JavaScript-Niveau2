var personnes =[
    {
    id:0,
    prenom: "Jules",
     Nom: "Ferry",
     age: 50,
},
 
 {
    id:1,
    prenom: "gerard",
     Nom: "briaud",
     age: 30,
 },
 
 {
    id:2,
    prenom: "Alexandre",
     Nom: "Dumas",
     age: 28,
  },
 
 {
    id:3,
    prenom: "Remi",
     Nom: "Gabin",
     age: 25,
 }
];
 
const cafeList = document.querySelector('#list');
const form = document.querySelector('#form');
 
function renderCafe(doc){
    console.log(doc);
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');
    let cross = document.createElement('div');
 
    li.setAttribute('data-id', doc.id);
    name.textContent = doc.prenom;
    city.textContent = doc.Nom;
    cross.textContent = 'x';
    
    li.appendChild(name);
    li.appendChild(city);
    li.appendChild(cross);
 
    cafeList.appendChild(li);
    cross.addEventListener('click', (e) => {
        var list=  document.getElementById("list");
            list.removeChild(list.childNodes[0]);
            enleve=personnes.splice((e.target.parentElement.getAttribute('data-id')),1); 
            console.log(personnes);
       
     });
}
 
personnes.forEach(personne=>{
        renderCafe(personne)
    })
 
form.addEventListener('submit', (e) => {
    e.preventDefault();
   personnes.push({
       id:personnes.length,
        Nom: form.name.value,
        prenom: form.lastname.value
    });
   
    renderCafe(personnes[personnes.length-1])
    form.name.value = '';
    form.lastname.value = '';
});
 
