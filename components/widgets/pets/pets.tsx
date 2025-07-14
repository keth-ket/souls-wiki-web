import PetsHeader from '@/components/widgets/pets/pets-header'
import PetsSection from '@/components/widgets/pets/pets-section'

export default function PetPage({ title, description, headerImage, sections, journeyStars, pvpStars, bossesStars, overallStars }) {
  return (
    <div className="p-4 sm:p-8 lg:pl-10 border-b border-[#a2a9b1] overflow-hidden pt-6"> {/* Left padding, no max width */}
      {/* Header with image on the right */}
      <PetsHeader title={title} description={description} imageSrc={headerImage} sections={sections} journeyStars={journeyStars} pvpStars={pvpStars} bossesStars={bossesStars} overallStars={overallStars} />
      {/* Sections - Stacked Vertically */}
      <div className="flex-col">
        {sections.map((section) => (
          <PetsSection key={section.title} title={section.title}>
            {section.content}
          </PetsSection>
        ))}
      </div>
    </div>
  )
}
