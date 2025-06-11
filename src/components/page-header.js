// import React from 'react'
import { Typography } from 'antd'

const { Title } = Typography

// const PageHeader = ({ title }) => {
//   return (
//     <Row style={{ borderBottom: '1px solid #eeeeee', padding: '1rem' }}>
//       <Title level={1} style={{ fontSize: '1.5rem', lineHeight: 1.5, marginBottom: 0 }}>
//         {title}
//       </Title>
//     </Row>
//   )
// }

// export default PageHeader
import React from 'react'

const PageHeader = ({ title }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid #e5e7eb',
        background: '#fff',
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
      }}
    >
      <Title
        level={1}
        style={{
          fontSize: '1.875rem',
          fontWeight: 600,
          color: '#27458d',
          letterSpacing: '0.05em',
          margin: 0
        }}
      >
        {title}
      </Title>
    </div>
  )
}

export default PageHeader

