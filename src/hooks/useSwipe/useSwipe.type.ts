import { ModalProps } from "@/components/modal/modal.type";

export type UseSwipeProps = {
  left?: () => void;
  right?: () => void;
} & Pick<
  ModalProps,
  "axis" | "touchDistinction" | "enableSwipeUpToScreen" | "enableSwipe"
>;
