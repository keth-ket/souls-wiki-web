import PetsPage from '@/components/widgets/pets/pets'
import React from "react";
import testImage from "@/public/images/pets/pets-template/pet-template.png";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
// Placeholder text for the event description and sections
const placeholderText = `Lorem ipsum dolor sit amet consectetur adipiscing elitLorem ipsum dolor sit amet consectetur adipiscing elitLorem ipsum dolor sit amet consectetur adipiscing elit
Lorem ipsum dolor sit amet consectetur adipiscing elitLorem ipsum dolor sit amet consectetur adipiscing elitLorem ipsum dolor sit amet consectetur adipiscing elit
Lorem ipsum dolor sit amet consectetur adipiscing elitLorem ipsum dolor sit amet consectetur adipiscing elitLorem ipsum dolor sit amet consectetur adipiscing elit
Lorem ipsum dolor sit amet consectetur adipiscing elitLorem ipsum dolor sit amet consectetur adipiscing elitLorem ipsum dolor sit amet consectetur adipiscing elit
Lorem ipsum dolor sit amet consectetur adipiscing elitLorem ipsum dolor sit amet consectetur adipiscing elitLorem ipsum dolor sit amet consectetur adipiscing elit
Lorem ipsum dolor sit amet consectetur adipiscing elitLorem ipsum dolor sit amet consectetur adipiscing elitLorem ipsum dolor sit amet consectetur adipiscing elit.`;

// Define the sections for the event page
const sections = [
    {
      title: 'Skills',
      content: (
        <>
          <div className='float-left flex-direction-column p-2'>
            <Table className = " w-[300px]">
            <TableBody className="border-3">
                <TableRow>
                  <TableCell rowSpan={4} className="text-center  bg-gray-100 w-[130px]"> Active skill</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-left h-[50px]">Lvl 1: </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-left h-[50px]">Lvl 10: </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-left h-[50px] ">Lvl 20: </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell rowSpan={4} className="text-center  bg-gray-100 w-[130px]"> Passive skill</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-left h-[50px]">Lvl 5: </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-left h-[50px]">Lvl 15: </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-left h-[50px]">Lvl 25: </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </>
      ),
    },
    {
      title: 'Strengths/Weaknesses',
      content: (
        <>
        <div className='float-left p-2'>
          <Table className = " w-[700px]">
            <TableBody className="border-3">
                <TableRow>
                  <TableCell className="text-center bg-gray-100 border-2">Strengths </TableCell>
                  <TableCell className="text-center bg-gray-100 border-2">Weaknesses </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-left p-4 border-2"><ul>
                    <li> • First item</li>
                    <li> • Second item</li>
                    <li> • Third item</li>
                    </ul> 
                  </TableCell>
                  <TableCell className="text-left p-4 border-2"><ul>
                    <li> • First item</li>
                    <li> • Second item</li>
                    <li> • Third item</li>
                  </ul>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            </div>
        </>
      ),
    },
    {
      title: 'How/Where to use',
      content: <p>{placeholderText}</p>,
    },
  ]
  
  // Main page component
  export default function Page() {
  return (
    <>
      <PetsPage
        title="Sample Pet"
        description={placeholderText}
        headerImage={testImage}
        journeyStars={5}
        pvpStars={5}
        bossesStars={4}
        overallStars={4}
        sections={sections}
      />
    </>
  );
}