import useInputTextSettings from "@/components/FormBuilder/InputText/InputTextSettings/useInputTextSettings.ts";
import { Button } from "@/components/ui/button.tsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.tsx";
import { Switch } from "@/components/ui/switch.tsx";
import type { FormBuilderInputTextField } from "@/redux-store/slices/formBuilder.slice.ts";
import { SettingsIcon } from "lucide-react";

const InputTextSettings = ({ field }: { field: FormBuilderInputTextField }) => {
  const { form, handleCloseSettings } = useInputTextSettings(field);
  return (
    <Popover onOpenChange={handleCloseSettings}>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <SettingsIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Input Text Settings</h4>
          </div>
          <Form {...form}>
            <form className="space-y-8">
              <FormField
                control={form.control}
                name={"label"}
                render={({ field: f }) => (
                  <FormItem>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor={`label_${field.id}`}>Label:</Label>
                        <FormControl>
                          <Input
                            id={`label_${field.id}`}
                            className="col-span-2 h-8"
                            {...f}
                          />
                        </FormControl>
                      </div>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="required"
                render={({ field: f }) => (
                  <FormItem>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor={`required_${field.id}`}>
                          Required:
                        </Label>
                        <FormControl>
                          <Switch
                            id={`required_${field.id}`}
                            checked={f.value}
                            onCheckedChange={f.onChange}
                          />
                        </FormControl>
                      </div>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={"id"}
                render={({ field: f }) => <Input hidden {...f} />}
              />
            </form>
          </Form>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default InputTextSettings;
