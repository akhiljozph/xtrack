import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "XTRACK" },
    { name: "description", content: "Smart expense tracker by AK with ❤️!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
