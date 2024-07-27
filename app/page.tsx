import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <p className="font-semibold">
      Hello Auth! <br />
      <Button variant={"destructive"} size={"lg"}>Click me!</Button>
    </p>
  );
}
