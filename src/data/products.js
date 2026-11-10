export const products = [
  {
    slug: 'zari-kaftan',
    name: 'Zarí Embroidered Kaftan',
    price: 520,
    collection: 'The Kaftan Edit',
    tagline: 'Mocha silk · gold-thread hem',
    shot: 'hero1',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description:
      'A single fall of mocha silk, cut wide through the sleeve and drawn in at the waist by a self-tie belt. The hem carries a continuous gold-thread border worked in a traditional running motif — a detail that catches the light as you move.',
    fabric:
      '100% mulberry silk crepe, 22 momme. Fully lined in cream habotai. Dry clean only. Cut and finished in our atelier in batches of twenty.',
    embroidery:
      'Machine-guided goldwork along the hem and cuffs: twelve thousand stitches per motif, worked in warm gold viscose thread on a mocha ground. Each border takes forty hours on the machine.',
    gallery: [
      { src: 'hero1', label: 'Front' },
      { src: 'emb2', label: 'Embroidery' },
      { src: 'neck', label: 'Neckline' },
      { src: 'emb1', label: 'Fabric' },
    ],
  },
  {
    slug: 'nur-silk-blouse',
    name: 'Nūr Silk Blouse',
    price: 340,
    collection: 'Silk Essentials',
    tagline: 'Satin-stitch neckline · cream',
    shot: 'shirt',
    sizes: ['XS', 'S', 'M', 'L'],
    description:
      'A quiet blouse in cream silk, with a satin-stitch yoke that traces the collar in a fine arabesque line. The shape is generous but precise — tucked in or worn loose over a wide trouser.',
    fabric:
      '100% washed silk, 19 momme. Mother-of-pearl buttons. Cool hand wash, dry flat, press on the reverse. Lined yoke.',
    embroidery:
      'Dense satin-stitch arabesque in tonal cream thread, with a single line of antique gold at the placket. Digitised from a heirloom collar in our archive.',
    gallery: [
      { src: 'shirt', label: 'Front' },
      { src: 'emb1', label: 'Embroidery' },
      { src: 'thread', label: 'Thread' },
      { src: 'silk', label: 'Fabric' },
    ],
  },
  {
    slug: 'sahar-ceremony-dress',
    name: 'Sahar Ceremony Dress',
    price: 680,
    collection: 'Ceremony',
    tagline: 'Champagne tulle · arabesque fill',
    shot: 'white1',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description:
      'Made for the evening that matters. Layers of champagne tulle over a fitted bodice, with embroidered panels that follow the seam lines rather than sit on top of them.',
    fabric:
      'Silk-lined bodice with a tulle skirt in three layers. Invisible side zip, hand-stitched hem. Dry clean only, with care.',
    embroidery:
      'Layered arabesque fill across the bodice and hem — roughly ninety thousand stitches in champagne and soft gold, re-hooped six times to keep the pattern continuous.',
    gallery: [
      { src: 'white1', label: 'Front' },
      { src: 'emb2', label: 'Embroidery' },
      { src: 'thread', label: 'Detail' },
      { src: 'zardozi', label: 'Pattern' },
    ],
  },
  {
    slug: 'gol-wrap-top',
    name: 'Gol Wrap Top',
    price: 295,
    collection: 'Everyday Linen',
    tagline: 'Cream linen · tonal thread',
    shot: 'dress2',
    sizes: ['XS', 'S', 'M', 'L'],
    description:
      'A wrap top in cream linen with a tonal embroidered border at the cuff. Soft, breathable, and easy to wear from morning into the afternoon without a thought.',
    fabric:
      '100% European linen, garment-washed for softness. Machine wash cold on a delicate cycle, line dry. Colour warms with wear.',
    embroidery:
      'Fine tonal linen thread, worked in a repeating flower motif along the cuff and hem. Intentionally subtle — a detail you find rather than one that announces itself.',
    gallery: [
      { src: 'dress2', label: 'Front' },
      { src: 'emb1', label: 'Embroidery' },
      { src: 'neck', label: 'Neckline' },
      { src: 'thread', label: 'Thread' },
    ],
  },
  {
    slug: 'yasmin-midi-dress',
    name: 'Yasmin Midi Dress',
    price: 610,
    collection: 'The Kaftan Edit',
    tagline: 'Embroidered panels · beige',
    shot: 'dress1',
    sizes: ['XS', 'S', 'M', 'L'],
    description:
      'An easy midi with embroidered side panels that draw the eye down the body. Cut from a matte silk blend that drapes without clinging.',
    fabric:
      'Silk-cotton blend in warm beige. Fully lined. Dry clean. The embroidered panels are stabilised with a fine cotton backing so the pattern keeps its shape.',
    embroidery:
      'Traditional border motifs scaled to the panel — satin fill with a couched gold outline, repeated four times and mirrored at each side seam.',
    gallery: [
      { src: 'dress1', label: 'Front' },
      { src: 'emb2', label: 'Embroidery' },
      { src: 'artisan', label: 'Atelier' },
      { src: 'emb1', label: 'Fabric' },
    ],
  },
  {
    slug: 'mehr-embroidered-coat',
    name: 'Mehr Embroidered Coat',
    price: 740,
    collection: 'Everyday Linen',
    tagline: 'Wool-silk · cuffed goldwork',
    shot: 'coat',
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'A long, unlined coat in wool-silk with an embroidered cuff and collar. Warm, unstructured, and made to be handed down.',
    fabric:
      'Wool-silk in a mocha mélange. Unlined for weight and drape. Dry clean only. Horn buttons, hand-sewn.',
    embroidery:
      'Goldwork cuffs and collar in a wide traditional band — the most labour-intensive piece in the collection at sixty-two hours of machine time.',
    gallery: [
      { src: 'coat', label: 'Front' },
      { src: 'zardozi', label: 'Embroidery' },
      { src: 'emb2', label: 'Detail' },
      { src: 'thread', label: 'Thread' },
    ],
  },
]

export const featured = ['zari-kaftan', 'sahar-ceremony-dress', 'nur-silk-blouse']

export const bySlug = (slug) => products.find((p) => p.slug === slug)
export const price = (n) => `$${n.toLocaleString('en-US')}`
