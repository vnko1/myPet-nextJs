import { ModalProps } from "@/components/modals/animatedModal/animatedModal.type";

export type UseSwipeProps = {
  left?: () => void;
  right?: () => void;
} & Pick<
  ModalProps,
  "axis" | "touchDistinction" | "enableSwipeUpToScreen" | "enableSwipe"
>;
