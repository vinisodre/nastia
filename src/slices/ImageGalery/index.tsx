import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
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
      <div>
        <h2>{slice.primary.title}</h2>
        <div className="relative h-60">
          {/* <PrismicNextImage field={item.image} fill className="object-cover" /> */}
        </div>
      </div>
    </section>
  );
};

export default ImageGalery;

//TODO Criar variação mansory