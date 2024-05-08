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
      className="mx-auto flex flex-col items-center my-24 max-w-[1440px] p-4 md:p-0"
    >
      
        <h2 className="title">{slice.primary.title}</h2>
        <div className="flex h-auto gap-8 flex-wrap justify-center">
          {slice.items.map((item, index) => (
            <div key={index} className="relative h-80 w-80">
              <PrismicNextImage key={index} field={item.image} fill className=" object-center object-cover" />
            </div>
          ))}
        </div>
      
    </section>
  );
};

export default ImageGalery;

//TODO Criar variação mansory