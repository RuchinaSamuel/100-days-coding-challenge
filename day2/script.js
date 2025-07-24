const icon = document.querySelector(".fa-bars");
      const dropDownMenu = document.getElementById("dropDownMenu");

      icon.addEventListener("click", () => {
        dropDownMenu.classList.toggle("hidden");
      });

      document.addEventListener("click", (e) => {
        if (!dropDownMenu.contains(e.target) && !icon.contains(e.target)) {
          dropDownMenu.classList.add("hidden");
        }
      });

    //   ...product display

      const productImages = {
        product1: [
          "./asset/shoes/shoe1a.webp",
          "./asset/shoes/shoe1.webp",
          "./asset/shoes/shoe1b.webp",
          "./asset/shoes/shoe1c.webp",
          "./asset/shoes/shoe1d.webp",
        ],

        product2: [
          "./asset/shoes/shoe2.webp",
          "./asset/shoes/shoe2a.webp",
          "./asset/shoes/shoe2b.webp",
          "./asset/shoes/shoe2c.webp",
          "./asset/shoes/shoe2d.webp",
        ],

        product3: [
          "./asset/shoes/shoe3.webp",
          "./asset/shoes/shoe3a.webp",
          "./asset/shoes/shoe3b.webp",
          "./asset/shoes/shoe3c.webp",
          "./asset/shoes/shoe3d.webp",
        ],

        product4: [
          "./asset/shoes/shoe4.webp",
          "./asset/shoes/shoe4a.webp",
          "./asset/shoes/shoe4b.webp",
          "./asset/shoes/shoe4c.webp",
          "./asset/shoes/shoe4d.webp",
        ],

        product5: [
          "./asset/shoes/shoe5.webp",
          "./asset/shoes/shoe5a.webp",
          "./asset/shoes/shoe5b.webp",
          "./asset/shoes/shoe5c.webp",
          "./asset/shoes/shoe5d.webp",
        ],
        product6: [
          "./asset/shoes/shoe6.webp",
          "./asset/shoes/shoe6a.webp",
          "./asset/shoes/shoe6b.webp",
          "./asset/shoes/shoe6c.webp",
          "./asset/shoes/shoe6d.webp",
        ],
        product7: [
          "./asset/shoes/shoe7.webp",
          "./asset/shoes/shoe7a.webp",
          "./asset/shoes/shoe7c.webp",
          "./asset/shoes/shoe7d.webp",
        ],
        product8: [
          "./asset/shoes/shoe8.webp",
          "./asset/shoes/shoe8a.webp",
          "./asset/shoes/shoe8b.webp",
          "./asset/shoes/shoe8c.webp",
        ],
        product9: [
          "./asset/shoes/shoe9.webp",
          "./asset/shoes/shoe9a.webp",
          "./asset/shoes/shoe9b.webp",
          "./asset/shoes/shoe9c.webp",
          "./asset/shoes/shoe9d.webp",
        ],
        product10: [
            "./asset/shoes/shoe10.webp",
            "./asset/shoes/shoe10a.webp",
            "./asset/shoes/shoe10b.webp",
            "./asset/shoes/shoe10c.webp",
            "./asset/shoes/shoe10d.webp",
          ],

          product11: [
            "./asset/shoes/shoe11.webp",
            "./asset/shoes/shoe11a.webp",
            "./asset/shoes/shoe11b.webp",
            "./asset/shoes/shoe11c.webp",
            "./asset/shoes/shoe11d.webp",
          ],
          product12: [
            "./asset/shoes/shoe12a.webp",
            "./asset/shoes/shoe12b.webp",
            "./asset/shoes/shoe12c.webp",
            "./asset/shoes/shoe12d.webp",
            "./asset/shoes/shoe12e.webp",
          ],
      };

      document.querySelectorAll(".product").forEach((productEl) => {
        const id = productEl.dataset.id;
        const images = productImages[id];

        const imgEl = productEl.querySelector(".product-img");
        const rightBtn = productEl.querySelector(".right-arrow");
        const leftBtn = productEl.querySelector(".left-arrow");

        let currentIndex = 0;

        rightBtn.addEventListener("click", function () {
          currentIndex = (currentIndex + 1) % images.length;
          imgEl.src = images[currentIndex];
        });

        leftBtn.addEventListener("click", () => {
          currentIndex = (currentIndex - 1 + images.length) % images.length;
          imgEl.src = images[currentIndex];
        });
      });

      document.querySelectorAll(".productDropDown").forEach((items) => {
        const viewMoreBtn = document.getElementById("viewMoreBtn");
        viewMoreBtn.addEventListener("click", () => {
          items.classList.toggle("hidden");
        });
      });




// ......cart display
const shoppingCart=document.querySelectorAll(".shoppingCart");
const cartContainer=document.querySelectorAll(".cartContainer");

shoppingCart.forEach((cartBtn)=>{
    cartBtn.addEventListener("click", ()=>{
        const id=cartBtn.dataset.id;
        const cartModel=document.querySelector(`.cartContainer[data-id="${id}"]`);
        cartModel.classList.remove("hidden");
    });
});

cartContainer.forEach((cartModal)=>{
    const closeBtn=cartModal.querySelector(".closeModalBtn");
    closeBtn.addEventListener("click", ()=>{
        cartModal.classList.add("hidden")
    })
})
