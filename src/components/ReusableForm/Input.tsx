type InputProps = {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any; 
  type: string;
};

export const Input: React.FC<InputProps> = ({ label, register, errors, type }) => {
  return (
    <div className="w-full max-w-md">
      <label className="block" htmlFor="name">
        {label}
      </label>
      <input type={type} id="name" {...register} />
      {errors.name && (
        <span className="text-xs text-red-500">{errors.name.message}</span>
      )}
    </div>
  );
};
