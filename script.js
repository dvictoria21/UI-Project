const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bd1fa12b49msh6da84797acf39b6p153d6djsn24ee2287ea04",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};

let url = "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=breakfast";

fetch(url, options)
  .then((res) => res.json())
  .then((res) => {
    let recipe1name = res.results[2].name;
    let recipe2name = res.results[4].name;
    let recipe3name = res.results[11].name;
    let recipe4name = res.results[7].name;
    let recipe5name = res.results[0].name;
    
    let recipe1 = document.querySelector("#recipe1");
    recipe1.innerText = recipe1name;
    let recipe2 = document.querySelector("#recipe2");
    recipe2.innerText = recipe2name;
    let recipe3 = document.querySelector("#recipe3");
    recipe3.innerText = recipe3name;
    let recipe4 = document.querySelector("#recipe4");
    recipe4.innerText = recipe4name;
    let recipe5 = document.querySelector("#recipe5");
    recipe5.innerText = recipe5name;

    let breakfastItems = document.querySelectorAll(".breakfastItems");
    let menuToggle = document.querySelector("#menuToggle");

    breakfastItems.forEach((breakfastItem) => {
      breakfastItem.addEventListener("click", () => {
        menuToggle.checked = false;
      });
    });

    function showRecipe(index) {
      let h2 = document.querySelector(".recipeName");
      h2.innerText = res.results[index].name;
      h2.style.textAlign = "center";

      let img = document.querySelector(".recipeImage");
      let recipeImage = res.results[index].thumbnail_url;
      img.src = recipeImage;

      let description = document.querySelector(".recipeDescription");
      let descriptionText = res.results[index].description;
      description.innerText = descriptionText;
      description.style.textAlign = "center";
      description.style.marginTop = "12px";

      let ingredients = document.querySelector(".recipeIngredients");
      ingredients.innerText = "";
      let recipeIngredients = res.results[index].sections[0].components;
      let ul2 = document.createElement("ul");
      ingredients.appendChild(ul2);

      for (let i = 0; i < recipeIngredients.length; i++) {
        let li2 = document.createElement("li");
        li2.innerText = recipeIngredients[i].raw_text;
        ul2.appendChild(li2);
      }

      let instructions = document.querySelector(".recipeInstructions");
      instructions.innerHTML = "";
      let recipeInstructions = res.results[index].instructions;
      let ul = document.createElement("ul");
      instructions.appendChild(ul);

      for (let i = 0; i < recipeInstructions.length; i++) {
        let li = document.createElement("li");
        li.innerText = recipeInstructions[i].display_text;
        ul.appendChild(li);
      }
    }

    recipe1.addEventListener("click", () => {
      showRecipe(2);
    });

    recipe2.addEventListener("click", () => {
      showRecipe(4);
    });

    recipe3.addEventListener("click", () => {
      showRecipe(11);
    });

    recipe4.addEventListener("click", () => {
      showRecipe(7);
    });

    recipe5.addEventListener("click", () => {
      showRecipe(0);
    });
  });