import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

export default async function Navbar() {
  const client = createClient();
  const menu = await client.getByUID("menu", "menu");

  return (
    <nav className="mx-auto w-full bg-slate-500 py-4 ">
      <div className="flex justify-between items-center mx-auto  max-w-[1440px] px-4">
        <h1 className="text-3xl font-bold">Logo</h1>
        <div className="flex gap-8 text-2xl">
            {menu.data.menu_items.map((item, index) => (
            <PrismicNextLink field={item.link} key={index}>
                {item.name}
            </PrismicNextLink>
            ))}
        </div>
      </div>
    </nav>
  );
}
