import { LikeButton } from "@lyket/react";
import { useRouter } from "next/router";

export default function Button() {
  const router = useRouter();
  const { namespace, id } = router.query;

  return <div id="likethis">
    <div id="title">
      <h4>你喜欢这篇文章</h4>
      <h4>{namespace} <span>|</span> {id} 吗?</h4>
    </div>
    <LikeButton
        id={id}
        namespace={namespace}
        hideCounterIfLessThan={1}
    >
      {({
          handlePress,
          totalLikes,
          userLiked,
          isLoading,
          isCounterVisible
        }) => (
          <div id="anniu">
            <button class="huge" onClick={handlePress} disabled={isLoading}>
              👍
            </button>
            <ul>
            {isCounterVisible && <li>有{totalLikes}人喜欢</li>}
            {userLiked && <li>太棒了我也喜欢{id}</li>}
            </ul>
          </div>
      )}
    </LikeButton>
  </div>;

}
