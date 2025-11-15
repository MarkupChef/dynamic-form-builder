import BuiltForm from "@/components/BuiltForm";
import useFormPreview from "@/components/FormBuilder/FormPreview/useFormPreview.ts";
import { Button } from "@/components/ui/button.tsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog.tsx";

const FormPreview = () => {
  const { builtForm } = useFormPreview();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type={"button"} variant="outline">
          Preview
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Form Preview</DialogTitle>
          <DialogDescription>Check your built form</DialogDescription>
        </DialogHeader>
        <BuiltForm builtForm={builtForm} />
      </DialogContent>
    </Dialog>
  );
};

export default FormPreview;
