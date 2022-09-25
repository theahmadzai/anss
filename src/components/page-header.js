import React from 'react'
import { PageHeader as AntdPageHeader } from 'antd'
import * as styles from './page-header.module.less'

/**
 * @param {import('antd').PageHeaderProps} param
 */
const PageHeader = props => {
  return <AntdPageHeader className={styles.pageHeader} {...props} />
}

export default PageHeader