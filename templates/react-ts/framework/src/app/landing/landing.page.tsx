import type { ReactNode } from "react";
import { Helmet } from "react-helmet";

const MetaLayout = ({ children }: { children: ReactNode }) => (
   <>
      <Helmet>
         <title>Landing</title>
         <meta name="description" content="Landing page" />
         <meta name="keywords" content="React, SEO, Landing Page" />
      </Helmet>
      {children}
   </>
);

const Page = () => {
   return (
      <MetaLayout>
         <p>Landing page work!</p>
      </MetaLayout>
   );
};

export default function LandingPage() {
   return <Page />;
}
