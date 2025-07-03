export default function EventSection({ title, children }) {
  return (
    <div>
      <h2 className="border-b border-[#a2a9b1] overflow-hidden text-3xl pt-4 pb-2">{title}</h2>
      <div className="mt-2">
        {children}
      </div>
    </div>
  )
}
