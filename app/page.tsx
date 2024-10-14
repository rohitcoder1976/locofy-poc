import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { SearchInput } from "@/components/ui/searchInput";
import Image from "next/image";

export default function Home() {
  return (
   <div className="flex flex-col gap-[5px] items-center justify-center">
      <Button variant="secondary" iconCode="logout">Hello World!</Button>
      <SearchInput placeholder="Type / to Search" />
      <Checkbox />
   </div>
  );
}