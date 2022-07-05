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
      { => (
          <div id="Button">
            <button class="huge" >
              🍕
            </button>
            <div>Total: {totalLikes}</div>
          </div>
      )}
    </LikeButton>
  </div>;

}
