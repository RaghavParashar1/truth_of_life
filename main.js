const switches = document.querySelectorAll("input[type=checkbox]");
for(const s of switches) s.addEventListener("change", check);

function check(e) {
  //count the number of checked switches:
  let n = 0;
  for(const s of switches) {
    if(s.checked) n++;
  }
  // if there is more than 2 checked:
  if(n > 2) e.target.checked = false;
}