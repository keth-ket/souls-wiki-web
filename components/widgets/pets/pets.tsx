import PetsHeader from '@/components/widgets/pets/pets-header'
import PetsSection from '@/components/widgets/pets/pets-section'
import '@/styles/globals.css';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import { Orbit, Sparkles } from "lucide-react"
const orbitIcon = "text-black fill-blue-500 w-4 h-4 mr-1 inline";
const sparklesIcon = "text-yellow-700 fill-red-500 w-4 h-4 mr-1 inline";
export default function PetPage({title, description, headerImage, petName, journeyStars, pvpStars, bossesStars,
                                  overallStars, mainRole, energyGain, activeSkillsLevel1, activeSkillsLevel10, activeSkillsLevel20, passiveSkillsLevel5, passiveSkillsLevel15, passiveSkillsLevel25, strengths, weaknesses, 
                                  howToUseDescription}) {
  const sections = [
    {
      title: 'Skills',
      content: (
        <>
          <div className='float-left flex-direction-column p-2'>
            <Table className = " max-w-[300px] ">
            <TableBody className="border-3">
                <TableRow>
                  <TableCell rowSpan={4} className="text-center bg-gray-100 w-[130px]"><Sparkles className={sparklesIcon} /> Active skill</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-left h-[50px] table-base">Lvl 1: {activeSkillsLevel1}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-left h-[50px] table-base">Lvl 10: {activeSkillsLevel10}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-left h-[50px] table-base">Lvl 20: {activeSkillsLevel20}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell rowSpan={4} className="text-center bg-gray-100 w-[130px]"><Orbit className={orbitIcon} /> Passive skill</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-left h-[50px] table-base">Lvl 5: {passiveSkillsLevel5}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-left h-[50px] table-base">Lvl 15: {passiveSkillsLevel15}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-left h-[50px] table-base  ">Lvl 25: {passiveSkillsLevel25}</TableCell>
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
          <Table className = " max-w-[700px] table-fixed">
            <TableBody className="border-3">
                <TableRow>
                  <TableCell className="text-center bg-gray-100 border-2">Strengths </TableCell>
                  <TableCell className="text-center bg-gray-100 border-2">Weaknesses </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-left p-4 border-2 table-base"><ul>
                    {strengths.map((strength, index) => (
                      <li key={index} className='p-2'> • {strength}</li>
                    ))}
                  </ul></TableCell>
                  <TableCell className="text-left p-4 border-2 table-base"><ul>
                    {weaknesses.map((weakness, index) => (
                      <li key={index} className='p-2'> • {weakness}</li>
                    ))}
                  </ul></TableCell>
                </TableRow>
              </TableBody>
            </Table>
            </div>
        </>
      ),
    },
    {
      title: 'How/Where to use',
      content: <p>{howToUseDescription}</p>,
    },
  ];

  return (
    <div className="p-4 sm:p-8 lg:pl-10 border-b border-[#a2a9b1] overflow-hidden pt-6">
      <PetsHeader
        title={title}
        description={description}
        imageSrc={headerImage}
        petName={petName}
        journeyStars={journeyStars}
        pvpStars={pvpStars}
        bossesStars={bossesStars}
        overallStars={overallStars}
        mainRole={mainRole}
        energyGain={energyGain}
        sections={sections}
      />
      <div className="flex-col">
        {sections.map((section) => (
          <PetsSection key={section.title} title={section.title}>
            {section.content}
          </PetsSection>
        ))}
      </div>
    </div>
  );
}

