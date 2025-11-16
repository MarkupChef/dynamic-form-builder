import FormList from "@/components/FormList";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent, CardFooter } from "@/components/ui/card.tsx";
import { H1 } from "@/components/ui/typography.tsx";
import { ROUTES } from "@/config/routes.ts";
import PageLayout from "@/layouts/PageLayout";
import { NavLink } from "react-router";

const MyFormsPage = () => {
  const content = (
    <Card>
      <CardContent>
        <FormList />
      </CardContent>
      <CardFooter>
        <NavLink to={ROUTES.formCreate}>
          <Button>Create Form</Button>
        </NavLink>
      </CardFooter>
    </Card>
  );

  return <PageLayout header={<H1>My Forms</H1>} content={content} />;
};

export default MyFormsPage;
