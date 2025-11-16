import FormList from "@/components/FormList";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { H1 } from "@/components/ui/typography.tsx";
import PageLayout from "@/layouts/PageLayout";

const MyFormsPage = () => {
  const content = (
    <Card>
      <CardContent>
        <FormList />
      </CardContent>
    </Card>
  );

  return <PageLayout header={<H1>My Forms</H1>} content={content} />;
};

export default MyFormsPage;
