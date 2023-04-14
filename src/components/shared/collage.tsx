// eslint-disable-next-line import/no-extraneous-dependencies
import type { NamedImage } from 'next-gallery';
import Gallery from 'next-gallery';

const images: NamedImage<string>[] = [
  {
    src: 'https://picsum.photos/id/1018/1920/1080/',
    aspect_ratio: 16 / 9,
    name: 1,
  },
  {
    src: 'https://picsum.photos/id/1015/1920/1080/',
    aspect_ratio: 16 / 9,
    name: 2,
  },
];
const widths = [500, 1000, 1600];
const ratios = [2.2, 4, 6, 8];

export default function () {
  return (
    <Gallery
      {...{ images, widths, ratios }}
      initState={false}
      overlay={(name, state, setState) => (
        <MyOverlay selected={state} onClick={() => setState((s) => !s)} />
      )}
    />
  );
}
