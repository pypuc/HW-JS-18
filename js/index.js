// 1
const categoriesList = document.querySelectorAll("#categories .item");
console.log(`у списку ${categoriesList.length} категорії`);
categoriesList.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  const elementsSum = category.querySelectorAll("ul li").length;
  console.log(`Категорія: ${categoryTitle}`);
  console.log(`Кількість елементів: ${elementsSum}`);
});

// 2
const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];
const ingredientsList = document.querySelector("#ingredients");
const items = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  return li;
});
ingredientsList.append(...items);

// 3
const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];
  const gallery = document.querySelector("#gallery");
  gallery.style.display = "flex";
  gallery.style.justifyContent = "space-between";
  gallery.style.listStyle = "none";
  gallery.style.padding = "0";
  gallery.style.margin = "0";
  gallery.style.gap = "20px";
  images.forEach(({ url, alt }) => {
    const listItem = document.createElement("li");
    const image = document.createElement("img");
    image.src = url;
    image.alt = alt;
    image.style.width = "100%";
    image.style.borderRadius = "5px";
    image.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    listItem.appendChild(image);
    gallery.appendChild(listItem);
  });
  
