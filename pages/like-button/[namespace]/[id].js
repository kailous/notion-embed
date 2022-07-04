import { LikeButton } from "@lyket/react";
import { useRouter } from "next/router";

export default function Button() {
  const router = useRouter();
  const { namespace, id } = router.query;

  return <>
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
          <>
            <button style="font-size: 5.625rem;background-color: transparent;border: none;" onClick={handlePress} disabled={isLoading}>
              🍕
            </button>
            {isCounterVisible && <div>Total: {totalLikes}</div>}
            {userLiked && <div>Great! I like {id} as well!</div>}
          </>
      )}
    </LikeButton>
  </>;

}
