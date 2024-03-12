import { Button, Link } from "../components";
import { PersonalizationTileProps } from "../components/PersonalizationTile/PersonalizationTile";

export const crossSellPersonalizationData: PersonalizationTileProps[] = [
  {
    id: 'BOTTOM-1',
    image: './src/assets/images/cross-sell/Image_1A.png',
    account: 'Account: 1234567890',
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo li',
    button: {
      label: 'Primary',
      args: {
        className: 'personalization-primary-cta'
      }
    },
    link: {
      props: {
        children: 'Secondary',
      },
      args: {
        href: '#'
      }
    }
    // link: <Link variant="normalLink" href="#" isSmall>Secondary</Link>
    // cta: <><Button variant="primarySmall" className='personalization-primary-cta'>Primary</Button><Link variant="normalLink" href="#" isSmall>Secondary</Link></>
  },
  {
    id: 'BOTTOM-1',
    image: './src/assets/images/cross-sell/Image_1A.png',
    account: 'Account: 1234567890',
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo li',
    button: {
      label: 'Primary',
      args: {
        className: 'personalization-primary-cta'
      }
    },
    link: {
      props: {
        children: 'Secondary',
      },
      args: {
        href: '#'
      }
    }
    // cta: <><Button variant="primarySmall" className='personalization-primary-cta'>Primary</Button><Link variant="normalLink" href="#" isSmall>Secondary</Link></>
  },
]