var allProducts = document.querySelectorAll (".list li")

  var content = document.querySelector("#content")

  var btn = document.querySelector("#Cart")

  var total = document.querySelector("#total-price")

  var totalPrice = 0;

  allProducts.forEach(function (item){
      item.onclick = function (){

        totalPrice +=  parseInt (item.getAttribute ("price"))
        content.innerHTML += item.textContent + " / " ;

        if (content.innerHTML != "" ) {
            btn.style.display = "block"
        }
        if (content.innerHTML != "" ) {
            content.style.display = "block"
        }
        if (total.innerHTML != " " ){
            total.style.display ="block"
        }
      }
      btn.onclick = function() {
        total.innerHTML = (totalPrice)
      }
  })

// ///////







  