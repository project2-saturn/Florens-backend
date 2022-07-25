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
            By exploring our range with more than 100,000 plants,{'\n'} trees and
            flowers, you will learn about the{'\n'} tree or flower you've found while
            walking on your favourite park
          </p>
        </div>
        <div class="firstSectionSecondCard">
          <img src="../images/add-your-plants.png" alt="plant" />
          <h2 class="firstSectionHeadings">
            Save your
            findings
          </h2>
          <p class="firstSectionParagraph">
            Keep an eye on all your findings from our{'\n'} collection by creating a
            library with the plants{'\n'} profile you've found.
          </p>
        </div>
        <div class="firstSectionThirdCard">
          <img src="../images/save-your-findings.png" alt="plant" />
          <h2 class="firstSectionHeadings">
            Add your own
            plants
          </h2>
          <p class="firstSectionParagraph">
            Are you an expert, or have some sort of{'\n'} knowledge? You can
            contribute to our library{'\n'} by adding your research
          </p>
        </div>
      </section>
    </>
  );
}
