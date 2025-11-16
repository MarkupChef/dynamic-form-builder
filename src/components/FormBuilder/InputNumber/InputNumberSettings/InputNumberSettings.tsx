import useInputTextSettings from "@/components/FormBuilder/InputText/InputTextSettings/useInputTextSettings.ts";
import { Button } from "@/components/ui/button.tsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { Switch } from "@/components/ui/switch.tsx";
import { H4 } from "@/components/ui/typography.tsx";
import type FormBuilderInput from "@/types/FormBuilderInput.type.ts";
import { SettingsIcon } from "lucide-react";
import styles from "./InputNumberSettings.module.css";

const typesValue = [
  { label: "Text", value: "text" },
  {
    label: "Email",
    value: "email",
  },
];

const InputNumberSettings = ({ field }: { field: FormBuilderInput }) => {
  const { form, handleCloseSettings } = useInputTextSettings(field);
  return (
    <Popover onOpenChange={handleCloseSettings}>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <SettingsIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <H4 className={"mb-4"}>Input Text Settings</H4>
        <Form {...form}>
          <form className={styles.form}>
            <FormField
              control={form.control}
              name={"id"}
              render={({ field: f }) => <Input hidden {...f} />}
            />
            <FormField
              control={form.control}
              name={"label"}
              render={({ field: f }) => (
                <FormItem>
                  <div className={styles.formItem}>
                    <FormLabel htmlFor={`label_${field.id}`}>Label:</FormLabel>
                    <FormControl>
                      <Input
                        id={`label_${field.id}`}
                        className={styles.formItemInput}
                        {...f}
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"placeholder"}
              render={({ field: f }) => (
                <FormItem>
                  <div className={styles.formItem}>
                    <Label htmlFor={`placeholder_${field.id}`}>
                      Placeholder:
                    </Label>
                    <FormControl>
                      <Input
                        id={`placeholder_${field.id}`}
                        className={styles.formItemInput}
                        {...f}
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="required"
              render={({ field: f }) => (
                <FormItem>
                  <div className={styles.formItem}>
                    <Label htmlFor={`required_${field.id}`}>Required:</Label>
                    <FormControl>
                      <Switch
                        id={`required_${field.id}`}
                        checked={f.value}
                        onCheckedChange={f.onChange}
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={"type"}
              render={({ field: f }) => (
                <FormItem>
                  <div className={styles.formItem}>
                    <Label htmlFor={`typeValue_${field.id}`}>Type:</Label>
                    <FormControl>
                      <Select
                        name={f.name}
                        value={f.value}
                        onValueChange={f.onChange}
                      >
                        <SelectTrigger
                          id={`typeValue_${field.id}`}
                          className="min-w-[185px]"
                        >
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="item-aligned">
                          {typesValue.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={"minLength"}
              render={({ field: f }) => (
                <FormItem>
                  <div className={styles.formItem}>
                    <Label htmlFor={`minLength_${field.id}`}>Min Length:</Label>
                    <FormControl>
                      <Input
                        id={`minLength_${field.id}`}
                        className={styles.formItemInput}
                        type={"number"}
                        {...f}
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={"maxLength"}
              render={({ field: f }) => (
                <FormItem>
                  <div className={styles.formItem}>
                    <Label htmlFor={`maxLength_${field.id}`}>Max Length:</Label>
                    <FormControl>
                      <Input
                        id={`maxLength_${field.id}`}
                        className={styles.formItemInput}
                        type={"number"}
                        {...f}
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </PopoverContent>
    </Popover>
  );
};

export default InputNumberSettings;
