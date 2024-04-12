import { ModalProps } from "@/components/modals/menu/menu.type";

export type UseSwipeProps = {
  left?: () => void;
  right?: () => void;
} & Pick<
  ModalProps,
  "axis" | "touchDistinction" | "enableSwipeUpToScreen" | "enableSwipe"
>;
