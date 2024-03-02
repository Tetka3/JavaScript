const products = [
    {
        id: 1,
        img: "./images/shoe2.jpeg",
        title: "Rubber Shoes"
    }, 
    {
        id: 2,
        img: "./images/shoe3.jpeg",
        title: "Rubber Shoes"
    },
    {
        id: 3,
        img: "./images/shoe1.jpeg",
        title: "Rubber Shoes"
    }, 
    {
        id: 4,
        img: "./images/bag1.jpeg",
        title: "My Handbag"
    },
    {
        id: 5,
        img: "./images/bag2.jpeg",
        title: "My Handbag"
    },
    {
        id: 6,
        img: "./images/bag3.jpeg",
        title: "My Handbag"
    },
    {
        id: 7,
        img: "./images/bag4.jpeg",
        title: "My Handbag"
    },
    {
        id: 8,
        img: "./images/bag2.jpeg",
        title: "My Handbag"
    },
    {
        id: 9,
        img: "./images/bag1.jpeg",
        title: "My Handbag"
    },
    {
        id: 10,
        img: "./images/bag2.jpeg",
        title: "My Handbag"
    },
    {
        id: 11,
        img: "./images/bag3.jpeg",
        title: "My Handbag"
    },
    {
        id: 12,
        img: "./images/bag4.jpeg",
        title: "My Handbag"
    }
];

let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
    <div class="product">
        <img src="${product.img}" />
        <p>${product.title}</p>
        <button class="js-add-to-cart" data-product-id="${product.id}">Add To Cart</button>
    </div>
    `
    
})

document.querySelector('.js-products').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;

            let matchingItem; 

            cart.forEach((item) => {
                if (productId === item.productId) {
                    matchingItem = item;
                }
            });
            if (matchingItem) {
                matchingItem.quantity += 1;
            } else {
                cart.push({
                    productId: productId,
                    quantity: 1
                });
            }
            
            let cartQuantity = 0;

            cart.forEach((item) => {
                cartQuantity += item.quantity;
            });

            document.querySelector('.js-quantity').innerHTML = cartQuantity;
            console.log(cartQuantity);
            console.log(cart);
        });
    });