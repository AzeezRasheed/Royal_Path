import React from "react";

import {
  Footer,
  OurServices,
  Possibility,
  WhatROYAL,
  Header,
} from "../../containers";
import { CTA, Brand, Navbar } from "../../components";

function ForNavbar() {
  return (
    <div>
      <Navbar />
      <Header />
      <WhatROYAL />
      <OurServices />
      <Possibility />
      <Brand />
      <CTA />
      <Footer />
    </div>
  );
}

export default ForNavbar;
