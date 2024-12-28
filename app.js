let product = [
  {
    pname: "samsung mobile",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.O-gRqcByJK1mGi5PGsL57AHaHa&pid=Api&P=0&h=180",
    color: "black",
    price: 20000,
  },
  {
    pname: "boat earpods",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.FeK4fwoGvubLp-d2KNLdSAAAAA&pid=Api&P=0&h=180",
    color: "white",
    price: 26622,
  },
  {
    pname: "hp laptop",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.YHeyWW3_DmbK-EboyJ2IQQHaE9&pid=Api&P=0&h=180",
    color: "blue",
    price: 18744,
  },
  {
    pname: "television",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.1T37mZxAtak9-xQsY94dIwHaHa&pid=Api&P=0&h=180",
    color: "pink",
    price: 19097,
  },
  {
    pname: "iphone mobile",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.zJxZpPAblp-6ma0jE7mhPAHaHa&pid=Api&P=0&h=180",
    color: "green",
    price: 14656,
  },
  {
    pname: "refrigerator",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.fOnlO7L9U282E640JxnEnAHaHa&pid=Api&P=0&h=180",
    color: "brown",
    price: 40200,
  },
  {
    pname: "redmi mobile",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.a39n1VqidS8oNzJMYdCNhgHaHa&pid=Api&P=0&h=180",
    color: "gray",
    price: 12009,
  },
  {
    pname: "buld",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.kctfFV0c3vrkJ6NTTtpd1gHaHa&pid=Api&P=0&h=180",
    color: "brown",
    price: 40200,
  },
  {
    pname: "keyboard",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.hhHSIhNgtqJW75OuMqfBwQHaEK&pid=Api&P=0&h=180",
    color: "brown",
    price: 40200,
  },
  {
    pname: "mouse",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.dvWPuT-wWTY_7IAk2TwHCAHaHa&pid=Api&P=0&h=180",
    color: "brown",
    price: 40200,
  },
];

let allproducts = document.getElementById("tablebody");
let totalPrice = document.getElementById("totalPrice");

//~ display all the properties
function searchProduct(product) {
  allproducts.innerHTML = "";
  product.forEach(({ pname, image, color, price }, index) => {
    allproducts.innerHTML += `<tr>
          <td>${index + 1}</td>
          <td>${pname}</td>
          <td><img src="${image}"></td>
          <td>${color}</td>
          <td>${price}</td>
        </tr>`;
  });
  // console.log(allproducts);
  totalPrice.innerText = `${searchPrice()}`;

  // console.log(totalPrice);
}
searchProduct(product);

//~ disply the total price
function searchPrice() {
  let eachPrice = product.map(({ price }) => {
    return price;
  });
  console.log(eachPrice);
  let finalPrice = eachPrice.reduce((a, b) => {
    return a + b;
  });
  console.log(finalPrice);
  return finalPrice;
}

//~ to filter the products based on the search
let searchValue = document.getElementById("searched");

function filteredProduct() {
  let searchedvalue = searchValue.value.toLowerCase().trim();

  let filteredProducts = product.filter(({ pname, color }) => {
    pname = pname.toLowerCase();
    return pname.includes(searchedvalue) || color.includes(searchedvalue);
  });

  searchProduct(filteredProducts);

  //~ if the product is not found then the total price is 0 and it will give the error msg
  if (filteredProducts.length === 0) {
    allproducts.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; height:40px">Oops!! Product not found</td>
      </tr>`;
    totalPrice.innerText = "0";
    return;
  }
  totalPrice.innerText = `${totalFilteredPrice(filteredProducts)}`;
}

//~ to reduce the final product based on the filter
function totalFilteredPrice(filteredProducts) {
  let filteredProductPrice = filteredProducts.map(({ price }) => {
    return price;
  });
  console.log(filteredProductPrice);

  let finalFilteredProductPrice = filteredProductPrice.reduce((a, b) => {
    return a + b;
  });
  console.log(finalFilteredProductPrice);

  return finalFilteredProductPrice;
}
