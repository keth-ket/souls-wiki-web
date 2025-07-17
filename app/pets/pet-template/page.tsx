import PetsPage from '@/components/widgets/pets/pets'
import React from "react";
import testImage from "@/public/images/pets/pets-template/pet-template.png";
  
  // Main page component
 export default function Page() {
  
  //declare stars first
const journeyStars = 5;
const pvpStars = 5;
const bossesStars = 4;
  return (
    <>
      <PetsPage
        title="Sample Pet"
        description={"placeholderText"}

      // +--------------------------------------------------+
      // |                    [petName]                     |
      // +--------------------------------------------------+
      // |                                                  |
      // |                   [headerImage]                  |
      // |                                                  |
      // +--------------------------------------------------+
      // | Information:                                     |
      // |   JourneyStars: [number{0-5}]                    |
      // |   PvPStars:     [number{0-5}]                    |
      // |   BossesStars:  [number{0-5}]                    |
      // |   OverallStars: [Automatically calculated]       |
      // +--------------------------------------------------+
      // |   Main Role:   [mainRole]                        |
      // |   Energy Gain: [energyGain]                      |
      // +--------------------------------------------------+
        petName = {"Sample Pet Name"}
        headerImage={testImage}
        
        journeyStars={journeyStars}
        pvpStars={pvpStars}
        bossesStars={bossesStars}
        overallStars={Math.floor((journeyStars + pvpStars + bossesStars) / 3)}
        mainRole={"Put main role here"}
        energyGain={"Put energy gain here"}


        activeSkillsLevel1={"Put active skill level 1 here"}
        activeSkillsLevel10={"Put active skill level 10 here"}
        activeSkillsLevel20={"Put active skill level 20 here"}
        passiveSkillsLevel5={"Put passive skill level 5 here"}
        passiveSkillsLevel15={"Put passive skill level 15 here"}
        passiveSkillsLevel25={"Put passive skill level 25 here"}
        strengths={["strength1", "strength2", "strength3"]}
        weaknesses={["weakness1", "weakness2", "weakness3"]}
        howToUseDescription={"How to use description here"}
      />
    </>
  );
}
