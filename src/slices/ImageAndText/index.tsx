import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ImageAndText`.
 */
export type ImageAndTextProps = SliceComponentProps<Content.ImageAndTextSlice>;

/**
 * Component for "ImageAndText" Slices.
 */
const ImageAndText = ({ slice }: ImageAndTextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col px-6 lg:flex-row mx-auto max-w-[1440px]"
    >
    <div className="flex-1">
     <h2>{slice.primary.title}</h2>
     <div>
      <PrismicRichText field={slice.primary.text} />
     </div>
    </div>
    <div className="relative w-100 h-100 flex-1">
      <PrismicNextImage field={slice.primary.featured_image} fill className="object-cover" />
    </div>
    </section>
  );
};

export default ImageAndText;
