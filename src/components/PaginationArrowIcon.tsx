import ActionIcon from "@/components/ui/ActionIcon"
import IconArrowBack from "./IconComponents/IconArrowBack"
import IconArrowFront from "./IconComponents/IconArrowFront"

type ArrowProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  disabled: boolean
  direction: "left" | "right"
}

const PaginationArrowIcon = ({onClick, disabled, direction}: ArrowProps) => {
  const arrowColor = disabled ? "#696969" : "#051438"

  return (
    <ActionIcon
      onClick={onClick}
      disabled={disabled}
      data-testid={direction === "left" ? "previous-button" : "next-button"}
    >
      {direction === "left" ? (
        <IconArrowBack color={arrowColor} height="9.6" width="4.8" />
      ) : (
        <IconArrowFront color={arrowColor} height="9.6" width="4.8" />
      )}
    </ActionIcon>
  )
}

export default PaginationArrowIcon
