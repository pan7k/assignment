import React, {
  Children,
  FC,
  isValidElement,
  ReactElement,
  RefObject,
  useRef,
  useState,
} from "react";
import { Button, ButtonProps } from "./Button";
import { IconButton } from "./IconButton";
import { sx } from "../theme/utils/sx";
import { MenuDirection, MenuList } from "./MenuList";

export interface MenuButtonProps
  extends Omit<ButtonProps, "label" | "size" | "classes"> {
  label?: string;
  children: ReactElement | ReactElement[];
  size?: "xs" | "sm" | "md";
  menuDirection?: MenuDirection;
}

export const MenuButton: FC<MenuButtonProps> = ({
  children,
  label,
  icon,
  menuDirection,
  onClick,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
    buttonRef.current?.focus();
  };

  return (
    <>
      {label ? (
        <Button
          label={label}
          icon={icon || (open ? "caret-up" : "caret-down")}
          onClick={toggleMenu}
          ref={buttonRef}
          {...rest}
        />
      ) : (
        <IconButton
          icon={icon || (open ? "caret-up" : "caret-down")}
          onClick={toggleMenu}
          ref={buttonRef}
          {...rest}
        />
      )}
      {open && buttonRef.current && (
        <MenuList
          ref={menuRef}
          parentRef={buttonRef as RefObject<HTMLButtonElement>}
          direction={menuDirection}
          onClose={() => setOpen(false)}
          offset={4}
        >
          {Children.map(children, (child) =>
            isValidElement(child) ? React.cloneElement(child) : child,
          )}
        </MenuList>
      )}
    </>
  );
};
