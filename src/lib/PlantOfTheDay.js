import React from "react";

export default function() {
  return (
    <>
      <section class="secondSection">
        <h2 class="secondSectionHeadings">Plant of the Day</h2>
        <div class="secondSectionCard">
          <div class="secondSecImg">
            <img src="../images/Rectangle_3_et.png" alt="plant" />
          </div>
          <div class="plantInfo">
            <h3>
              Rockey mountain juniper, Wichita Blue <br />
              juniper, Tolleson's Blue Weeping juniper
            </h3>
            <p>Junipers scopulorum cvs</p>

            <div class="plantDescItems1">
              <h5 class="plantDescItemsHeading">Plant Type</h5>
              <p class="plantDescItemsPara">Conifer</p>
            </div>
            <div class="plantDescItems2">
              <h5 class="plantDescItemsHeading">Season</h5>
              <p class="plantDescItemsPara">April, May</p>
            </div>
            <div class="plantDescItems3">
              <h5 class="plantDescItemsHeading">Color</h5>
              <p class="plantDescItemsPara">Bluish, Green</p>
            </div>
            <div class="plantDescItems4">
              <h5 class="plantDescItemsHeading">Flower color</h5>
              <p class="plantDescItemsPara">No Flowers</p>
            </div>
            <div class="plantDescItems5">
              <h5 class="plantDescItemsHeading">Form</h5>
              <p class="plantDescItemsPara">Scale-like, Simple</p>
            </div>
            <div class="plantDescItems6">
              <h5 class="plantDescItemsHeading">texture</h5>
              <p class="plantDescItemsPara">Prickly</p>
            </div>

            <button type="button">Details</button>
          </div>
        </div>
      </section>
    </>
  );
}
