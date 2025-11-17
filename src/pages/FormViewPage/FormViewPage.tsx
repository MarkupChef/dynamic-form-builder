import BuiltForm from "@/components/BuiltForm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { H1 } from "@/components/ui/typography.tsx";
import PageLayout from "@/layouts/PageLayout";
import { useAppSelector } from "@/redux-store/hooks.ts";
import { useParams } from "react-router";

const HomePage = () => {
  const { id } = useParams();
  const builtForms = useAppSelector((state) => state.forms.forms);
  const builtForm = builtForms.find((form) => form.id === id);
  const content = builtForm ? (
    <Card>
      <CardHeader>
        <CardTitle>{builtForm.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <BuiltForm builtForm={builtForm} />
      </CardContent>
    </Card>
  ) : (
    <div>Form is not found</div>
  );

  return <PageLayout header={<H1>Form View</H1>} content={content} />;
};

export default HomePage;
