import React, {
  ReactNode,
  useState,
  useRef,
  ChangeEvent,
  KeyboardEvent,
  forwardRef,
  InputHTMLAttributes,
  MouseEvent,
  useEffect,
  Ref,
} from "react";
import { Icon, IconSymbol, IconVariant } from "../icons/Icon";
import { sx } from "../theme/utils/sx";

type BaseInputSize = "xs" | "sm" | "md" | "lg";
type BaseInputType = "email" | "text" | "url" | "password" | "number";
type IconPosition = "start" | "end";

export interface BaseInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  id?: string;
  label?: ReactNode;
  defaultValue?: string | number;
  value?: string | number;
  placeholder?: string;
  description?: ReactNode;
  warning?: boolean;
  warningText?: ReactNode;
  invalid?: boolean;
  invalidText?: ReactNode;
  disabled?: boolean;
  type?: BaseInputType;
  icon?: IconSymbol;
  iconVariant?: IconVariant;
  iconPosition?: IconPosition;
  size?: BaseInputSize;
  width?: number;
  classes?: string;
  children?: ReactNode;
  required?: boolean;
}

interface BaseProps {
  id?: string;
  children?: ReactNode;
  size: BaseInputSize;
  select?: boolean;
  width?: number;
  disabled?: boolean;
  defaultValue?: string | number;
  label?: ReactNode;
  classes?: string;
  type?: BaseInputType;
  onClick?: (e: MouseEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string | number;
  required?: boolean;
}

const Base = ({
  size = "md",
  disabled,
  width,
  classes,
  children,
  ...rest
}: BaseProps) => {
  return (
    <div
      style={{ width: width ? `${width}px` : "100%" }}
      className={sx(
        `input input-normal input-${size} input-normal-${size}`,
        { [`input-normal-disabled`]: disabled },
        classes,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

const Label = ({ size, disabled, label, id }: BaseProps) => (
  <label
    htmlFor={id}
    className={sx(
      `input-text input-text-label input-normal-text input-normal-label input-${size}-text input-${size}-label input-normal-${size}-text input-normal-${size}-label`,
      { "input-disabled-text": disabled },
    )}
  >
    {label}
  </label>
);

const Stack = forwardRef<HTMLDivElement, BaseProps>(
  ({ size, disabled, children, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={sx(
        `input-stack input-normal-stack input-${size}-stack input-normal-${size}-stack`,
        { [`input-normal-disabled-stack`]: disabled },
      )}
    >
      {children}
    </div>
  ),
);

const InputBase = forwardRef<HTMLInputElement, BaseProps>(
  ({ size, disabled, select, defaultValue, ...rest }, ref) => (
    <input
      ref={ref}
      {...rest}
      disabled={disabled}
      className={sx(
        `input-input input-normal-input input-${size}-input input-normal-${size}-input`,
        { "input-disabled-input": disabled },
        select ? "min-w-full" : "w-full",
      )}
    />
  ),
);

const IconBase = ({ size, disabled, children, classes }: BaseProps) => (
  <div
    className={sx(
      `input-icon input-normal-icon input-${size}-icon input-normal-${size}-icon`,
      { "input-disabled-icon": disabled },
      classes,
    )}
  >
    {children}
  </div>
);

const Description = ({ size, disabled, children }: BaseProps) => (
  <div
    className={sx(
      `input-text input-text-description input-normal-text input-normal-text-description input-${size}-text input-${size}-text-description input-normal-${size}-text input-normal-${size}-text-description`,
      { "input-disabled-text": disabled },
      { "input-disabled-text-description": children },
    )}
  >
    {children}
  </div>
);

const WarningText = ({ size, disabled, children }: BaseProps) => (
  <div
    className={sx(
      `input-text input-text-warning input-normal-text input-normal-text-warning input-${size}-text input-${size}-text-warning input-normal-${size}-text input-normal-${size}-text-warning`,
      { "input-disabled-text": disabled },
      { "input-disabled-text-warning": children },
    )}
  >
    {children}
  </div>
);

const InvalidText = ({ size, disabled, children }: BaseProps) => (
  <div
    className={sx(
      `input-text input-text-invalid input-normal-text input-normal-text-invalid input-${size}-text input-${size}-text-invalid input-normal-${size}-text input-normal-${size}-text-invalid`,
      { "input-disabled-text": disabled },
      { "input-disabled-text-invalid": children },
    )}
  >
    {children}
  </div>
);

export const BaseInput = forwardRef<HTMLDivElement, BaseInputProps>(
  (
    {
      id,
      label,
      value,
      defaultValue,
      size = "md",
      type = "text",
      icon,
      iconVariant = "regular",
      iconPosition = "end",
      placeholder,
      description,
      warning,
      warningText,
      invalid,
      invalidText,
      disabled,
      width,
      classes,
      onChange,
      children,
      required,
    },
    ref: Ref<HTMLDivElement>,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [inputValue, setInputValue] = useState<string | number>(
      value ?? defaultValue ?? "",
    );

    useEffect(() => {
      if (value !== undefined) {
        setInputValue(value);
      }
    }, [value]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      if (onChange) onChange(e);
    };

    const toggleFocus = () => {
      inputRef.current?.focus();
    };

    return (
      <Base size={size} disabled={disabled} width={width} classes={classes}>
        {label && (
          <div className="flex gap-[var(--dimension-xs)] items-center">
            <Label
              id={id}
              size={size}
              disabled={disabled}
              label={label}
              required={required}
            />

            {required ? (
              <span className="!text-surface-danger input-text-label-append select-none">
                *
              </span>
            ) : (
              <span className="text-content-on-neutral-low input-text-label-append select-none">
                Optional
              </span>
            )}
          </div>
        )}
        <Stack ref={ref} size={size} disabled={disabled} onClick={toggleFocus}>
          {icon && iconPosition === "start" && (
            <IconBase size={size} disabled={disabled}>
              <Icon symbol={icon} variant={iconVariant} size={size} />
            </IconBase>
          )}
          {children ? (
            children
          ) : (
            <InputBase
              id={id}
              size={size}
              disabled={disabled}
              type={type}
              onChange={handleInputChange}
              placeholder={placeholder}
              value={inputValue}
              ref={inputRef}
            />
          )}
          {invalid && (
            <IconBase size={size} disabled={disabled}>
              <Icon
                symbol="warning-circle"
                variant="fill"
                size={size}
                color="var(--color-text-danger)"
              />
            </IconBase>
          )}
          {warning && !invalid && (
            <IconBase size={size} disabled={disabled}>
              <Icon
                symbol="warning"
                variant="fill"
                size={size}
                color="var(--color-text-warning)"
              />
            </IconBase>
          )}
          {icon && !warning && !invalid && iconPosition === "end" && (
            <IconBase size={size} disabled={disabled}>
              <Icon symbol={icon} variant={iconVariant} size={size} />
            </IconBase>
          )}
        </Stack>
        {description && !warning && !invalid && (
          <Description size={size} disabled={disabled}>
            {description}
          </Description>
        )}
        {warning && !invalid && (
          <WarningText size={size} disabled={disabled}>
            {warningText}
          </WarningText>
        )}
        {invalid && (
          <InvalidText size={size} disabled={disabled}>
            {invalidText}
          </InvalidText>
        )}
      </Base>
    );
  },
);
