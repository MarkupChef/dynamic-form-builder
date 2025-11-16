import FormBuilder from "@/components/FormBuilder";
import { H1 } from "@/components/ui/typography.tsx";
import PageLayout from "@/layouts/PageLayout";

const FormBuilderPage = () => {
  return (
    <PageLayout header={<H1>Form Builder</H1>} content={<FormBuilder />} />
  );
};

export default FormBuilderPage;
