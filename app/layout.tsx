import "./globals.css";
import Header from "../components/header/header";
import Footer from "../components/footer";

type Metadata = {
  title: string;
  description: string;
  image: string;
  twitter: {
    site: string;
    cardType: string;
  };
  og: {
    siteName: string;
    type: string;
  };
};

export const metadata: Metadata = {
  title: "ZOOZ E-commerce App",
  description: "A simple e-commerce app built with Next.js and Tailwind CSS",
  image: "/images/logo.jpg",
  twitter: {
    site: "@zooz",
    cardType: "summary_large_image",
  },
  og: {
    siteName: "ZOOZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
