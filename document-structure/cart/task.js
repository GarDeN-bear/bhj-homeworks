let products = Array.from(document.getElementsByClassName('product'));
let cartProducts =
    Array.from(document.getElementsByClassName('cart__products'))[0];

products.forEach((el, i) => {
  let dec = el.querySelector('.product__quantity-control_dec');
  let inc = el.querySelector('.product__quantity-control_inc');
  let value = el.querySelector('.product__quantity-value');
  let productAdd = el.querySelector('.product__add');
  let img = el.querySelector('.product__image');

  dec.addEventListener('click', () => {
    let valueInt = Number(value.textContent);
    value.textContent = (Math.max(0, --valueInt)).toString();
  });

  inc.addEventListener('click', () => {
    let valueInt = Number(value.textContent);
    value.textContent = (++valueInt).toString();
  });

  productAdd.addEventListener('click', () => {
    function addCartProduct(el) {
      let div = document.createElement('div');
      div.classList.add('cart__product');
      let imgElevemt = document.createElement('img');
      imgElevemt.classList.add('cart__product-image');
      imgElevemt.setAttribute('src', img.getAttribute('src'));
      let count = document.createElement('div');
      count.classList.add('cart__product-count');
      count.textContent = value.textContent;
      div.setAttribute('data-id', el.getAttribute('data-id'));
      div.append(imgElevemt, count);

      document.getElementsByClassName('cart__products').item(0).append(div);
    }

    function inreaseCountForCartProduct() {
      let delay = 500;
      let delayBetweenDrawing = 10;
      let count = cartProduct.querySelector('.cart__product-count');
      let imgCopy = document.createElement('img');
      imgCopy.classList.add('cart__product-image');
      imgCopy.setAttribute('src', img.getAttribute('src'));
      imgCopy.style.position = 'absolute';
      let rectProductImg = img.getBoundingClientRect();
      let rectBasketImg = cartProduct.querySelector('.cart__product-image')
                              .getBoundingClientRect();
      imgCopy.style.left = rectProductImg.left;
      imgCopy.style.top = rectProductImg.top;
      let stepLeft = (rectBasketImg.left - rectProductImg.left) / delay *
          delayBetweenDrawing;
      let stepTop = (rectBasketImg.top + 0.5 * rectBasketImg.height -
                     rectProductImg.top) /
          delay * delayBetweenDrawing;
      document.getElementsByClassName('product').item(i).append(imgCopy);

      count.textContent =
          (Number(count.textContent) + Number(value.textContent)).toString();

      function drawImg(time) {
        imgCopy.style.left =
            (imgCopy.getBoundingClientRect().left + stepLeft).toString() + 'px';
        imgCopy.style.top =
            (imgCopy.getBoundingClientRect().top + stepTop).toString() + 'px';
      }

      let start = Date.now();
      let id = setInterval(() => {
        let time = Date.now() - start;
        if (time > delay) {
          clearInterval(id);
          document.getElementsByClassName('product')
              .item(i)
              .querySelector('.cart__product-image')
              .remove();
          return;
        }
        drawImg(time);
      }, delayBetweenDrawing);
    }

    let cartProductsSelect =
        Array.from(cartProducts.querySelectorAll('.cart__product'));
    let cartProduct = undefined;

    if (cartProductsSelect.length > 0) {
      cartProduct = cartProductsSelect.find((cartEl) => {
        if (cartEl.getAttribute('data-id') === el.getAttribute('data-id')) {
          return cartEl;
        }
      });
    };

    if (cartProduct !== undefined) {
      inreaseCountForCartProduct();
    } else {
      addCartProduct(el);
    }
  });
});
