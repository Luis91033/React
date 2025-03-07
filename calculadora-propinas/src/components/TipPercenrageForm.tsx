/** @format */
const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];
type TipPercenrageFormProps = {
  setTip: React.Dispatch<React.SetStateAction<number>>;
  tip: number;
};

const TipPercenrageForm = ({ setTip, tip }: TipPercenrageFormProps) => {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      <form action="">
        {tipOptions.map((options) => (
          <div className="flex gap-2" key={options.id}>
            <label htmlFor={options.id}>{options.label}</label>
            <input
              type="radio"
              id={options.id}
              name="options"
              value={options.value}
              onChange={(e) => setTip(+e.target.value)}
              checked={options.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default TipPercenrageForm;
