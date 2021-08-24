const name = document.getElementById("mytext").value;
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  //   console.log(value);

  get(name);
});

async function get(name) {
  const data = await fetch(`https://api.nationalize.io/?name=${name}`);
  const display = await data.json();
  const show = await create(display.country);
  //   console.log(show);
}

function create(show) {
  const para = document.querySelector("#display");
  para.innerText = `country: ${show[0]["country_id"]} => probability: ${show[0].probability}
  country: ${show[1]["country_id"]} => probability: ${show[1].probability}`;
  document.body.append(para);
}
