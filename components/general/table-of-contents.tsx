export default function TableOfContents({ sections }) {
  return (
    <div className="my-6 lg:sticky lg:top-8 border-2 border-black inline-block p-4">
      <h2 className="text-2xl font-semibold mb-2">Contents</h2>
      <ol className="list-decimal list-inside">
        {sections.map((section, index) => (
          <li key={index} className="cursor-pointer hover:underline">
            <a href={`#${section.title}`}>{section.title}</a>
          </li>
        ))}
      </ol>
    </div>
  )
}
