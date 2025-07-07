import { Button } from "@/components/ui/button";
import Link from 'next/link';
export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
      <Button variant="outline">Click me</Button>
      <Link href="/events/event-info-template">Events</Link>
    </>
  );
}
