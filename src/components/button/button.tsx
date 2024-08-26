import "../../styles/button.css";

// DEFINE TIPAGEM DE DADOS DO COMPONENTE
type ButtonProps = {
  label?: string;
  style?:
    | "btn-primary"
    | "btn-secondary"
    | "btn-danger"
    | "btn-success"
    | "btn-info"
    | "btn-dark"
    | "btn-light"
    | "btn-none"
    | "btn-warning"
    | "btn-black";
  width?: string;
  heigth?: string;
  icon?: any;
  iconPosition?: "left" | "right";
  size?: "btn-sm" | "btn-md" | "btn-lg";
  rounded?: true | false;
  disabled?: true | false;
  tooltip?: string;
  tooltipPosition?: "top" | "right" | "bottom" | "left";
  loading?: boolean;
  text?: boolean;
  shadow?: boolean;
};

import React from "react";

// EXPORTA COMPONENTE POR PADRÃO
export default function Button({
  label,
  style,
  width,
  heigth,
  icon,
  iconPosition,
  size,
  rounded,
  disabled,
  tooltip,
  tooltipPosition,
  loading,
  text,
  shadow,
  ...rest
}: ButtonProps & Record<string, unknown>) {
  // DEFINE VALOR PARA STYLE OPTIONS
  let styleOption: any = rest.style ?? {};
  styleOption.width = width ?? "auto";

  return (
    <button
      className={`reactivus-button-main-box 
      reactivus-${style ?? "btn-light"} reactivus-${size ?? "btn-md"} 
      reactivus-${disabled ? "btn-disabled" : ""} 
      reactivus-${rounded ? "btn-rounded" : ""} 
      ${text ? "reactivus-text-button" : ""} 
      ${shadow ? "r-box-shadow" : ""}
      ${rounded && icon && !label ? "reactivus-btn-rounded-icon" : ""}`}
      style={styleOption}
      {...rest}
    >
      {tooltip && (
        <span
          className={`reactivus-tooltip ${
            "reactivus-tooltip-" + tooltipPosition
          }`}
        >
          {tooltip ?? ""}
        </span>
      )}

      <span className={`reactivus-button-label-icon-box`}>
        {iconPosition != "right" && icon && (
          <>{loading ? <div className={"reactivus-loading"} /> : <span>{icon}</span>}</>
        )}
        {label}
        {iconPosition == "right" && (
          <>{loading ? <div className={"reactivus-loading"} /> : <span>{icon}</span>}</>
        )}
      </span>
    </button>
  );
}
