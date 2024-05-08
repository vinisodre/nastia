import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col px-6 lg:flex-row mx-auto my-24 max-w-[1440px] bg-zinc-500 py-8"

    >
      <div className=" md:basis-3/4">
     <h2 className="title">{slice.primary.title}</h2>
     <div>
      <PrismicRichText field={slice.primary.text} />
     </div>
    </div>
    <div className="flex justify-center items-center md:basis-1/4	 w-full">
    <PrismicNextLink field={slice.primary.button_link}>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
        {slice.primary.button_text}
      </button>
    </PrismicNextLink>
    </div>
    </section>
  );
};

export default CallToAction;
