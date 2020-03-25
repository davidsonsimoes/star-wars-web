import React from 'react'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import './style.scss'

const ListSkeleton = props => {
  const { itens } = props
  return (
    <div className="list-people">
      <SkeletonTheme color="#202020" highlightColor="#444">
        <Skeleton count={itens} />
      </SkeletonTheme>;
    </div>
  );
}
  
  export default ListSkeleton