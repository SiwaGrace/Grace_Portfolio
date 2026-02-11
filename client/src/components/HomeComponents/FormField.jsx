const FormField = ({
  label,
  name,
  type = "text",
  placeholder,
  as = "input" || "textarea",
  rows,
}) => {
  const Component = as;

  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondaryText">
        {label}
      </label>
      <Component
        name={name}
        required
        rows={rows}
        type={type}
        placeholder={placeholder}
        className="bg-slate-50 dark:bg-gray-800 dark:text-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-accentColor transition-all text-slate-900 placeholder:text-slate-400 outline-none resize-none"
      />
    </div>
  );
};

export default FormField;
