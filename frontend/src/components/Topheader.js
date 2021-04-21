import React from "react";
import "../main.css";
const Topheader = () => {
  return (
    <>
      <div
        id="carousel-example-1z"
        className="carousel slide carousel-fade pt-4"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carousel-example-1z"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carousel-example-1z" data-slide-to="1"></li>
          <li data-target="#carousel-example-1z" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner " role="listbox">
          <div className="carousel-item active">
            <div className="view1 pr-5">
              <div className="mask rgba-black-strong  d-flex justify-content-center align-items-center">
                <div className="text-center white-text mx-5 wow fadeIn">
                  <h1 className="mt-4 pr-5 pt-5 pb-5">
                    <strong>Welcome to my ecommerce site</strong>
                  </h1>

                  <h3 className="mb-4 pr-5 pt-5 pb-5">
                    Best items are available{" "}
                  </h3>

                  <h4 className="mb-4 d-none pr-5 pb-5 d-md-block">
                    India's biggest online store for Mobiles, Fashion
                    (Clothes/Shoes), Electronics, <br />
                    Home Appliances, Books Home, Furniture, Grocery, Jewelry,
                    Sporting goods.
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="view2 pr-5">
              <div className="mask rgba-black-strong  d-flex justify-content-center align-items-center">
                <div className="text-center white-text mx-5 wow fadeIn">
                  <h1 className="mt-4 pr-5 pt-5 pb-5">
                    <strong>Welcome to my ecommerce site</strong>
                  </h1>

                  <h3 className="mb-4 pr-5 pt-5 pb-5">
                    Best items are available{" "}
                  </h3>

                  <h4 className="mb-4 d-none pr-5 pb-5 d-md-block">
                    India's biggest online store for Mobiles, Fashion
                    (Clothes/Shoes), Electronics, <br />
                    Home Appliances, Books Home, Furniture, Grocery, Jewelry,
                    Sporting goods.
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="view3 pr-5">
              <div className="mask rgba-black-strong  d-flex justify-content-center align-items-center">
                <div className="text-center white-text mx-5 wow fadeIn">
                  <h1 className="mt-4 pr-5 pt-5 pb-5">
                    <strong>Welcome to my ecommerce site</strong>
                  </h1>

                  <h3 className="mb-4 pr-5 pt-5 pb-5">
                    Best items are available{" "}
                  </h3>

                  <h4 className="mb-4 d-none pr-5 pb-5 d-md-block">
                    India's biggest online store for Mobiles, Fashion
                    (Clothes/Shoes), Electronics, <br />
                    Home Appliances, Books Home, Furniture, Grocery, Jewelry,
                    Sporting goods.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#carousel-example-1z"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel-example-1z"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default Topheader;
