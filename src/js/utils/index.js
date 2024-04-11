export const formDataToJson = (formData) => (
  Array.from(formData.entries()).reduce((memo, [key, value]) => ({...memo, [key]: value,}), {})
)