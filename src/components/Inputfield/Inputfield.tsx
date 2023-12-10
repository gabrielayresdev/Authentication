import styles from "./Inputfield.module.sass";

interface InputFieldInterface {
  type?: string;
  id: string;
  label?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Inputfield = ({
  type,
  id,
  label,
  value,
  setValue,
}: InputFieldInterface) => {
  return (
    <div className={styles.input_container}>
      {label ? (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      ) : null}
      <input
        type={type ? type : "text"}
        id={id}
        className={styles.input}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      ></input>
    </div>
  );
};

export default Inputfield;
