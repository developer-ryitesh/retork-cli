import type { ReactNode } from "react";
import { Helmet } from "react-helmet";

const MetaLayout = ({ children }: { children: ReactNode }) => (
   <>
      <Helmet>
         <title>PlaceHolder</title>
         <meta name="description" content="PlaceHolder page" />
         <meta name="keywords" content="React, SEO, Landing Page" />
      </Helmet>
      {children}
   </>
);

const Page = () => {
   return (
      <MetaLayout>
         <p>PlaceHolder page work!</p>
      </MetaLayout>
   );
};

export default function PlaceHolderPage() {
   return <Page />;
}
