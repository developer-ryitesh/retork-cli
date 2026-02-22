import type { ReactNode } from "react";
import { Helmet } from "react-helmet";

const MetaLayout = ({ children }: { children: ReactNode }) => (
   <>
      <Helmet>
         <title>404 - Page Not Found</title>
         <meta name="description" content="The page you are looking for does not exist." />
         <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      {children}
   </>
);

const Page = () => {
   return (
      <MetaLayout>
         <p>404 | Page not found</p>
      </MetaLayout>
   );
};

export default function NotFoundPage() {
   return <Page />;
}
