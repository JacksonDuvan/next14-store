
import { MainProducts } from "app/components/home/MainProducts";

const siteConfig = {
  name: 'XTAL',
  description: 'A futuristic web store for all your needs',
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: "%s | " + siteConfig.name, // My-organization | Taskiflow
  },
  description: siteConfig.description,
  keywords: ['ecommerce'],
  icons: [
    {
      url: "/logo.webp",
      href: "/logo.webp",
    },
  ],
};


export default function Home() {
  return (
    <main>
      <MainProducts/>
    </main>
  );
}
