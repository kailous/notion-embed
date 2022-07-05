import { LikeButton } from "@lyket/react";
import { useRouter } from "next/router";

export default function Button() {
  const router = useRouter();
  const { namespace, id } = router.query;

  return <div id="likethis">
    <div id="title">
      <h4>你喜欢这篇文章吗</h4>
      {({
          totalLikes,
          isCounterVisible
      }) => (
      <h4>{isCounterVisible && <span>有{totalLikes}人喜欢</span>} {namespace} <span>|</span> {id}</h4>
      )}
    </div>
    <LikeButton
        id={id}
        namespace={namespace}
        hideCounterIfLessThan={1}
    >
      {({
          handlePress,
          userLiked,
          isLoading
        }) => (
          <div id="anniu">
            <button class="huge" onClick={handlePress} disabled={isLoading}>
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
