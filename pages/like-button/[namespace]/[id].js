import { LikeButton } from "@lyket/react";
import { useRouter } from "next/router";

export default function Button() {
  const router = useRouter();
  const { namespace, id } = router.query;

  return <div id="like">
    <LikeButton
        id={id}
        namespace={namespace}
        hideCounterIfLessThan={1}
    >
      {({
          handlePress,
          userLiked,
          isLoading,
          totalLikes,
          isCounterVisible
        }) => (
          <div>
            <ul>
              <li>你喜欢这篇文章吗</li>
              <li>有{isCounterVisible && <span>{totalLikes}</span>}人喜欢 {namespace} <span>|</span> {id}</li>
            </ul>
            <button onClick={handlePress} disabled={isLoading}>
              👍
            </button>
            <ul>
              {userLiked && <li>太棒了我也喜欢</li>}
              {<li>{id}</li>}
            </ul>
          </div>
      )}
    </LikeButton>
  </div>;

}
