import EventPage from '@/components/widgets/events/events'
import React from "react";
import testImage from "@/public/images/events/events-template/event-header.png";

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
      title: 'Shop',
      content: (
        <>
          <div>
            <p>{placeholderText} {placeholderText}</p>
          </div>
        </>
      ),
    },
    {
      title: 'Missions',
      content: (
        <>
          <p>{placeholderText}</p>
          <table className="mt-4 table-auto border border-collapse border-gray-400">
            <thead>
              <tr>
                <th className="border p-2">mission</th>
                <th className="border p-2">rewards</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">1...</td>
                <td className="border p-2">...</td>
              </tr>
              <tr>
                <td className="border p-2">2..</td>
                <td className="border p-2">...</td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      title: 'Preparation',
      content: <p>{placeholderText}</p>,
    },
    {
      title: 'Tips',
      content: (
        <>
          <p>{placeholderText}</p>
        </>
      ),
    },
  ]
  
  // Main page component
  export default function Page() {
  return (
    <>
      <EventPage
        title="Sample Event"
        description={placeholderText}
        headerImage={testImage}
        imageWidth={600}
        imageHeight={800}
        sections={sections}
      />
    </>
  );
}