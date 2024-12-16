let item=
{
    id:101,
    name:'Samsung',
    imgurl:"https://tse3.mm.bing.net/th?id=OIP.XwJixckSlwGNMh7q68fPlAHaEo&pid=Api&P=0&h=180",
    price:50000,
    quantity:1,
    total:50000
}

let htmlcode=`<tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td><img width=50px height="40px" ; src="${item.imgurl}" alt=""></td>
                    <td> ${item.price} &#8377</td>
                    <td>
                        <i id="minus-btn" class="bi bi-dash-circle-fill p-2"></i>
                        <span id="qty" >${item.quantity} </span>
                        <i id="plus-btn" class="bi bi-plus-circle-fill p-2"></i>
                    </td>
                    <td id="total">${item.total*item.quantity} </td>
                </tr>`

let tbody=document.getElementById('display-data')
tbody.innerHTML=htmlcode;


let qtyTag = document.getElementById('qty');
let totalTag = document.getElementById('total');
let minusBtn = document.getElementById('minus-btn');
let plusBtn = document.getElementById('plus-btn');

function increment() {
    item.quantity++;
    qtyTag.innerText = item.quantity;
    totalTag.innerText = item.quantity * item.price; // Update total price
}
function decrement() {
    if (item.quantity > 1) {
        item.quantity--;
        qtyTag.innerText = item.quantity;
        totalTag.innerText = item.quantity * item.price;
    }
}

// Attach event listeners after buttons are in the DOM
minusBtn.addEventListener('click', decrement);
plusBtn.addEventListener('click', increment);
