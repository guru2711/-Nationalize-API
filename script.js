function myFunction() {
  var x = document.getElementById("myText").value;
  // document.getElementById("display").innerHTML = x;
  // console.log(x)
  get(x);
}

async function get(myFunction) {
  const data = await fetch(`https://api.nationalize.io/?name=${myFunction}`);
  const display = await data.json();
  const show = await create(display);
  console.log(show);
}

function create(show) {
  const para = document.querySelector("#display");
  para.innerText = `country: ${show.country[0]["country_id"]} => probability: ${show.country[0].probability}
        country: ${show.country[1]["country_id"]} => probability: ${show.country[1].probability}`;
  document.body.append(para);
}
