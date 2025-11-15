import { useAppSelector } from "@/redux-store/hooks.ts";

const useFormPreview = () => {
  const builtForm = useAppSelector((state) => state.formBuilder);

  return {
    builtForm,
  };
};

export default useFormPreview;
