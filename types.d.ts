interface ErrorProps {
  error: Error,
  reset: () => void
}

type ProductType = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  handle: string;
  tags: string;
  gql_id: string
};

type CartItem = {
  title: string
  price: number
  quantity: number
  id: string
  image: string;
  merchandiseId: string;
}

interface Metadata {
  title: {
    default: string,
    template: string, // My-organization | Taskiflow
  },
  description: string,
  keywords: string[],
  icons: [
    {
      url: string,
      href: string,
    },
  ],
}