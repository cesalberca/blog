import type { FC, PropsWithChildren } from "react";
import { Img, Section } from "@react-email/components";
import { getAlertImage } from "@/core/components/alert/alert-config";
import { cn } from "@/lib/utils";

type AlertType = "note" | "tip" | "important" | "warning" | "caution";

const alertConfig: Record<
  AlertType,
  { color: string; borderColor: string; bgColor: string; textColor: string }
> = {
  note: {
    color: "text-blue-500",
    borderColor: "border-blue-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-400",
  },
  tip: {
    color: "text-emerald-500",
    borderColor: "border-emerald-500",
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-400",
  },
  important: {
    color: "text-purple-500",
    borderColor: "border-purple-500",
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-400",
  },
  warning: {
    color: "text-amber-500",
    borderColor: "border-amber-500",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-400",
  },
  caution: {
    color: "text-red-500",
    borderColor: "border-red-500",
    bgColor: "bg-red-500/10",
    textColor: "text-red-400",
  },
};

export const ImageAlert: FC<
  PropsWithChildren<{
    type: AlertType;
  }>
> = ({ type, children }) => {
  const config = alertConfig[type];
  const alertImage = getAlertImage(type, "png");

  return (
    <Section style={{ paddingTop: "20px", paddingBottom: "8px" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td style={{ paddingLeft: "-10px" }}>
              <div
                className={cn(
                  "border-2 bg-background",
                  config.borderColor,
                  config.color,
                )}
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: config.bgColor,
                  border: `2px solid ${config.borderColor}`,
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "-20px",
                  marginLeft: "-20px",
                }}
              >
                <Img
                  src={alertImage}
                  alt={`${type} icon`}
                  width="20"
                  height="20"
                  style={{ display: "block" }}
                />
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div
                className={cn('rounded-lg border-l-2 p-6', config.bgColor, config.borderColor)}
                style={{
                  backgroundColor: config.bgColor,
                  borderLeft: `2px solid ${config.borderColor}`,
                  borderRadius: "8px",
                  padding: "24px",
                }}
              >
                <div
                  className="text-base leading-relaxed text-foreground/90 not-prose"
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "#1f2937",
                  }}
                >
                  {children}
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
};
