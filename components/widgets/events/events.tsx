import EventHeader from '@/components/widgets/events/event-header'
import EventSection from '@/components/widgets/events/event-section'

export default function EventPage({ title, description, headerImage, imageWidth, imageHeight, sections }) {
  return (
    <div className="p-4 sm:p-8 lg:pl-10 border-b border-[#a2a9b1] overflow-hidden pt-6"> {/* Left padding, no max width */}
      {/* Header with image on the right */}
      <EventHeader title={title} description={description} imageSrc={headerImage} imageWidth = {imageWidth} imageHeight = {imageHeight} sections={sections} />
      {/* Sections - Stacked Vertically */}
      <div className="flex-col">
        {sections.map((section) => (
          <EventSection key={section.title} title={section.title}>
            {section.content}
          </EventSection>
        ))}
      </div>
    </div>
  )
}
