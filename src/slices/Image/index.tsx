import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Image`.
 */
export type ImageProps = SliceComponentProps<Content.ImageSlice>;

/**
 * Component for "Image" Slices.
 */
const Image = ({ slice }: ImageProps): JSX.Element => {
  console.log(slice.primary.image)
  let test = slice.primary.image
  
  if (JSON.stringify(test) !== '{}') {
      console.log(test)
  }
  

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.primary.image && Object.keys(slice.primary.image).length > 0 && (
          <div className="relative h-80 w-80">
              <PrismicNextImage field={slice.primary.image} fill className="object-cover" />
          </div>
      )}
    </section>
  );
};

export default Image;
