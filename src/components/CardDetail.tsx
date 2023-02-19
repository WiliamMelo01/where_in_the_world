import React from "react";

type CardDetailProps = {
  Information: string;
  value: number | string | string[] |  undefined;
};

export default function CardDetail({ Information, value }: CardDetailProps) {
  return (
    <div className="flex gap-1 whitespace-nowrap">
      <span className="font-semibold">{Information}:</span>
      <span className="font-light">
        {Array.isArray(value) ? value.join(", ") : value}
      </span>
    </div>
  );
}
