import * as React from "react"
import SEO from '../../components/seo'
import Layout from "../../components/layout"
import MembershipCard from "../../components/MembershipCard"



export default function m () {
  return(
    <Layout>
      <MembershipCard>

      </MembershipCard>
    </Layout>
  )
}

export const Head = () => <SEO title="Membership Card" pathname="/membership/m" />