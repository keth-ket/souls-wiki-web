export default function PetSection({ title, children }) {
  return (
    <div>
      <h2 className="border-b border-[#a2a9b1] overflow-hidden text-3xl pt-4 pb-2 clear-left">{title}</h2>
      <div className="mt-2">
        {children}
      </div>
    </div>
  )
}
