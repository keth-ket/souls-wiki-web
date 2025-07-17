import React from "react";
import testImage from "@/public/test.jpg";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const placeholderText = `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.`;
export default function Page() {
  return (
    <>
      <h1>TITLE</h1>
      <div>
        <div>
        <Image
          src={testImage}
          alt="Elden Ring"
          width={200}
          height={900}
          className="float-right clear-right m-2"
        />
        </div>
        <h2 className="border-b border-[#a2a9b1] overflow-hidden">
        <span>Your Text Here</span>
        </h2>
          wtf am i doing?
          <p>?????</p>
          <>
            <h2>Subheading</h2>
            <p>
              {placeholderText}
              {placeholderText}
            </p>
          </>
      </div>
    </>
  );
}
