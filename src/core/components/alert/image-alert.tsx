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
                  "w-10 h-10 rounded-md border-2 flex items-center justify-center bg-background -ml-[20px] -mb-[20px]",
                  config.borderColor,
                  config.color,
                )}
              >
                <Img
                  src={alertImage}
                  alt={`${type} icon`}
                  className="block"
                  width="20"
                  height="20"
                />
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div
                className={cn(
                  "rounded-lg border-l-2 p-6",
                  config.bgColor,
                  config.borderColor,
                )}
              >
                <div
                  className="text-base leading-relaxed text-foreground/90 not-prose"
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
