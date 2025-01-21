import { SafeParseReturnType } from "zod";

export function setFieldsErrors<T, Z>(result: SafeParseReturnType<T, Z>, setErrors: any) {
  if (!result.success) {
    const fieldErrors = result.error.errors.reduce((acc, error) => {
      if (error.path[0]) {
        acc[error.path[0] as string] = error.message;
      }
      return acc;
    }, {} as Record<string, string>);
    setErrors(fieldErrors);
    return;
  }
}