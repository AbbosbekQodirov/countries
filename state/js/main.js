const img=document.querySelector('#img')
const stateName=document.querySelector('.name')
const native=document.querySelector(".native") 
const populationn=document.querySelector(".population") 
const regionn=document.querySelector(".region") 
const sub_region=document.querySelector(".sub-region") 
const capital=document.querySelector(".capital") 
const level=document.querySelector(".level") 
const currencies=document.querySelector(".currencies") 
const languages=document.querySelector(".languages")    
const borders=document.querySelector(".borders") 

const loader=document.querySelector(".loader")    

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const country = urlParams.get('name');
console.log(country);

const api=`https://restcountries.com/v3.1/name/${country}`

//asking data from server

const add = async (url)=>{
    const req = await fetch(url);
    const data = await req.json();

    loader.classList.add("active")

    showContent(data)
}

add(api)

const showContent = (countries)=>{
    const currensOne=Object.keys(countries[0].currencies)
    const languagesOne = Object.keys(countries[0].languages);

    const { name, population, flags, region } = countries[0];
    
    console.log(countries);
    img.src = `${countries[0].flags.png}`
    stateName.textContent = `${name.common}`
    native.textContent =`${countries[0].name.official}`
    populationn.textContent =`${population}`
    regionn.textContent =`${region}`
    sub_region.textContent =`${countries[0].subregion}`
    capital.textContent =`${countries[0].capital}`
    level.textContent = `${countries[0].tld}`;
    currencies.textContent = `${countries[0].currencies[`${currensOne[0]}`].name}`;
    
    languages.textContent =
      `${countries[0].languages[`${languagesOne[0]}`]} ` +
      ` ${countries[0].languages[`${languagesOne[1]}`] == undefined? "" :countries[0].languages[`${languagesOne[1]}`]} `;

    borders.textContent =`${countries[0].borders}`

}

