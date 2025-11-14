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
          <DialogDescription>Field list</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default FormPreview;
