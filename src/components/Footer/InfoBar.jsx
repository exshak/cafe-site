import React from 'react'
import { SiteLogo } from '../Common/SiteLogo'

export const Info = () => (
  <div class="container py-5">
    <div class="row">
      <div class="col-xl-4 col-lg-4 pt-1 pb-1 text-center mx-auto">
        <SiteLogo logoWidth={300} logoAlt="test" />
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti.
        </p>
      </div>
    </div>
  </div>
)
