const body = document.querySelector("body");
const mode1 = document.querySelector(".mode1");
const mode2 = document.querySelector(".mode2");
const header = document.querySelector(".header");
const navbar = document.querySelector(".navbar");
const card = document.querySelectorAll(".cardlar div");
const input = document.querySelector(".input");
const inputt = document.querySelector("#inputt");
const select = document.querySelector("select");
const region = document.querySelector("#region");
const loader = document.querySelector(".loader");
const contires = document.querySelector(".contires");

//api

const api = "https://restcountries.com/v3.1/all";

//asking data from server

const add = async (url) => {
  const req = await fetch(url);
  const data = await req.json();

  loader.classList.add("active");

  showContent(data);
  myFunction(data);
};
add(api);

const mycheck = document.querySelector("#myCheck");
mycheck.addEventListener("click", () => {
  myFunction(data);
});

function myFunction() {
  let checkBox = document.getElementById("myCheck");
  if (checkBox.checked == true) {
    sorted();
  } else {
    alert(45615);
  }
}

//sort
function sorted() {
  const newCount = countries.sort((a, b) => {
    return a.population - b.population;
  });
}

const showContent = (countries) => {
  console.log(countries);

  countries.forEach((country) => {
    const { name, population, flags, region, capital } = country;
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");

    countryDiv.innerHTML = `
            <a href="state/index.html?name=${name.common}">
                <img src=${flags.png} alt="flag" height="160px">
                <h3>${name.common}</h3>
                <p> <span> Population:&nbsp&nbsp</span>${population}</p>
                <p class="regions"> <span> Region: &nbsp &nbsp &nbsp &nbsp </span> ${region}</p>
                <p> <span> Capital: &nbsp &nbsp &nbsp &nbsp </span> ${
                  capital == undefined ? "No Capital" : capital
                }</p>
            </a>
        `;
    contires.appendChild(countryDiv);

    // Night mode

    mode1.addEventListener("click", () => {
      mode2.style.display = "flex";
      mode1.style.display = "none";
      header.style.background = "rgb(32,44,54)";
      body.style.background = "rgb(32,44,54)";
      navbar.classList.add("navbar2");
      input.classList.add("input2");
      select.classList.add("select2");

      countryDiv.classList.add("card2");

      inputt.style.color = "white";
    });
    mode2.addEventListener("click", () => {
      mode2.style.display = "none";
      mode1.style.display = "flex";
      header.style.background = "rgb(243, 243, 243)";
      body.style.background = "rgb(196, 196, 196)";
      navbar.classList.remove("navbar2");
      input.classList.remove("input2");
      select.classList.remove("select2");

      countryDiv.classList.remove("card2");

      inputt.style.color = "black";
    });
    //////////////////// night mode - end /////////////////////
  });
};

/////////////////////

inputt.addEventListener("input", () => {
  const searchCountry = inputt.value.trim().toLowerCase();
  contires.childNodes.forEach((country) => {
    if (
      !country
        .querySelector("h3")
        .textContent.toLowerCase()
        .includes(searchCountry)
    ) {
      country.classList.add("hidden");
    } else {
      country.classList.remove("hidden");
    }
  });
});

//////////////////////////////////

region.addEventListener("change", () => {
  const regionEl = region.value.trim().toLowerCase();
  // console.log(regionEl);
  contires.childNodes.forEach((country) => {
    const regionEl = region.value.trim().toLowerCase();
    if (regionEl == "all") {
      country.classList.remove("hidden");
    } else if (
      !country
        .querySelector(".regions")
        .textContent.toLowerCase()
        .includes(regionEl)
    ) {
      country.classList.add("hidden");
    } else {
      country.classList.remove("hidden");
    }
  });
  inputt.value = "";
});

// const sortCounter = [
//   {
//     name: "Titanic",
//     dob: "1997",
//     reating: 7,
//   },
//   {
//     name: "Avatar",
//     dob: "2009",
//     reating: 6,
//   },
//   {
//     name: "Avangers",
//     dob: "2020",
//     reating: 10,
//   },
//   {
//     name: "Forsaj",
//     dob: "2010",
//     reating: 9,
//   },
// ];

//sort
