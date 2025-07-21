import TableOfContents from "@/components/general/table-of-contents"
import Image from "next/image";
import { Star, Zap, Drama } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"

const filledStar = "text-yellow-500 fill-yellow-500 w-4 h-4 mr-1 inline";
const emptyStar = "text-gray-300 fill-gray-300 w-4 h-4 mr-1 inline" ;
const redStar = "text-red-500 fill-red-400 w-4 h-4 mr-1 inline";
const zapIcon = "text-black fill-yellow-500 mr-1 inline ";
const dramaIcon = "text-black fill-blue-500 mr-1 inline ";

function printStars(rating, isOverall = false) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if(isOverall){
      stars.push(<Star
                  key={i}
                  className={i <= rating ? redStar : emptyStar}
                />
              );
      continue;
    }
    stars.push(<Star 
                  key={i} 
                  className={i <= rating ? filledStar : emptyStar} 
                />
              );
  }

  return stars;
}

export default function PetHeader({ title, description, imageSrc, petName, journeyStars, pvpStars, bossesStars, overallStars, mainRole, energyGain, sections }) {
  return (
    <div className="">
      <div>
        <h1 className="border-b-2 border-[#a2a9b1] pb-2 pt-4 mt-8 scroll-mt-24 text-4xl font-bold">{title}</h1>
          <div className="float-right clear-right m-2">
          <Table className = " max-w-[400px] float-right">
            <TableBody className="border-3">
                <TableRow>
                  <TableCell colSpan={2} className="text-center  bg-blue-100">{petName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2} className="text-center">
                    <Image
                      src={imageSrc}
                      alt="Pet Header Image"
                      className="m-auto"
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2} className="text-center  bg-gray-100 table-base">Information</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell rowSpan={5} className="text-center  bg-gray-100 table-base"><Star className={redStar} /> Usefullness</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-left table-base">Journey: {printStars(journeyStars, false)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-left table-base">PvP: {printStars(pvpStars, false)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-left table-base">Bosses: {printStars(bossesStars, false)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-left table-base">Overall: {printStars(overallStars, true)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center bg-gray-100 table-base"><Drama className={dramaIcon}/> Main role </TableCell>
                  <TableCell className="text-left table-base">{mainRole} </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center bg-gray-100 table-base"><Zap className={zapIcon}/> Energy Gain </TableCell>
                  <TableCell className="text-left table-base">{energyGain} </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p className="mt-4 text-lg">{description}</p>
        </div>
      <div>
        <TableOfContents sections={sections} />
      </div>
    </div>
  )
}
