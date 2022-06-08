function ventaProdukto(e) {
  console.log(e.target.value);
}

function handleChange(e) {
  console.log(e.target.previousElementSibling.textContent);
  let h2 = document.createElement("h3");
  h2.id = e.target.previousElementSibling.textContent
  h2.textContent = e.target.previousElementSibling.textContent;
  if (e.target.checked) document.body.append(h2);
  else                  document.getElementById(h2.id).remove();
}
