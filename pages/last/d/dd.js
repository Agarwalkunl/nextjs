import React from "react";
import Image from "next/image";
import { LazyLoadImage } from "react-lazy-load-image-component";
const images = [
  "/gff.jpg",
  "/jj.jpg",
  "/ff.jpg",
  "/ff.jpg",
  "/d.jpg",
  "/dd.jpg",
];
import "react-lazy-load-image-component/src/effects/blur.css";

function dd() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* <Image src=""></Image> */}
      <Image
        alt="ijaiosdf"
        height="300"
        // src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.carvana.com%2Fvehicle%2F2426642&psig=AOvVaw0a3FH5QD2g4o5UOXiwWPHR&ust=1681356291818000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCPDg_sbwoP4CFQAAAAAdAAAAABAI"
        src="https://img.freepik.com/free-photo/breathtaking-shot-beautiful-stones-turquoise-water-lake-hills-background_181624-12847.jpg"
        width="300"
        loading="lazy"
      />
    </div>
  );
}

export default dd;
