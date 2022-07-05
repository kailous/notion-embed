import { LikeButton } from "@lyket/react";
import { useRouter } from "next/router";

export default function Button() {
  const router = useRouter();
  const { namespace, id } = router.query;

  return <div id="likethis">
    <h4 id={id}>Do you like {id}?</h4>
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
          <div id="Button">
            <button class="huge" onClick={handlePress} disabled={isLoading}>
              🍕
            </button>
            {isCounterVisible && <div>Total: {totalLikes}</div>};
            {userLiked && <div>Great! I like {id} as well!</div>}
          </div>
      )}
    </LikeButton>
  </div>;

}
