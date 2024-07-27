import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
// const HeavyComponent = dynamic(() => import("./components/HeavyComponent"));
import { authOptions } from "@/app/api/auth/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>Hello { session && <span>{session.user!.name}</span> }</h1>
      <ProductCard />
    </main>
  );
}
