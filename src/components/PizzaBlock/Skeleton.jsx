import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={456}
    viewBox="0 0 280 456"
    backgroundColor="#dedede"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="130" r="120" />
    <rect x="0" y="265" rx="10" ry="10" width="280" height="27" />
    <rect x="0" y="308" rx="9" ry="9" width="280" height="88" />
    <rect x="-1" y="415" rx="9" ry="9" width="90" height="27" />
    <rect x="128" y="408" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton