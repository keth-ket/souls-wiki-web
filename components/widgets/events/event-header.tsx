import TableOfContents from "@/components/general/table-of-contents"
import Image from "next/image";

export default function EventHeader({ title, description, imageSrc, imageWidth, imageHeight, sections }) {
  return (
    <div className=" ">
      <div>
        
        <h1 className="border-b-2 border-[#a2a9b1] pb-2 pt-4 mt-8 scroll-mt-24 text-3xl font-bold">{title}</h1>
        <Image
              src={imageSrc}
              alt="Event Header Image"
              width={imageWidth}
              height={imageHeight}
              className="float-right clear-right m-2"
            />
        <p className="mt-4 text-lg">{description}</p>
      </div>
      <div>
      <TableOfContents sections = {sections}/>
     </div>
    </div>
  )
}
