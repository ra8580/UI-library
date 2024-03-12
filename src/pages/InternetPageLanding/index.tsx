import React from 'react'
import PersonalizationTile from '../../components/PersonalizationTile/PersonalizationTile'
import { Button, Link } from '../../components'

const index = () => {
  return (
    <div>
      <div>Internet Page Landing</div>
      <PersonalizationTile 
        id='BOTTOM-1'
        image='./src/assets/images/cross-sell/Image_1A.png'
        account='Account: 1234567890'
        title='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo li'
        button={{
          label: 'Primary',
          args: {
            className: 'personalization-primary-cta'
          }
        }}
        link={{
          props: {
            variant: 'normalLink',
            children: 'Secondary',
            isSmall: true
          },
          args: {
            href: '#'
          }
        }}
        // button={{variant: 'primarySmall', children: 'Primary'}}
        // link={<Link variant="normalLink" href="#" isSmall>Secondary</Link>}
      />
    </div>
  )
}

export default index