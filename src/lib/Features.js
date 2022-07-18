import React from "react";
import {Link} from 'react-router-dom';

export default function() {
  return (
    <>
      <section class="firstSection">
        <div class="firstSectionFirstCard">
          <img src="../images/be-an-expert.png" alt="plant" />
          <h2 class="firstSectionHeadings">
            Be an
            expert
          </h2>
          <p class="firstSectionParagraph">
            By exploring or range with more than 100,000 plants, trees and
            flowers, you will laern about the tree or flower you've found while
            walking on your fovourite park
          </p>
        </div>
        <div class="firstSectionSecondCard">
          <img src="../images/add-your-plants.png" alt="plant" />
          <h2 class="firstSectionHeadings">
            Save your
            findings
          </h2>
          <p class="firstSectionParagraph">
            Keep an eye on all your findings from our collectionby creating a
            librarywith the plants profile you've found.
          </p>
        </div>
        <div class="firstSectionThirdCard">
          <img src="../images/save-your-findings.png" alt="plant" />
          <h2 class="firstSectionHeadings">
            Add your own
            plants
          </h2>
          <p class="firstSectionParagraph">
            Are you an expert, or have some sort of knowledge? you can
            contribute with our libraryby adding your your research
          </p>
        </div>
      </section>
    </>
  );
}
