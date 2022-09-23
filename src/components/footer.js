import React from 'react'
import { Row, Col, Typography } from 'antd'
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from '@ant-design/icons'
import useSiteMetadata from '../hooks/use-sitemetadata'
import Subscribe from './subscribe'
import * as styles from './footer.module.less'

const { Title, Paragraph } = Typography

const Footer = () => {
  const { title, description, social } = useSiteMetadata()

  return (
    <footer>
      <div className={styles.footer}>
        <Row gutter={[24, 24]}>
          <Col span={24} md={10}>
            <Title level={3} className={styles.heading}>
              About {title}
            </Title>
            <Paragraph>{description}</Paragraph>
          </Col>

          <Col span={24} md={8}>
            <Title level={3} className={styles.heading}>
              Subscribe to Updates &amp; Newsletter
            </Title>
            <Subscribe />
          </Col>

          <Col span={24} md={6}>
            <Title level={3} className={styles.heading}>
              Social Links
            </Title>
            <Paragraph>
              Subscribe to our RSS feed or follow us on Facebook, Twitter or
              Instagram for the latest updates.
            </Paragraph>
            <div className={styles.icons}>
              <a href={social.facebook} rel="noreferrer" target="_blank">
                <FacebookOutlined title={`${title} Facebook`} />
              </a>
              <a href={social.twitter} rel="noreferrer" target="_blank">
                <TwitterOutlined title={`${title} Twitter`} />
              </a>
              <a href={social.instagram} rel="noreferrer" target="_blank">
                <InstagramOutlined title={`${title} Instagram`} />
              </a>
            </div>
          </Col>
        </Row>
      </div>

      <div className={styles.copyrights}>
        &copy; Copyright {new Date().getFullYear()} by ANSS Foundation. All
        Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
