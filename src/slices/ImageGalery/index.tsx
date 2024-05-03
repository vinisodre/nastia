import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ImageGalery`.
 */
export type ImageGaleryProps = SliceComponentProps<Content.ImageGalerySlice>;

/**
 * Component for "ImageGalery" Slices.
 */
const ImageGalery = ({ slice }: ImageGaleryProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for image_galery (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ImageGalery;
