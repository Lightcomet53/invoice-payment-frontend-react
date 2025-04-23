declare module "react-payment-inputs" {
  import {
    FC,
    ReactNode,
    ChangeEvent,
    KeyboardEvent,
    CSSProperties,
  } from "react";

  interface Meta {
    isTouched: boolean;
    error: string | null;
  }

  interface PaymentInputsProps {
    errorTextProps?: any;
    containerProps?: any;
    wrapperProps?: any;
    inputProps?: any;
    styles?: any;
    labelText?: string;
    error?: string;
    touched?: boolean;
    value?: string;
    onBlur?: (event: any) => void;
    onChange?: (event: any) => void;
    onError?: (error: string | null) => void;
    onTouch?: () => void;
    className?: string;
    children?: ReactNode;
  }

  interface PaymentInputsReturnType {
    meta: Meta;
    getCardImageProps: (props?: any) => any;
    getCardNumberProps: (props?: any) => any;
    getExpiryDateProps: (props?: any) => any;
    getCVCProps: (props?: any) => any;
    wrapperProps: any;
    errorTextProps: any;
  }

  export const usePaymentInputs: (
    props?: PaymentInputsProps
  ) => PaymentInputsReturnType;

  export const PaymentInputsWrapper: FC<any>;
}

declare module "react-payment-inputs/images" {
  const images: {
    [key: string]: any;
  };

  export default images;
}
